function expandedForm(num) {
    numberArr = [];
    numberString
    formattedNumberArr = [];
    counter = 0;

    numberArr.push(num.toString()[counter]);
    counter ++
    for (h = 3 ; h < num.toString().length; h++) {
        numberArr.push("0")
    }
    for (i = 1; i < num.toString().length; i++) {
        for (j = counter; j < num.toString().length; j++) {
        if (numberArr[counter+1] != "+" && numberArr[counter+1] != " ") {numberArr.push("0")}
    };
    if (numberArr[counter+1] != "+" && numberArr[counter+1] !=  " ") {numberArr.push(" + ")}
        if (num.toString()[counter] != 0) {numberArr.push(num.toString()[counter])}
        counter ++
    }
    formattedNumberArr
    numberString = numberArr.join().toString()
    numberString
    return numberString;
}

console.log(expandedForm(723));