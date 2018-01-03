function solve(grades){
  let n = grades.length

  let roundedEndings = [3, 4, 8, 9]

  let newGrades = []

  for (let i = 0; i < n; i++) {
    if (grades[i] > 37 && roundedEndings.indexOf(grades[i] % 10) !== -1) {
      newGrade = grades[i] + 1

      while (newGrade % 5 !== 0) {
        newGrade++
      }

      newGrades.push(newGrade)
    } else {
      newGrades.push(grades[i])
    }
  }

  return newGrades
}
