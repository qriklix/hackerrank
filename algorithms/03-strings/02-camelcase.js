function camelcase(s) {
  let capitals = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      capitals++
    }
  }

  return capitals + 1
}
