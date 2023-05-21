/**
 *? Используя функцию if...else,
 *? напишите код, который будет спрашивать:
 *? "Какое официальное название JavaScript?"
 *? Если пользователь вводит "ECMAScript",
 *? то показать через alert: "Верно!"
 *? в противном случае отразит:"Не знаете? ECMAScript!"
 */
let message = prompt("Какое официальное название JavaScript?");
if (message !== null) {
  message = message.trim();
}
if (message === "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}
