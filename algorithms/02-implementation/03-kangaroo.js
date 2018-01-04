function kangaroo(x1, v1, x2, v2) {
  if (x1 === x2) {
    return 'YES'
  }

  if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1) || v1 === v2) {
    return 'NO'
  }

  return kangaroo(x1 + v1, v1, x2 + v2, v2)
}
