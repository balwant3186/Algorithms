let linearSearch = (arr, n) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n) {
            return i
        }
    }
    return -1
}

let arr = [1, 5, 3, 29, 23]

let n = 3

console.log(linearSearch(arr, n))