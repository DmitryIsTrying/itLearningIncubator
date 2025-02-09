var copyRandomList = function (head) {
  if (!head) return null // Если список пуст, возвращаем null

  // 1. Создаем копии узлов и вставляем их между оригинальными узлами
  let current = head
  while (current) {
    const copy = new Node(current.val) // Создаем копию узла
    copy.next = current.next // Вставляем копию после оригинального узла
    current.next = copy
    current = copy.next // Переходим к следующему оригинальному узлу
  }

  // 2. Копируем случайные указатели
  current = head
  while (current) {
    if (current.random) {
      current.next.random = current.random.next // Копируем random указатель
    }
    current = current.next.next // Переходим к следующему оригинальному узлу
  }

  // 3. Разделяем оригинальный и скопированный список
  const dummy = new Node(0) // Фиктивный узел для удобства
  let copyCurrent = dummy
  current = head
  while (current) {
    copyCurrent.next = current.next // Добавляем копию в новый список
    copyCurrent = copyCurrent.next
    current.next = current.next.next // Восстанавливаем оригинальный список
    current = current.next
  }

  return dummy.next // Возвращаем голову скопированного списка
}
