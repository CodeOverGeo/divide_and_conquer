function findFloor(arr, target, low = 0, high = arr.length - 1) {
  if (target < arr[0]) return -1;
  if (target >= arr[high]) return arr[high];

  while (high >= low) {
    let midIdx = Math.floor((high + low) / 2);

    if (arr[midIdx] === target) return arr[midIdx];

    if (arr[midIdx - 1] <= target && target < arr[midIdx]) {
      return arr[midIdx - 1];
    } else if (target < arr[midIdx]) {
      high = midIdx - 1;
    } else {
      low = midIdx + 1;
    }
  }

  return -1;
}

module.exports = findFloor;
