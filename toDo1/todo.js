function pushFront(arr, value) {
    for (let i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = value;
    return arr;
  }
  
  function popFront(arr) {
    if (arr.length === 0) {
      console.log('Array is empty');
      return undefined;
    }
    const removedValue = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.pop();
    console.log(removedValue + ' returned, with ' + arr + ' printed in the function');
    return removedValue;
  }
  
  function insertAt(arr, index, value) {
    for (let i = arr.length; i > index; i--) {
      arr[i] = arr[i - 1];
    }
    arr[index] = value;
    return arr;
  }
  
  function removeAt(arr, index) {
    if (index < 0 || index >= arr.length) {
      console.log('Index out of bounds');
      return undefined;
    }
    const removedValue = arr[index];
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.pop();
    console.log(removedValue + ' returned, with ' + arr + ' printed in the function');
    return removedValue;
  }
  
  function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    return arr;
  }
  
  function removeDupes(arr) {
    if (arr.length <= 1) return arr;
  
    let uniqueIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[uniqueIndex]) {
        uniqueIndex++;
        arr[uniqueIndex] = arr[i];
      }
    }
    arr.length = uniqueIndex + 1;
    return arr;
  }
  
  // Example usage:
  const arr1 = [5, 7, 2, 3];
  console.log(pushFront(arr1, 8));
  
  const arr2 = [0, 5, 10, 15];
  console.log(popFront(arr2));
  
  const arr3 = [100, 200, 5];
  console.log(insertAt(arr3, 2, 311));
  
  const arr4 = [1000, 3, 204, 77];
  console.log(removeAt(arr4, 1));
  
  const arr5 = [1, 2, 3, 4];
  console.log(swapPairs(arr5));
  
  const arr6 = [-2, -2, 3.14, 5, 5, 10];
  console.log(removeDupes(arr6));
  