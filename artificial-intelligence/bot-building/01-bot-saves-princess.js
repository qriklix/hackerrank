function displayPathtoPrincess(dimension, grid) {
  let princess = null
  let mario = null

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      if (grid[i][j] === 'm') {
        mario = { x: j, y: i }
      } else if (grid[i][j] === 'p') {
        princess = { x: j, y: i }
      }

      if (mario !== null && princess !== null) {
        break;
      }
    }
  }

  let moves = []

  while (mario.x !== princess.x && mario.y !== princess.y) {
    if (mario.x < princess.x) {
      mario.x++
      moves.push('RIGHT')
    } else if (mario.x > princess.x) {
      mario.x--
      moves.push('LEFT')
    }

    if (mario.y < princess.y) {
      mario.y++
      moves.push('DOWN')
    } else if (mario.y > princess.y) {
      mario.y--
      moves.push('UP')
    }
  }

console.log(moves.join('\n'))

}
