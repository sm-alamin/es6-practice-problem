//function to make calculation
const multiply = (firstInput,secondInput, thirdInput) => firstInput * secondInput * thirdInput;
//function to make calculation of add
const add = (num1, num2 = 5) => num1 + num2;

// common function to display data
function displayCalculation(title,result) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index}</td>
      <td>${title}</td>
      <td>${result}</td>
      <td>
      </td>
    `;
    container.appendChild(tr);
  }
  function displayOutput(title, firstInput,secondInput,thirdInput) {
    const textContainer = document.getElementById("text-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-full bg-base-100 shadow p-5"onmouseenter="changeColor(this)">
      <h3 class="text-blue-600 font-bold text-3xl">${title}</h3>
      <h3 class="text-2xl text-green-500">${firstInput}</h3>
      <h3 class="text-2xl text-green-500">${secondInput}</h3>
      <h3 class="text-2xl text-green-500">${thirdInput}</h3>
    </div>
        
    `;
    textContainer.appendChild(div);
  }

  //random color generate on each card
function changeColor(card) {
    // Generate random color
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
    // Set background color of clicked card
    card.style.backgroundColor = randomColor;
  }
  