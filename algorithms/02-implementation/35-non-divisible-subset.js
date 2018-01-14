function nonDivisibleSubset(k, arr) {
  let arrSize = arr.length

  moduli = new Array(k).fill(0)

  for (let i = 0; i < arrSize; i++) {
    modulus = arr[i] % k
    moduli[modulus]++
  }

  let count = moduli[0] > 0 ? 1 : 0

  for (let i = 1; i < k / 2; i++) {
    count += Math.max(moduli[i], moduli[k - i])
  }

  if (k % 2 === 0) {
    count++
  }

  return count
}
