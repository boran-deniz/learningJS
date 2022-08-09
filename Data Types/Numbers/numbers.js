/* Sum numbers from the visitor

Create a script that prompts the visitor to enter two numbers and then shows their sum.

 */

let Calculation = {
    a: 0,
    b: 0,

    sum : function(){
        this.a = +prompt("Your first number please", );
        this.b = +prompt("Your second number please", );
        alert(this.a + this.b);
    },
};

Calculation.sum();