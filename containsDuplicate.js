const containsDuplicate = (arr) => {
    if([...new Set(arr)].length !== arr.length){
        return true
    } else {
        return false
    }
}
