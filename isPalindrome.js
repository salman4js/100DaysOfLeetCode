const isPalindrome = (num) => {
    return parseInt((num + "").split("").reverse().join("")) === num ? true : false;
}

console.log(isPalindrome(121));