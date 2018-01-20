function beautifulTriplets(d, arr) {
  let arrLength = arr.length

  let numberOfTriplets = 0

  for (let i = 0; i < arrLength - 2; i++) {
    if (arr.indexOf(arr[i] + d) !== -1 && arr.indexOf(arr[i] + 2 * d) !== -1) {
      numberOfTriplets++
    }
  }

  return numberOfTriplets
}
