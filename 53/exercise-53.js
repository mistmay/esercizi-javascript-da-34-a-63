function sum(...num) {
    return num.reduce((sumNum, current) => sumNum + current, 0);
}

console.log(sum(1, 2, 3, 4, 5));