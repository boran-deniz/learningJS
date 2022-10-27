function arraying(){
    const argumentsfromfunc = Array.from(arguments);
    this.x = argumentsfromfunc.reduce((prev, curr) => prev + curr, 0);
    console.log(this.x);
}

arraying(1, 2, 3)


function driverFunc(){
    const obj = {
        inps: [1, 2, 3, 4]
    }
    arraying.apply(obj, obj.inps);
}

driverFunc()