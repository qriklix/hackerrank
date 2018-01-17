function main() {
  const S = readLine()

  try {
    let n = Number(S)

    S != n && errorFunction()

    console.log(n)
  } catch (e) {
    console.log('Bad String')
  }
}
