// https://habr.com/ru/articles/762618/

// {acc:1}
// let acc = 1;
// console.log(acc); // 1
//
// acc++;
// console.log(acc); // 2
//
// let anotherAcc = acc;
// console.log(anotherAcc, acc); //

// =========================

// let acc = 1;
// console.log("Call 1:", acc);
//
// acc++;
// console.log("Call 2:", acc);
//
// setTimeout(() => {
//     acc++;
//     console.log("Call 3:", acc);
// }, 0);
//
// let anotherAcc = acc;
// console.log("Call 4:", anotherAcc, acc);

// ===============================

// Порядок выполнения задач:
//     Выполняются синхронные задачи (в Call Stack).
//     Выполняются все задачи из очереди микрозадач.
//     Выполняется первая макрозадача из очереди.
//     Рендеринг, если требуется.
//     Event Loop переходит к следующему циклу и повторяет процесс.

// 1) Если микрозадача запущена в текущем цикле,
// рендеринг не начнётся, пока она не будет выполнена.
// 2) Рендеринг произойдёт только после завершения всех задач
// в очереди микрозадач текущего цикла.

// Изменение цвета по нажатию кнопки
// const colorBox = document.getElementById('colorBox');
// const button = document.getElementById('changeColorButton');
//
// button.addEventListener('click', () => {
//     console.log('8. Macro-task: Button click event');
//
//     // Добавляем микрозадачу
//     queueMicrotask(() => {
//         console.log('10. Micro-task after color change');
//     });
//
//     // Изменяем цвет и запускаем микрозадачи
//     colorBox.style.backgroundColor = 'lightcoral';
//
//     // Макрозадача для проверки через setTimeout
//     setTimeout(() => {
//         console.log('11. Macro-task: setTimeout after click');
//         colorBox.style.backgroundColor = 'lightgreen';
//     }, 1000);
//
//     console.log('Hello world!!! ')
// });

// ===============================

// console.log('Start');
//
// setTimeout(() => {
//     console.log('Timeout 1');
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log('Promise 1');
// });
//
// console.log('End');

// =======================

// console.log('Task 1');
//
// setTimeout(() => {
//     console.log('Task 2 (setTimeout)');
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log('Task 3 (Promise.then)');
// });
//
// queueMicrotask(() => {
//     console.log('Task 4 (queueMicrotask)');
// });
//
// console.log('Task 5');

// ===========================
//
// console.log('A');
//
// setTimeout(() => {
//     console.log('B');
// }, 0);
//
// setTimeout(() => {
//     console.log('C');
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log('D');
// }).then(() => {
//     console.log('E');
// });
// console.log('F');

//==============================
// setTimeout(function timeout() {
//     console.log('A');
// }, 0);
//
// let p = new Promise(function(resolve, reject) {
//     console.log('B');
//     resolve('C');
//
// });
//
// p.then(function(data){
//     console.log( data);
// })
//
// p.then((res)=>{
//     console.log(res, 'New Data')
// })
//
// console.log('D');

// =====================================

// console.log('Start');
//
// setTimeout(() => {
//     console.log(1);
//
//     Promise.resolve().then(() => {
//         console.log(2);
//     });
//
//
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log(4);
//
//     setTimeout(() => {
//         console.log(3);
//     }, 1000);
//
// });
//
// queueMicrotask(() => {
//     console.log(5);
// });
//
// console.log('End');

//==============================================
//
// console.log('Start');
//
// async function asyncTask1() {
//     console.log('Task 1');
//     await Promise.resolve();
//     console.log('Task 2');
// }
//
// async function asyncTask2() {
//     console.log('Task 3');
//     await Promise.resolve();
//     console.log('Task 4');
// }
//
// asyncTask1();
// asyncTask2();
//
// console.log('End');
//=============================================
//
// console.log('Start');
//
// async function asyncTask() {
//     console.log('Task 1');
//     await Promise.resolve().then(()=>{
//         console.log('Promise')
//     })
//     console.log('Task 2');
// }
//
// setTimeout(() => {
//     console.log('Task 3 (setTimeout)');
// }, 0);
//
// asyncTask();
//
// console.log('End');
//============================================

// console.log('Start');
//
// async function task1() {
//     console.log('Task 1');
//     await task2();
//     console.log('Task 3');
// }
//
// async function task2() {
//     console.log('Task 2');
//     await Promise.resolve();
//     console.log('Task 4');
// }
//
// task1();
//
// console.log('End');
//========================================

// console.log('Start');
//
// setTimeout(() => {
//     console.log('Task 1 (setTimeout)');
// }, 1000);
//
// async function asyncTask() {
//     console.log('Task 2');
//     await Promise.resolve();
//     console.log('Task 3');
//     setTimeout(() => {
//         console.log('Task 4 (setTimeout inside async)');
//     }, 0);
// }
//
// asyncTask();
//
// console.log('End');
// =======================================

// async function f() {
//   let p = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log('SetTime')
//       res('B')
//     }, 0)
//   })

//   setTimeout(() => console.log('C'), 0)

//   console.log(await p, 'тут ')

//   console.log('D')
// }

// f(setTimeout(() => console.log('A'), 0))

// // A SetTime B 'tyt' D C

// // MA:  C

// // MI:

//===========================================

// console.log('Start')

// async function task1() {
//   console.log('Task 1')
//   await task2()
//   console.log('Task 4')
// }

// async function task2() {
//   console.log('Task 2')
//   await new Promise((resolve) => {
//     console.log('Task 3')
//     setTimeout(() => {
//       console.log('Task 5 (setTimeout inside Promise)')
//       resolve(20)
//     }, 0)
//   }).then(console.log)
//   console.log('Task 6')
// }

// task1()

// console.log('End')

// MA:
// MI:
// start 1 2 3 End 5 20 6 4
//==================
// async function first() {
//     console.log(9)
//     await Promise.resolve(2).then(r => console.log(r))
//     console.log(0)
//     await Promise.resolve(3).then(r => console.log(r))
// }
//
// async function second() {
//     console.log(10)
//     await Promise.resolve(4).then(r => console.log(r))
//     console.log(11)
//     await Promise.resolve(5).then(r => console.log(r))
// }
//
// first()
// second()
//
// const promises = Promise.resolve('new Promise')
// promises.then(str => console.log(str))

const obj = {
  name: 'Alice',
  age: undefined,
  toJSON() {
    return { name: 'Bob' }
  },
}

console.log(JSON.stringify(obj))
// {name: 'Alice', toJson: '[Function: Anonymys]'}
