const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultContainer = document.getElementById("results-div");

function validator(event) {
  event.preventDefault();

  const str = userInput.value;
  if(str === ''){
    alert("Please provide a phone number");
    return;
  }
  userInput.value = "";

  if ((!(str.length > 9) && !(str.length < 16)) || str.includes("x", 0)) {
    resultValidate(false, str);
    return;
  }

  const validateArr = [
    "x xxx-xxx-xxxx",
    "x (xxx) xxx-xxxx",
    "x(xxx)xxx-xxxx",
    "x xxx xxx xxxx",
    "xxxxxxxxxx",
    "xxx-xxx-xxxx",
    "(xxx)xxx-xxxx",
  ];

  const parseStr = str.replace(/\d/g, "x");
  console.log(parseStr);
  

  if (validateArr.indexOf(parseStr, 0) === -1) {
    resultValidate(false, str);
    return;
  } else if (str.length <= 13) {
    resultValidate(true, str);
    return;
  } else {
    if (str[0] === "1") {
      resultValidate(true, str);
      return;
    } else {
      resultValidate(false, str);
      return;
    }
  }
}

const resultValidate = (check, str) => {
  if (check === false) {
    const resultElement = document.createElement("p");
    resultElement.textContent = `Invalid US number: ${str}`
    resultElement.classList.add('result-element')
    resultContainer.appendChild(resultElement);
  }
  if (check === true) {
    const resultElement = document.createElement("p");
    resultElement.textContent = `Valid US number: ${str}`
    resultElement.classList.add('result-element')
    resultContainer.appendChild(resultElement);
  }
};

function clear(event) {
  event.preventDefault();
  resultContainer.innerHTML = '';
}

checkBtn.addEventListener("click", validator);
clearBtn.addEventListener("click", clear);
