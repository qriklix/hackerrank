  this.removeDuplicates = function(head) {
    let node = head

    while (node.next != null) {
      if (node.data === node.next.data) {
        node.next = node.next.next
      } else {
        node = node.next
      }
    }

    return head
  }
