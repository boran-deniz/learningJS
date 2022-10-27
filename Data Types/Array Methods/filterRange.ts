/* Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher
or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified) */

let localarr: number[] = [5, 3, 8, 1];
function filterRange(arr: number[], a: number, b: number){
    let newlocalarr: number[] = [];
    arr.forEach(function(d, c, a, b){
        d = 0;
        c = arr[d];
        if (c >= a && c <= b){
            newlocalarr.push(c);
            d++;
        } else{
            d++;
        }
    })
    return newlocalarr;

};

console.log(filterRange(localarr, 1, 4))