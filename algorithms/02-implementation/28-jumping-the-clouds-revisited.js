function jumpingOnClouds(c, k) {
    let i = 0
    let cLength = c.length
    let energy = 100

    do {
      energy -= 1

      if (c[i] === 1) {
        energy -= 2
      }

      i += k

      if (i >= cLength) {
        i -= cLength
      }

    } while (i !== 0)

    return energy
}
