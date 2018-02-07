function acidNaming(acid_name) {
  let start = acid_name.substr(0, 5)
  let ending = acid_name.substr(acid_name.length - 2)

  if (ending === 'ic') {
    return start === 'hydro' ? 'non-metal acid' : 'polyatomic acid'
  } else {
    return 'not an acid'
  }
}
