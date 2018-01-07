function processData(input) {
  input = input.split('\n')
  let size = parseInt(input[0])

  for (let i = 1; i < size + 1; i++) {
    let str = input[i].split('')
    let output1 = ''
    let output2 = ''

    for (let j = 0; j < str.length; j++) {
      if (j % 2 === 0) {
        output1 += str[j]
      } else {
        output2 += str[j]
      }
    }

    console.log(output1, output2)
  }
}
