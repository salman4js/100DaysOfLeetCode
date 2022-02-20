const remove = (arr) => {
    let index = 0;
    for(let i = 0; i < arr.length; i ++){
       
        if(arr[i] != arr[i+1]){
            
            arr[index] = arr[i];
            index++;
        }
    } return index;
    
}

