function sockMerchant(n, ar) {
  if (n < 2) {
    return 0
  }

  ar.sort()

  let pairs = 0

  let lastSock = ar.shift()

  do {
    let sock = ar.shift()

    if (sock === lastSock) {
      pairs++
      lastSock = null
    } else {
      lastSock = sock
    }

  } while (ar.length > 0)

  return pairs
}
