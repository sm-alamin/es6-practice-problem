// ****************************Practice Problem-4 *********************
// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.

//function declaration
const findMaxNumber = (input1, input2) => {
    const combine = [...input1 , ...input2];
    const findMax = Math.max(...combine);
    return findMax;

}
//calling the function
const numbers1 = [2, 4, 7, 5];
const numbers2 = [1, 3, 16, 13];
const combine = findMaxNumber(numbers1, numbers2);
console.log(combine);