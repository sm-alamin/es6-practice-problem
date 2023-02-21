// const makeEven = (numbers) => {
//     let evenNumber = [];
//     for(number of numbers){
//         const even = number + 1;
//         evenNumber.push(even);
//     }
//     return evenNumber;
// }
// const numbers = [1,3,5,7,9];
    let index = 0;
    const inputString = document.getElementById('day2-first-problem-input').value;
    const numbers = inputString.split(",");
    const makeEven = numbers.map(num => num + 1);

    document.getElementById('btn-day2-problem-1').addEventListener('click', function(){
        index += 1;
        const title = document.getElementById('day2-title-problem1').innerText;

        // function calling
        const result = makeEven.join(",");
       displayCalculation(title, result);
    
    })

