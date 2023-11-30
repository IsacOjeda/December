// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

// [1]
// []

function mergeSort(arr) {
    if (arr.length <= 1){
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0,middle);
    console.log('leftHalf: ', leftHalf);
    let rightHalf = arr.slice(middle);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);
    console.log('sortedRight: ', sortedRight);
    return mergeSortedArrays(sortedLeft, sortedRight);

}

// console.log(mergeSort([5,300,15,1,35]));

function mergeSortedArrays(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            if (leftIndex === left.length-1){
                result.push(right[rightIndex]);
            }
            leftIndex++;
        } else{
            result.push(right[rightIndex]);
            if (rightIndex === right.length-1){
                result.push(left[leftIndex])
            }
            rightIndex++;
        }
    }
    return result
}

console.log(mergeSortedArrays([1,5,10,37], [2,7,11]));
console.log(mergeSort([1,110,10,37,3,3,40,510,30,2]));

// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array

//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);