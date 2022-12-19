function arrayDiff(a, b) {
    c = [];
    for (i = 0; i < a.length; i++) {
      !(b.includes(a[i])) ? c.push(a[i]) : "";
    }
    return c;
}

console.log(arrayDiff([1, 2, 3], [2, 3]))