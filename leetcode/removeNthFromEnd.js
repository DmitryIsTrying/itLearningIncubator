function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0) // Фиктивный узел для упрощения обработки
  dummy.next = head
  let fast = dummy
  let slow = dummy

  // Перемещаем fast на n шагов вперед
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  // Перемещаем fast до конца списка, а slow будет отставать на n шагов
  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }

  // Удаляем узел
  slow.next = slow.next.next

  return dummy.next
}
const head = [1, 2, 3, 4, 5],
  n = 2
console.log(removeNthFromEnd(head, n))
