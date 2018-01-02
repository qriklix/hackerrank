function miniMaxSum(arr) {
  let min = null
  let max = null

  for (i = 0; i < arr.length; i++) {
    let sum = 0

    for (j = 0; j < arr.length; j++) {
      if (j !== i) {
        sum += arr[j]
      }
    }

    if (min === null || sum < min) {
      min = sum
    }

    if (max === null || sum > max) {
      max = sum
    }

  }

  console.log(min, max)
}
