/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  const dummy = new ListNode()
  dummy.next = head

  let current = dummy

  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      // Если найдены дубликаты, пропускаем все узлы с этим значением
      let val = current.next.val
      while (current.next?.val === val) {
        current.next = current.next.next
      }
    } else {
      // Если дубликатов нет, просто переходим к следующему узлу
      current = current.next
    }
  }

  return dummy.next
}
