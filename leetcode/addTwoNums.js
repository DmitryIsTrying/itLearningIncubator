function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0)
  let current = dummyHead
  let carry = 0

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 !== null ? l1.val : 0
    const val2 = l2 !== null ? l2.val : 0
    const sum = val1 + val2 + carry

    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next

    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }

  return dummyHead.next
}
const l1 = [9, 9, 9, 9, 9, 9, 9],
  l2 = [9, 9, 9, 9]
console.log(addTwoNumbers(l1, l2))
