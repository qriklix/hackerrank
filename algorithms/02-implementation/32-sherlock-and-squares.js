function squares(a, b) {
  let sqrta = Math.ceil(Math.sqrt(a))
  let sqrtb = Math.floor(Math.sqrt(b))

  return sqrtb - sqrta + 1
}
