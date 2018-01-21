function main() {
  var n = parseInt(readLine())
  a = readLine().split(' ')
  a = a.map(Number)

  let numberOfSwaps = 0

  for (let i = 0; i < n - 1; i++) {
    if (a[i] > a[i + 1]) {
      let temp = a[i]
      a[i] = a[i + 1]
      a[i + 1] = temp

      i = -1
      numberOfSwaps++
    }
  }

  console.log('Array is sorted in', numberOfSwaps, 'swaps.')
  console.log('First Element:', a[0])
  console.log('Last Element:', a[n - 1])

}
