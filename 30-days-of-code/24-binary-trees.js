      if (root != null) {
        let queue = []
        let output = []

        queue.unshift(root)

        while (queue.length > 0) {
          let node = queue.shift()

          output.push(node.data)

          if (node.left != null) {
            queue.push(node.left)
          }

          if (node.right != null) {
            queue.push(node.right)
          }
        }

        console.log(output.join(' '))

      }
