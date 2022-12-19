function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 ) {return -1};
    let newNum = sq + 1;
    while (Math.sqrt(newNum) % 1) {
        newNum++;
    }
    return newNum
}

console.log(findNextSquare(625))