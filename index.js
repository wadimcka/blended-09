//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const btnEl = document.querySelector("#alertButton");
// const inputEl = document.querySelector("#alertInput");

// btnEl.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   alert(inputEl.value);
// }

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const inputLeftEl = document.getElementById("leftSwapInput");
// const inputRightEl = document.getElementById("rightSwapInput");
// const btnEl = document.getElementById("swapButton");

// function onBtnCklick() {
//   const valueLeftInp = inputLeftEl.value;
//   const valueRightInp = inputRightEl.value;

//   inputLeftEl.value = valueRightInp;
//   inputRightEl.value = valueLeftInp;
// }

// btnEl.addEventListener("click", onBtnCklick);

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const inputEl = document.querySelector('#passwordInput');
// const btnEl = document.querySelector('#passwordButton');

// btnEl.addEventListener('click', onBtnClick);

// function onBtnClick() {
//     if (btnEl.textContent === "Приховати") {
//         inputEl.setAttribute('type', 'password');
//         btnEl.textContent = "Розкрити";
//     } else {
//         inputEl.setAttribute('type', 'text');
//         btnEl.textContent = "Приховати";
//     }
// }

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

// const refs = {
//   decreaseBtn: document.getElementById("decrease"),
//   increaseBtn: document.getElementById("increase"),
//   divBox: document.getElementById("box"),
// };

// const { decreaseBtn, increaseBtn, divBox } = refs;

// function onDecrBtnClick() {
//   const boxSize = parseInt(getComputedStyle(divBox).width);
//   divBox.style.width = `${boxSize - 10}px`;
//   divBox.style.height = `${boxSize - 10}px`;

// }

// function onIncrBtnClick() {
//   const boxSize = parseInt(getComputedStyle(divBox).width);
//   divBox.style.width = `${boxSize + 10}px`;
//   divBox.style.height = `${boxSize + 10}px`;
// }

// decreaseBtn.addEventListener("click", onDecrBtnClick);
// increaseBtn.addEventListener("click", onIncrBtnClick);

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/
// const btnEl = document.querySelector("#double");
// btnEl.addEventListener("click", onBtnClick);
// const liElements = document.querySelectorAll(".listItem");

// function onBtnClick() {
//   liElements.forEach((element) => {
//     element.textContent = BigInt(element.textContent) ** 2n;
//   });
// }
//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

const divOut = document.querySelector(".outerCircle");

//? if was mouseup then delete eventListener mousemove on window
window.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", onMouseMove);
  divOut.style.position = "static";
});

//? when div is clicked
divOut.addEventListener("mousedown", onDivOutClick);
function onDivOutClick() {
  window.addEventListener("mousemove", onMouseMove);
}

//? when the div is clicked and mouse is moving
function onMouseMove(e) {
  const mouseCordsX = e.pageX;
  const mouseCordsY = e.pageY;

  divOut.style.position = "absolute";
  divOut.style.left = mouseCordsX + "px";
  divOut.style.top = mouseCordsY + "px";
}
