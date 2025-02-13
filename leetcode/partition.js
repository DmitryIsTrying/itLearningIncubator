var partition = function (head, x) {
  let leftDummy = new ListNode() // Фиктивный узел для левого списка
  let rightDummy = new ListNode() // Фиктивный узел для правого списка

  let currentLeft = leftDummy // Текущий узел левого списка
  let currentRight = rightDummy // Текущий узел правого списка
  let currentHead = head // Текущий узел исходного списка

  while (currentHead) {
    if (currentHead.val < x) {
      currentLeft.next = currentHead // Добавляем узел в левый список
      currentLeft = currentLeft.next // Перемещаем указатель левого списка
    } else {
      currentRight.next = currentHead // Добавляем узел в правый список
      currentRight = currentRight.next // Перемещаем указатель правого списка
    }
    currentHead = currentHead.next // Перемещаемся к следующему узлу исходного списка
  }

  currentRight.next = null // Завершаем правый список
  currentLeft.next = rightDummy.next // Соединяем левый и правый списки

  return leftDummy.next // Возвращаем начало левого списка
}
