const btn = document.querySelector('#check-btn');
const word = document.querySelector('#text-input');
const msg = document.querySelector('#result');
const note = document.querySelector('.what-text');
const body = document.querySelector("body");


function check(){
    const words = word.value.toUpperCase();
    const result = words.replace(/[^A-Z\d]/g, '');
    if(result === ""){
        alert("Please input a value");
        return;
    }
    const arr = result.split('')
    const newArr = arr.reverse()
    const newArrYes = newArr.join('');
    if(newArrYes == result){
        msg.innerText = `${word.value} is a palindrome`;
        body.style.backgroundColor = "rgb(45, 124, 45)";
        note.style.display = "none";
        msg.style.display = "inline";
        return true;
    } else {
        msg.innerText = `${word.value} is not a palindrome`;
        body.style.backgroundColor = "rgb(138, 44, 44)";
        note.style.display = "none";
        msg.style.display = "inline";
        return false;
    }
};


btn.addEventListener("click", check);