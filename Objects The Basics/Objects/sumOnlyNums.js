let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
function multiplyMenu(a) {
    for (let b in menu) {
        (typeof(menu[b]) == "number") ? (menu[b] *= 2): menu[b] = menu[b]}
};

multiplyMenu(menu)
console.log(menu)