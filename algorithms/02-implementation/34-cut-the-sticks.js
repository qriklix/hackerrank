function cutTheSticks(arr, results = []) {
  if (arr.length === 0) {
    return results
  }

  results.push(arr.length)

  let smallest = arr.reduce((a, b) => { return Math.min(a, b) })

  arr = arr.map(elem => elem - smallest).filter(elem => elem !== 0)

  return cutTheSticks(arr, results)

}
