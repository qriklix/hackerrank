function breakingRecords(score) {
  let scoreLength = score.length

  let min = score[0]
  let max = score[0]

  let countMin = 0
  let countMax = 0

  for (let i = 0; i < scoreLength; i++) {
    if (score[i] < min) {
      min = score[i]
      countMin++
    }

    if (score[i] > max) {
      max = score[i]
      countMax++
    }
  }

  return [countMax, countMin]
}
