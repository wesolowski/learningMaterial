function fire(bool) {
    // var foo; / behind scene
    if(bool) {
        var foo = 'bar';
        console.log(foo); // bar
    } else {
        console.log(foo); // hoisting
    }
}

fire(false);

// function fireLet(bool) {
//     if(bool) {
//         let foo = 'bar';
//         console.log(foo); // bar
//     } else {
//         console.log(foo); // Uncaught ReferenceError: foo is not defined
//     }
// }
//
// fireLet(false);

const names = ['John', 'Sandy'];
names.push('Joe'); // this work

names = ['Frank', 'Susan']; // Uncaught TypeError: Assignment to constant variable.


console.log(names);

