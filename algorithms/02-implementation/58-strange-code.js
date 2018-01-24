function strangeCode(t) {
  let top = 3
  let height = 3

  while (top < t) {
    top = top * 2 + 3
    height = height * 2
  }

  return top - t + 1
}
