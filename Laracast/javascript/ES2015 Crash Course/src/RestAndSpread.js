function sumRest(...numbers) {
    // numbers = [1,2,3];
    return numbers.reduce(
        (prev, current) => prev + current
    );
}

console.log(sumRest(1,2,3));


function sumRest2(foo, ...numbers) {
    // numbers = [1,2,3];
    console.log(foo);
    return numbers.reduce(
        (prev, current) => prev + current
    );
}

console.log(sumRest2('Bar',1,2,3));

function sumSpread(x, y) {
    return x + y;
}

let nums = [1,2];
console.log(sumSpread(...nums));