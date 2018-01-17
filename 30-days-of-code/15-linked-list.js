this.insert = function(head, data) {
  let node = new Node(data)

  if (head == null) {
    return node
  }

  let last = head

  while (last.next != null) {
    last = last.next
  }

  last.next = node

  return head

}
