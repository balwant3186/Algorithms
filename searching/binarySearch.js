let binarySearch = (arr, n) => {
    let start = 0;
    let end = arr.length - 1

    while(start <= end) {
        let mid = Math.floor((start + end ) / 2)
        if(arr[mid] == n) {
            return mid
        }
        if(arr[mid] < n) {
            start = mid + 1
        }
        if(arr[mid] > n) {
            end = mid - 1
        }
    }
    return -1
}

let arr = [23, 50, 300, 2334, 3427, 4348, 6543]
let n = 300

console.log(binarySearch(arr, n))