// /**
//  *? Используя функцию if...else,
//  *? напишите код, который будет спрашивать:
//  *? "Какое официальное название JavaScript?"
//  *? Если пользователь вводит "ECMAScript",
//  *? то показать через alert: "Верно!"
//  *? в противном случае отразит:"Не знаете? ECMAScript!"
//  */
// let message = prompt("Какое официальное название JavaScript?");
// if (message !== null) {
//   message = message.trim();
// }
// if (message === "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

/**
 *? Напишіть цикл, який виводить у консоль
 *? числа  від max до min  за спаданням
 *? Виведіть у консоль усі парних чисел від min до max
 */

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }
// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// Напишіть програму, яка отримає від користувача
//  число (кількість хвилин) та виведе в консоль
//  рядок у форматі годин та хвилин
//  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  70 === 01:10
const namber = prompt("введіть число");
const hours = String(Math.floor(namber/60)).padStart(2, "0");
const minutes = String (namber%60).padStart(2, "0");
console.log(`${hours}:${minutes}`);

