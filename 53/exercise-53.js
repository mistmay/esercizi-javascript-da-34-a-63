function sum(...num) {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result += num[i];
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));