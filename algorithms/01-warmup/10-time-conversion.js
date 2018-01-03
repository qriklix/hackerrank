function timeConversion(s) {
  let format = s.substring(8,10)

  if (format === 'PM') {
    hours = parseInt(s.substring(0,2))

    return (hours === 12 ? 12 : hours + 12) + s.substring(2,8)
  } else {
    hours = parseInt(s.substring(0,2))

    return hours === 12 ? '00' + s.substring(2,8) : s.substring(0,8)
  }
}
