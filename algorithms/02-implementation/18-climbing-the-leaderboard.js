function simpleUnique(arr) {
  let len = arr.length
  let lastAdded = arr[0]

  let unique = [lastAdded]

  for (let i = 1; i < len; i++) {
    if (arr[i] !== lastAdded) {
      lastAdded = arr[i]
      unique.push(lastAdded)
    }
  }

  return unique
}

function climbingLeaderboard(scores, alice) {
  scores = simpleUnique(scores)

  let results = []

  let aliceLength = alice.length
  let scoresLength = scores.length
  let scoresIndex = scores.length - 1

  for (let i = 0; i < aliceLength; i++) {
    for (scoresIndex; scoresIndex > -1; scoresIndex--) {
      if (alice[i] < scores[scoresIndex]) {
        results.push(scoresIndex + 2)
        break
      }
    }
  }

  while (aliceLength > results.length) {
    results.push(1)
  }

  return results
}
