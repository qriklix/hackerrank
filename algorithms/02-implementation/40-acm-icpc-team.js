function combine(topic1, topic2) {
  let topic = 0
  let topicLength = topic1.length

  for (let i = 0; i < topicLength; i++) {
    if (topic1[i] === '1' || topic2[i] === '1') {
      topic++
    }
  }

  return topic
}

function acmTeam(topic) {
  let topicLength = topic.length

  let maximum = 0
  let numberOfMaximums = 0

  for (let i = 0; i < topicLength; i++) {
    for (let j = i; j < topicLength; j++) {
      let numberOfOnes = combine(topic[i], topic[j])

      if (maximum < numberOfOnes) {
        maximum = numberOfOnes
        numberOfMaximums = 1
      } else if (maximum === numberOfOnes) {
        numberOfMaximums++
      }

    }
  }

  return [maximum, numberOfMaximums]
}
