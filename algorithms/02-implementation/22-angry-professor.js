function angryProfessor(k, a) {
  let numberOfLate = 0
  for (key in a) {
    if (a[key] > 0) {
      numberOfLate++
    }
  }

  return k > a.length - numberOfLate ? 'YES' : 'NO'
}
