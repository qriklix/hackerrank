function printGmail(people) {
  let names = []

  for (i in people) {
    if (people[i].email.match(/^[a-z.]+@gmail.com$/)) {
      names.push(people[i].name)
    }
  }

  names.sort()

  for (let i = 0; i < names.length; i++) {
    console.log(names[i])
  }
}

function main() {
  let N = parseInt(readLine())
  let people = []

  for (let a0 = 0; a0 < N; a0++){
    let firstName_temp = readLine().split(' ')
    let firstName = firstName_temp[0]
    let emailID = firstName_temp[1]

    people.push({ name: firstName, email: emailID })
  }

  printGmail(people)
}
