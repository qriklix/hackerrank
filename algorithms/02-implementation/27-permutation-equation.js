function permutationEquation(p) {
  let pLength = p.length

  let arr = []
  let results = []

  for (let i = 0; i < pLength; i++) {
    arr[i] = p[i]
  }

  for (let i = 0; i < pLength; i++) {
    let p0 = arr.indexOf(i + 1) + 1
    let p1 = arr.indexOf(p0) + 1

    results.push(p1)
  }

  return results
}
