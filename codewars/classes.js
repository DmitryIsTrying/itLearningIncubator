class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function length(head) {
  let lng = 0
  while (head !== null) {
    head = head.next
    lng++
  }
  return lng
}

function count(head, data) {
  let lng = 0
  while (head !== null) {
    if (head.data === data) lng++
    head = head.next
  }
  return lng
}
console.log(length(null))
