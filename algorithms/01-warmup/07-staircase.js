function staircase(n) {
  for (i = 0; i < n; i++) {
    let line = ''
    for (j = 0; j < n; j++) {
      if (j >= n - i - 1) {
        line += '#'
      } else {
        line += ' '
      }
    }
    console.log(line)
  }
}
