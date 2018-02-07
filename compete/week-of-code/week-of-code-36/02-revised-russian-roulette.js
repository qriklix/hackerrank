function revisedRussianRoulette(doors) {
  let min = 0
  let max = doors.reduce((max, value) => { return max + value }, 0)
  let counter = 0

  for (let i = 0; i < doors.length; i++) {
    if (doors[i] === 1) {
      counter++
    } else {
      min += Math.ceil(counter / 2)
      counter = 0
    }
  }

  min += Math.ceil(counter / 2)

  return [min, max]
}
