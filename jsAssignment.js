/* 
problem no: 01
a function that takes a positive number then multiply by 3, then the result add by 10, then the result divided by 2, then the result minus by 5 and then return the final result as output.
*/
function mindGame(positiveNumber) {
    const total = ((((positiveNumber * 3) + 10) / 2) - 5);
    return total;
}

const anyNumber = mindGame(50);
console.log(anyNumber);

/* 
problem no: 02
input a string, return that string Length is 'odd' or 'even'.
*/
function evenOdd(userStr) {
    if (userStr.length % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
const stingName = evenOdd('john weak');
console.log(stingName);

/* 
Problem no:03

*/