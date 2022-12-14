/* Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back. */

function stringSplit(string: string){
    let arr: string[] = string.split("-");
    let newarr: string[] = [];
    arr.forEach(function(a, index){
        index = arr.indexOf(a);
        if (index !== 0){
            newarr.push(a[0].toUpperCase());
            newarr.push(a.slice(1));
        } else{
            newarr.push(a)
        }
    })
    let combinedString: string = newarr.join("");
    return combinedString;
};

console.log(stringSplit("-webkit-transition"));