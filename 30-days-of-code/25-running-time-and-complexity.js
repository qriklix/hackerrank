function isPrime(n) {
  if (n === 1) {
    return false
  }

  let isPrime = true

  let rootInput = Math.sqrt(n)

  for (let i = 2; i <= rootInput; i++) {
    if (n % i === 0) {
      isPrime = false

    }
  }

  return isPrime
}

function processData(input) {
  let numbers = input.split('\n').map(Number)

  numbers.shift()

  for (let key in numbers) {
    console.log(isPrime(numbers[key]) ? 'Prime' : 'Not prime')
  }

}
