// ****************************Practice Problem-3 *********************
// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

//function declaration
const averageOfSquaredNumbers = (numbers) => {
    let sum = 0;
    let average = 0;
    for (const number of numbers) {
        const squareNumber = Math.pow(number, 2);
        sum += squareNumber;
        average = sum / numbers.length;
    }
    return average;
}
//calling the function
const numbers = [2, 4, 5];
const averageNumbers = averageOfSquaredNumbers(numbers);
console.log(averageNumbers);