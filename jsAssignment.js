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
input any digit and minus 7. if it is less than 7 then return the result, other wise return double of input number.
*/
function isLGSeven(userNUmber) {
    const afterMinus = userNUmber - 7;
    if (afterMinus >= 7) {
        return userNUmber * 2;
    }
    else {
        return afterMinus;
    }
}
const userInput = isLGSeven(15);
console.log(userInput);

/* 
Problem no: 04
input an array and find out if there is any badData and finally return the total count of badData. 
*/
function findingBadData(userArray) {
    const badData = [];
    for (let i = 0; i < userArray.length; i++) {
        const element = userArray[i];
        if (element < 0) {
            badData.push(element);
        }
    }
    return badData.length;
}
const age = [12, -43, 22, -92, -22, -60, -40, 54, 33];
const fullArray = findingBadData(age);
console.log(fullArray);

/* 
Problem no: 05
take three parameters and multiply by 21, 32 and 43 successively, then add three result. if the result is more than 2000, then minus 2000 from result and return it, otherwise just return the result.
*/
function gemsToDiamond(first, second, third) {
    const firstMulti = first * 21;
    const secondMulti = second * 32;
    const thirdMulti = third * 43;
    const total = firstMulti + secondMulti + thirdMulti;
    if (total > 2000) {
        const afterMinus = total - 2000;
        return afterMinus;
    }
    else {
        return total;
    }
}
const firstGems = 1;
const secondGems = 1;
const thirdGems = 1;
const allGems = gemsToDiamond(firstGems, secondGems, thirdGems);
console.log(allGems);
