function pickingNumbers(a) {
  a.sort()

  lengthA = a.length

  let streak = 1
  let firstOfStreak = a[0]
  let longestStreak = 1

  for (let i = 1; i < lengthA; i++) {
    if (Math.abs(a[i] - firstOfStreak) < 2) {
      streak++

      if (streak > longestStreak) {
        longestStreak = streak
      }
    } else {
      streak = 1
      firstOfStreak = a[i]

    }
  }

  return longestStreak
}
