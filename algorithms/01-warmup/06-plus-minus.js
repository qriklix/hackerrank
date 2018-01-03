function plusMinus(arr) {
  let n = arr.length
  let positive = 0
  let negative = 0
  let zero = 0

  for (i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positive++
    } else if (arr[i] < 0) {
      negative++
    } else {
      zero++
    }
  }

  console.log(positive / n)
  console.log(negative / n)
  console.log(zero / n)
}
