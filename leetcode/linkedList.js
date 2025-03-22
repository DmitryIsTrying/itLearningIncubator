class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next ?? null
  }
}
const head = new ListNode(0)
let current = head
for (let i = 1; i < 10; i++) {
  current.next = new ListNode(i)
  current = current.next
}

function checkList(head) {
  let current = head
  while (current) {
    console.log(current.val)
    current = current.next
  }
}
checkList(head)
