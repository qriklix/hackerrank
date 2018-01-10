function rotate(a, k) {
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
}

function circularArrayRotation(a, m) {
  for (i in m) {
    console.log(a[m[i]])
  }
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);
    var m = [];
    for(var m_i = 0; m_i < q; m_i++){
       m[m_i] = parseInt(readLine());
    }
    var rotatedA = rotate(a, k);
    var result = circularArrayRotation(a, m);
    console.log(result.join("\n"));

}
