function checkSumZero(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(checkSumZero([-5, 10, -3, -2, 0, 2, 4, 6, 8]));
