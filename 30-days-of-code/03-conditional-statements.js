function main() {
  var N = parseInt(readLine())

  if (N % 2 !== 0) {
    console.log('Weird')
  } else {
    if (N > 1 && N < 6 || N > 20) {
      console.log('Not Weird')
    } else {
      console.log('Weird')
    }
  }
}
