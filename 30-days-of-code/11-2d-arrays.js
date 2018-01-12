function main() {
  var arr = []
  for (let arr_i = 0; arr_i < 6; arr_i++){
    arr[arr_i] = readLine().split(' ')
    arr[arr_i] = arr[arr_i].map(Number)
  }

  let maxHourglassSum = null
  let arraySize = arr.length

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let hourglassSum =
        arr[i][j]       + arr[i][j + 1]     + arr[i][j + 2]
                        + arr[i + 1][j + 1]
        + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]

        if (maxHourglassSum === null || maxHourglassSum < hourglassSum) {
          maxHourglassSum = hourglassSum
        }
    }
  }

  console.log(maxHourglassSum)
}
