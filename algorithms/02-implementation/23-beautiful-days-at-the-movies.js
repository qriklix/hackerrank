function beautifulDays(i, j, k) {
  let count = 0
  for (let day = i; day < j + 1; day++) {
    let reversedDay = parseInt(day.toString().split('').reverse().join(''))

    if ((Math.abs(day - reversedDay) / k) % 1 === 0) {
        count++
    }
  }

  return count
}
