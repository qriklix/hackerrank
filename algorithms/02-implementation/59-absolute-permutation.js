/////////////// ignore above this line ////////////////////

function absolutePermutation(n, k) {
  let numbers = Array(n).join().split(',').map(function(a){return this.i++},{i:1})

  if (k === 0) {
    return numbers.join(' ')
  }

  for (let i = 0; i < n; i += k * 2) {
    for (let j = 0; j < k; j++) {
      if (numbers[i + j + k] == null) {
        return -1
      }

      let temp = numbers[i + j]

      numbers[i + j] = numbers[i + j + k]
      numbers[i + j + k] = temp
    }
  }

  return numbers.join(' ')
}

function main() {
  let t = parseInt(readLine())
  for(var a0 = 0; a0 < t; a0++) {
    let n_temp = readLine().split(' ')
    let n = parseInt(n_temp[0])
    let k = parseInt(n_temp[1])
    console.log(absolutePermutation(n, k))
  }

}
