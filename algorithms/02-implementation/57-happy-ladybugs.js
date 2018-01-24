function areLadybugsHappy(n, b) {
  for (let i = 0; i < n; i++) {
    if (b[i] !== '_' && b.indexOf(b[i]) === b.lastIndexOf(b[i])) {
      return false
    }
  }

  if (b.indexOf('_') === -1) {
    for (let i = 1; i < n - 1; i++) {
      if (b[i - 1] !== b[i] && b[i] !== b[i + 1]) {
        return false
      }
    }
  }

  return true
}

function main() {
  let Q = parseInt(readLine())
  for (let a0 = 0; a0 < Q; a0++){
    let n = parseInt(readLine())
    let b = readLine()

    let happy = areLadybugsHappy(n, b)
    console.log(happy ? 'YES' : 'NO')
  }

}
