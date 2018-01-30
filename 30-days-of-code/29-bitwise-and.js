function printMaximum(n, k) {
  let maximum = 0

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      let bitwise = i & j

      if (bitwise < k && bitwise > maximum) {
        maximum = bitwise
      }
    }
  }

  console.log(maximum)
}


function main() {
  let t = parseInt(readLine())

  for(let a0 = 0; a0 < t; a0++) {

    let n_temp = readLine().split(' ')
    let n = parseInt(n_temp[0])
    let k = parseInt(n_temp[1])

    printMaximum(n, k)
  }
}
