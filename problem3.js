// ****************************Practice Problem-3 *********************
// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

//function declaration
const averageOfSquaredNumbers = () => {
    const numberInput = document.getElementById('third-problem-input').value;
    const numbers = numberInput.split(",");
    let sum = 0;
    let average = 0;
    for (const number of numbers) {
        const squareNumber = Math.pow(number, 2);
        sum += squareNumber;
        average = sum / numbers.length;
    }
    return average;
}

document.getElementById('btn-third-problem').addEventListener('click', function(){
    index += 1;
    const title = document.getElementById('title-third-problem').innerText;
    const averageNumber = averageOfSquaredNumbers();
   
    // function calling
   const result =averageNumber.toFixed(2);
   displayCalculation(title, result);

})
