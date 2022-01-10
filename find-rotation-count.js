function findRotationCount(arr) {
  if (arr.length === 0 || arr[0] < arr[arr.length - 1]) {
    return 0;
  }
  let lowIdx = 0;
  let highIdx = arr.length - 1;
  while (lowIdx <= highIdx) {
    let midIdx = Math.floor((highIdx + lowIdx) / 2);
    if (arr[midIdx] > arr[midIdx + 1]) {
      return midIdx + 1;
    } else if (arr[lowIdx] <= arr[midIdx]) {
      lowIdx = midIdx + 1;
    } else {
      highIdx = midIdx - 1;
    }
  }
}

module.exports = findRotationCount;
