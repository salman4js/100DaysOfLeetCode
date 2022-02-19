const reverse = (num) => {
    const limit = 2 ** 31;
    if(num < 0){
        num = num + "";
        const solution = - + parseInt(num.split("").reverse().slice(0,-1).join(""))
        return solution < -limit ? 0 : solution;
    } else {
        const solution = (num + "").split("").reverse().join("")
        return (solution > limit -1) ? 0 : parseInt(solution);
    }
}

console.log(reverse(2147483648));