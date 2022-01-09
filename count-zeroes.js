function countZeroes(arr) {
  let highIdx = arr.length - 1;
  let lowIdx = 0;

  while (highIdx >= lowIdx) {
    let midIdx = lowIdx + Math.floor((highIdx - lowIdx) / 2);

    if ((midIdx === 0 || arr[midIdx - 1] === 1) && arr[midIdx] === 0) {
      return arr.length - midIdx;
    } else if (arr[midIdx] === 1) {
      lowIdx = midIdx + 1;
    } else {
      highIdx = midIdx - 1;
    }
  }
  return 0;
}

module.exports = countZeroes;
