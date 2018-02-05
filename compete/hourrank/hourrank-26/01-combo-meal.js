function profit(b, s, c) {
  return b + s - c
  /*
  // brute force b-i+s-i = c-i ---> b+s-2i = c-i ---> b+s-c=i
  for (let i = 0; i <= 5000; i++) {
    if ((b - i) + (s - i) === c - i) {
      return i
    }
  }
  */
}
