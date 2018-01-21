function equals(G, P, gri, gci) {
  let pRow = P.length
  let pCol = P[0].length

  for (let i = 0; i < pRow; i++) {
    for (let j = 0; j < pCol; j++) {
      if (G[gri + i][gci + j] !== P[i][j]) {
        return false
      }
    }
  }

  return true
}

function gridSearch(G, P) {
  let gRow = G.length
  let gCol = G[0].length

  let pRow = P.length
  let pCol = P[0].length

  for (let gri = 0; gri < gRow - pRow + 1; gri++) {
    for (let gci = 0; gci < gCol - pCol + 1; gci++) {
      if (equals(G, P, gri, gci)) {
        return 'YES'
      }
    }
  }

  return 'NO'
}
