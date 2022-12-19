/* Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout. */

/* function printNumbers(from, to) {
    let currentTime = from;
    let timer = setInterval(() => {
        console.log(currentTime);
        if (currentTime == to){
            clearInterval(timer);
        } 
        currentTime++;
    }, 1000);
}
printNumbers(1, 5);

 */
function printNumbers2(from, to){
    let current = from;

    setTimeout(function go() {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
