//Изучил методы .pop .push. Узнал, что в случае вызова .push без аргумента - вернётся кол-во элементов в массиве.
let news = ["Naomi", "Quincy", "CamperChan"];
let popped = news.push();
let popped2 = news.length - 1;
news[popped2] = popped;
console.log(popped);
console.log(popped2);
console.log(news);

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

//Изучил методы .shift .unshift; Цикл while, do while, for, for of.
let inverted = true;
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}