function workbook(n, k, arr) {
  let count = 0
  let page = 0

  for (let chapter = 1; chapter < arr.length + 1; chapter++) {
    page++
    let problems = arr[chapter - 1];

    for (let problem = 1; problem < problems + 1; problem++) {
      if (problem - 1 !== 0 && (problem - 1) % k === 0) {
        page++
      }

      if (problem === page) {
        count++

      }
    }
  }

  return count
}
