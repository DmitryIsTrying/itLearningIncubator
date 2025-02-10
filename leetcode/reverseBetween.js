function reverseBetween(head, left, right) {
  if (!head || left === right) {
    return head
  }

  // Создаем фиктивный узел для упрощения обработки случая, когда left = 1
  const dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy

  // Находим узел перед left (prev)
  for (let i = 1; i < left; i++) {
    prev = prev.next
  }

  // Начинаем разворот
  let current = prev.next
  let reverse = null

  for (let i = left; i <= right; i++) {
    const nextNode = current.next
    current.next = reverse
    reverse = current
    current = nextNode
  }

  // Соединяем развернутую часть с оставшимся списком
  prev.next.next = current
  prev.next = reverse

  return dummy.next
}
const head = [1, 2, 3, 4, 5],
  left = 2,
  right = 4
console.log(reverseBetween(head, left, right))
