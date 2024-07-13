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

// Написал пару функций. Изучил тернарный оператор, логическое !==, !=

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
return hasPassingGrade(studentScore) ? 
'Class average: '+getAverage(totalScores)+'. Your grade: '+getGrade(studentScore)+'. You passed the course.' : 
'Class average: '+getAverage(totalScores)+'. Your grade: '+getGrade(studentScore)+'. You failed the course.';
}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));