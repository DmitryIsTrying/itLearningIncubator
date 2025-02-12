var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) {
    return head // Если список пуст, содержит один элемент или k = 0, возвращаем его
  }

  // Находим длину списка
  let length = 1
  let tail = head
  while (tail.next) {
    tail = tail.next
    length++
  }

  // Оптимизируем k, если оно больше длины списка
  k = k % length
  if (k === 0) {
    return head // Если k кратно длине, список остается неизменным
  }

  // Находим новый хвост (узел перед новым началом)
  let newTail = head
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next
  }

  // Новый головной узел
  const newHead = newTail.next

  // Разрываем связь между новым хвостом и новым началом
  newTail.next = null

  // Соединяем старый хвост с исходной головой
  tail.next = head

  // Возвращаем новый головной узел
  return newHead
}
