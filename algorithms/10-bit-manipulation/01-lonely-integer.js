function lonelyinteger(a) {
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
      return a[i]
    }
  }
}
