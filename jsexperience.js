//Изучил методы .pop .push. Узнал, что в случае вызова .push без аргумента - вернётся кол-во элементов в массиве.
let news = ["Naomi", "Quincy", "CamperChan"];
let popped = news.push();
let popped2 = news.length - 1;
news[popped2] = popped;
console.log(popped);
console.log(popped2);
console.log(news);