function super_reduced_string(s) {
  let arr = s.split('')

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2)
      i -= 2
    }
  }

  return arr.length === 0 ? 'Empty String' : arr.join('')
}
