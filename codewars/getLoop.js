function loop_size(node) {
  let slow = node
  let fast = node

  do {
    slow = slow.next
    fast = fast.next.next
  } while (slow !== fast)

  let count = 0
  do {
    fast = fast.next
    count++
  } while (slow !== fast)

  return count
}
console.log()
