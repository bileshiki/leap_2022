// 1.  arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];

// 2. arraySorter гэдэг function - руу өгж явуулахад уг function нь array ийг багаас их рүү эрэмбэлээд буцаадаг.
function compareNumbers(a, b) {
    return a - b;
}
console.log(arr.sort(compareNumbers));