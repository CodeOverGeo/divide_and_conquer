function sortedFrequency(arr, target) {
  let firstIdx = findfirstIdx(arr, target);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLastIdx(arr, target, firstIdx);

  return lastIdx - firstIdx + 1;
}

function findfirstIdx(arr, target, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let middleIdx = Math.floor((high + low) / 2);

    if (
      (middleIdx === 0 || target > arr[middleIdx - 1]) &&
      arr[middleIdx] === target
    ) {
      return middleIdx;
    } else if (arr[middleIdx] < target) {
      return findfirstIdx(arr, target, middleIdx + 1, high);
    } else {
      return findfirstIdx(arr, target, low, middleIdx - 1);
    }
  }
  return -1;
}

function findLastIdx(arr, target, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let middleIdx = Math.floor((high + low) / 2);

    if (
      (middleIdx === arr.length - 1 || target < arr[middleIdx + 1]) &&
      arr[middleIdx] === target
    ) {
      return middleIdx;
    } else if (arr[middleIdx] > target) {
      return findLastIdx(arr, target, low, middleIdx - 1);
    } else {
      return findLastIdx(arr, target, middleIdx + 1, high);
    }
  }
  return -1;
}

module.exports = sortedFrequency;
