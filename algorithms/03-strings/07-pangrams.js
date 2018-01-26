process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
  let s = input.toLowerCase();
  let neededLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  for (let i = 0; i < s.length; i++) {
    if (neededLetters.includes(s[i])) {
      neededLetters.splice(neededLetters.indexOf(s[i]), 1)
    }
  }

  console.log(neededLetters.length === 0 ? 'pangram' : 'not pangram')

});
