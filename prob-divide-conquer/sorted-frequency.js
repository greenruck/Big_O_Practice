function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx -firstIdx + 1;
}

function findFirst(arr, num, low = 0, high = arr.length -1) {
    while (high >= low) {
        let mid = Math.floor((low + high)/2)
        if ((mid === 0 || num > arr[mid-1]) && arr[mid]===num){
            return mid;
        } else if (num > arr[mid]) {
            low = mid +1;
        }else {
            high = mid -1;
        }
    }
    return -1;
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
    while (high >= low) {
        let mid = Math.floor((low + high) / 2)
        if ((mid === arr.length -1 || num < arr[mid+1]) && arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1
        } 
    }
    return -1;
}
//test for VS concsole
let arr = [ 2,3,3,4,5,6,6,7,13,13,13,15,16,16];
        let num = 13;
        console.log(`Count of ${num} is ` + sortedFrequency(arr, 13));

module.exports = sortedFrequency