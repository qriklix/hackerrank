class Student extends Person {
  /*
  *   Class Constructor
  *
  *   @param firstName - A string denoting the Person's first name.
  *   @param lastName - A string denoting the Person's last name.
  *   @param id - An integer denoting the Person's ID number.
  *   @param scores - An array of integers denoting the Person's test scores.
  */
  constructor (firstName, lastName, id, scores) {
    super(firstName, lastName, id)

    this.scores = scores
  }

  /*
  *   Method Name: calculate
  *   @return A character denoting the grade.
  */
  calculate() {
    let average = this.scores.reduce((accumulator, currentValue) => accumulator + currentValue) / this.scores.length

    if (average < 40) {
      return 'T'
    } else if (average < 55) {
      return 'D'
    } else if (average < 70) {
      return 'P'
    } else if (average < 80) {
      return 'A'
    } else if (average < 90) {
      return 'E'
    } else {
      return 'O'
    }
  }
}
