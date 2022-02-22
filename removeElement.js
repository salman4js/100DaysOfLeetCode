const removeElement = (arr, val) => {
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== val){
            arr[index] = arr[i];
            index++;
        }
    }
    return index;
}

console.log(removeElement([1,2,3,4,5,5],5))