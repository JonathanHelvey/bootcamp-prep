// YOUR CODE BELOW
function myReverse(arr) {
  let reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(arr[i]);
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}
