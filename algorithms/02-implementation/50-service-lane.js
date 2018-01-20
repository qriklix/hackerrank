function serviceLane(widths, cases) {
  let minimums = []

  for (let i = 0; i < cases.length; i++) {
    let minimum = 3
    let lane = widths.slice(cases[i][0], cases[i][1] + 1)

    for (let j = 0; j < lane.length; j++) {
      if (minimum > lane[j]) {
        minimum = lane[j]
      }
    }

    minimums.push(minimum)
  }

  return minimums
}


function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var t = parseInt(n_temp[1]);
    width = readLine().split(' ');
    width = width.map(Number);
    var cases = [];
    for(cases_i = 0; cases_i < t; cases_i++){
       cases[cases_i] = readLine().split(' ');
       cases[cases_i] = cases[cases_i].map(Number);
    }
    var result = serviceLane(width, cases);
    console.log(result.join("\n"));

}
