class Solution {
  constructor() {
    this.queue = []
    this.stack = []
  }

  pushCharacter(c) {
    this.stack.push(c)
  }

  popCharacter() {
    return this.stack.pop()
  }

  enqueueCharacter(c) {
    this.queue.push(c)
  }

  dequeueCharacter() {
    return this.queue.shift()
  }

}
