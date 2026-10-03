// MOCK Exam 2 | Ex 1
// robert.jiranek@gmail.com
// 

// console.log("Exam 2 | Ex 1 | start ... ");

function biggestSumOfTwoElements(array) {
    if (array.length === 0) {
        return false;
    }

    if (array.length === 1) {
        return array[0];
    }

    const sortedArray = [...array].sort(function (a, b) {
        return b - a;
    });

    return sortedArray[0] + sortedArray[1];
}

console.log(biggestSumOfTwoElements([1, 2, 3, 4]));     // 7
console.log(biggestSumOfTwoElements([]));               // false
console.log(biggestSumOfTwoElements([76]));             // 76
console.log(biggestSumOfTwoElements([23, 45, 17, 12]));  // 68
console.log(biggestSumOfTwoElements([-5, -2, -10]));     // -7
console.log(biggestSumOfTwoElements([4, 4, 1]));         // 8

// console.log("Exam 2 | Ex 1 | complette ... ");