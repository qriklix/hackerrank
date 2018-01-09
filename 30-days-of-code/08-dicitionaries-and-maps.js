function processData(input) {
  input = input.split('\n')

  let n = parseInt(input[0])
  let inputLength = input.length

  let map = {}

  for (let i = 1; i < n + 1; i++) {
    let entry = input[i].split(' ')

    map[entry[0]] = entry[1]
  }

  for (let i = n + 1; i < input.length; i++) {
    let name = input[i]

    if (map.hasOwnProperty(name)) {
      console.log(name + '=' + map[name])
    } else {
      console.log('Not found')
    }
  }
}
