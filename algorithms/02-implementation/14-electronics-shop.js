function getMoneySpent(keyboards, drives, s){
  keyboards.sort().reverse()
  drives.sort().reverse()

  let keyBoardsLength = keyboards.length
  let drivesLength = drives.length

  let max = -1

  for (let i = 0; i < keyBoardsLength; i++) {
    for (let j = 0; j < drivesLength; j++) {
      let price = keyboards[i] + drives[j]

      if (price <= s && price > max) {
        max = price
      }
    }
  }

  return max
}
