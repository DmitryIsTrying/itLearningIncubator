const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
let result = '';

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (inputInt < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (inputInt > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }


  result = '';
  numberInput.value = "";
  goRomanCheck(inputInt);
};

const goRomanCheck = (num) => {

if(num <= 0){
    output.innerText = result;
    return;
}

if( num >= 1000 ) {
    result += 'M';
    goRomanCheck(num - 1000);
    return;
}

if( num >= 900 ) {
    result += 'CM';
    goRomanCheck(num - 900);
    return;
}

if( num >= 500 ) {
    result += 'D';
    goRomanCheck(num - 500);
    return;
}

if( num >= 400 ) {
    result += 'CD';
    goRomanCheck(num - 400);
    return;
}

if( num >= 100 ) {
    result += 'C';
    goRomanCheck(num - 100);
    return;
}

if( num >= 90 ) {
    result += 'XC';
    goRomanCheck(num - 90);
    return;
}

if( num >= 50 ) {
    result += 'L';
    goRomanCheck(num - 50);
    return;
}

if( num >= 40 ) {
    result += 'XL';
    goRomanCheck(num - 40);
    return;
}

if( num >= 10 ) {
    result += 'X';
    goRomanCheck(num - 10);
    return;
}

if( num >= 9 ) {
    result += 'IX';
    goRomanCheck(num - 9);
    return;
}

if( num >= 5 ) {
    result += 'V';
    goRomanCheck(num - 5);
    return;
}

if( num >= 4 ) {
    result += 'IV';
    goRomanCheck(num - 4);
    return;
}

if( num >= 1 ) {
    result += 'I';
    goRomanCheck(num - 1);
    return;
}

}

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
