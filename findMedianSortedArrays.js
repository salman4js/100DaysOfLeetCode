const findMedianSortedArrays = (arr1, arr2) => {
    const newArr = arr1.concat(arr2);
    const sortedArr = newArr.sort((a,b) => a -b);
    console.log(sortedArr);
    if(sortedArr.length % 2 === 0){
        const median = sortedArr[sortedArr.length / 2 - 1] + sortedArr[sortedArr.length / 2];
        return median / 2;
    } else {
        const index = Math.floor(sortedArr.length / 2);
        return sortedArr[index];
    }
}
