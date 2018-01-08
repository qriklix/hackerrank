function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    arr = arr.reverse();

    console.log(...arr)
}
