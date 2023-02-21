// ****************************Practice Problem-1 *********************
// problem-1:
// Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

let index = 0;
document.getElementById('btn-problem1').addEventListener('click', function(){
    index += 1;
    //get the value by id
    const title = document.getElementById('title-problem1').innerText;
    const firstInput = document.getElementById('first-input').value;
    const secondInput = document.getElementById('second-input').value;
    const thirdInput = document.getElementById('third-input').value;

    // function calling
   const result = multiply(firstInput, secondInput, thirdInput)
   displayCalculation(title, result);

})

// problem-2:
// Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.
document.getElementById('btn-problem2').addEventListener('click', function(){
    //get the value by id
    const title = document.getElementById('title-problem2').innerText;
    const firstInput = document.getElementById('first-input-problem-2').value;
    const secondInput = document.getElementById('second-input-problem-2').value;
    const thirdInput = document.getElementById('third-input-problem-2').value;

    // function calling
   displayOutput(title, firstInput,secondInput,thirdInput);

})
// problem-3:
// Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.
document.getElementById('btn-problem3').addEventListener('click', function(){
    index += 1;
    //get the value by id
    const title = document.getElementById('title-problem3').innerText;
    const firstInput = document.getElementById('first-input-problem-3').value;
    const firstInputValue = parseFloat(firstInput);

    // function calling
   const result = add(firstInputValue);
   displayCalculation(title, result);

})

//call the functions to check wether the function is worked or not



