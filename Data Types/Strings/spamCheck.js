function checkSpam(str) {
    let target1 = "viagra";
    let target2 = "xxx";
    let pos = 0;

    while (pos >= 0) {
        let found = 0
        if (found >0) {
            return "Found";
        };
        found = str.indexOf(target1 , pos);
        pos += 1;
    };
};

console.log(checkSpam("free viagra"));