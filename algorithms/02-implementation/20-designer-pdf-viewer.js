function designerPdfViewer(h, word) {
  let width = word.length
  let height = 0

  let letters = word.split('')

  for (let i = 0; i < letters.length; i++) {
    let letterPosition = letters[i].charCodeAt(0) - 97
    let letterHeight = h[letterPosition]
    if (height < letterHeight) {
      height = letterHeight
    }
  }

  return width * height
}
