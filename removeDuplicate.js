const remove = (arr) => {
    let index = 0;
    for(let i = 0; i < arr.length; i ++){
        console.log(arr[i]);
        if(arr[i] != arr[i+1]){
            console.log("arr[i]  " + arr[i] + "  arr[i+1]  " + arr[i+1]);
            arr[index] = arr[i];
            index++;
        }
    } return index;
    
}

console.log(remove([1,1,2]))