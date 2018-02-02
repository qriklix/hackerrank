function profit(b, s, c) {
  for (let i = 0; i <= 5000; i++) {
    if ((b - i) + (s - i) === c - i) {
      return i
    }
  }
}
