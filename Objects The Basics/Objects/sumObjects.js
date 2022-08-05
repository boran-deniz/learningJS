let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
function sum(a) {
    let summedsalary = 0
    for (let salary in salaries) {
        summedsalary += salaries[salary]
    };
    return summedsalary;
}
console.log(sum(salaries))
