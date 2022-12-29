function countUnique(arr) {
  // console.log(arr);
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log(i, j);
  }
  return i + 1;
}

console.log(countUnique([1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9]));
