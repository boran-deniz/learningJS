/* Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
 */

function Calculator() {
    this.read = function() {
        this.a = +prompt("Number One Please", );
        this.b = +prompt("Number Two Please", );
    };
    
    this.sum = function() {
        this.c = this.a + this.b;
        alert(this.c);
    };

    this.mul = function() {
        this.c = this.a * this.b;
        alert(this.c);
    };

};

let calculator = new Calculator();
calculator.read();
calculator.mul();