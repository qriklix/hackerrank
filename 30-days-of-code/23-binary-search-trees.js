      if (root.left == null && root.right == null) {
        return 0
      }

      let leftHeight = root.left == null ? 0 : this.getHeight(root.left)
      let rightHeight = root.right == null ? 0: this.getHeight(root.right)

      return 1 + Math.max(leftHeight, rightHeight)
