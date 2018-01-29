function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) {
    return 10000
  } else if (y1 === y2 && m1 > m2) {
    return (m1 - m2) * 500
  } else if (y1 === y2 && m1 === m2 && d1 > d2) {
    return (d1 - d2) * 15
  } else {
    return 0
  }
}

function processData(input) {
  let date1 = input.split('\n')[0].split(' ').map(Number)
  let date2 = input.split('\n')[1].split(' ').map(Number)

  console.log(libraryFine(date1[0], date1[1], date1[2], date2[0], date2[1], date2[2]))
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
