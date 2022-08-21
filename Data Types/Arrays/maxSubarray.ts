const arr = [-1, 2, 3, -9];

function getMaxSubSum(array: number[]): number {
    let subArrays : number[][] = [];
    for (let i= 0; i <= array.length; i++){
        console.log(i);
        for (let j = i+1; j <= array.length; j++){
            subArrays.push(array.slice(i, j));
        };
    };
    
    let summedArrays = [];
    subArrays.forEach(function(y) {
        y = y.reduce(function (a, b){
            return a+b
        });
        summedArrays.push([y])
    }
    )
    let summedPositiveArray = [];

    for (let z = 0; z< summedArrays.length; z++){
        if (summedArrays[z] < 0) {
            summedPositiveArray.push([0]);
        } else{
            summedPositiveArray.push(summedArrays[z]);
        };

    };

    return Math.max(...summedPositiveArray)
};

let c = getMaxSubSum(arr);
c;
