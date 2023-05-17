const { captureRejectionSymbol } = require("events");

function firstZero(arr , low , high) {
    while (high >= low) {
     
        // Check if mid element is first 0
        let mid = low + Math.floor((high - low) / 2);
        if ((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0){
            return mid;
        } else if (arr[mid] == 1){ // If mid element is not 0
            low = mid +1;
        }else // If mid element is 0, but not first 0
            {high = mid -1;
        }
    }
    return -1;
}

// A wrapper over recursive function firstZero()
function countZeroes(arr , n)
{
 
    // Find index of first zero in given array
    let first = firstZero(arr, 0, n - 1);

    // If 0 is not present at all, return 0
    if (first == -1)
        return 0;

    return (n - first);
}
let arr = [ 1, 1, 1, 1 , 1, 0, 0, 0, 0, 0, 0, 0 , 0];
        let n = arr.length;
        console.log("Count of zeroes is " + countZeroes(arr, n));