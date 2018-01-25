function marsExploration(s) {
  return s.split('').reduce(
    (accumulator, value, index) => {
      if (index % 3 === 0 && value !== 'S'
        || index % 3 === 1 && value !== 'O'
        || index % 3 === 2 && value !== 'S') {
          return accumulator + 1
        }

      return accumulator
    }, 0)
}
