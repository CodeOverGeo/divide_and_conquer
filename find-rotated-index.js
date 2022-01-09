function findRotatedIndex(arr, target) {
  let pivot = findPivot(arr);

  if (pivot > 0 && target >= arr[0] && target <= arr[pivot - 1]) {
    return targetSearch(arr, target, 0, pivot - 1);
  } else {
    return targetSearch(arr, target, pivot, arr.length - 1);
  }
}

function findPivot(arr) {
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

function targetSearch(arr, target, lowIdx, highIdx) {
  if (arr.length === 0) return -1;
  if (target < arr[lowIdx] || target > arr[highIdx]) return -1;

  while (lowIdx <= highIdx) {
    let midIdx = Math.floor((highIdx + lowIdx) / 2);
    if (arr[midIdx] === target) {
      return midIdx;
    } else if (target < arr[midIdx]) {
      highIdx = midIdx - 1;
    } else {
      lowIdx = midIdx + 1;
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
