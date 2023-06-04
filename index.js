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
// const namber = prompt("введіть число");
// const hours = String(Math.floor(namber/60)).padStart(2, "0");
// const minutes = String (namber%60).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

/**
//  *? При завантаженні сторінки користувачеві пропонується
//  *? в prompt ввести число. Введення додається до значення
//  *? змінної total.
//  *? Операція введення числа триває до того часу,
//  *? поки користувач не натисне кнопку Cancel у prompt.
//  *? Після того як користувач припинив введення, натиснувши на
//  *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
//  *! Робити перевірку, що користувач ввів саме число,
//  *! а не довільний набір символів не потрібно.
//  */
// let total = 0;
// let namber = prompt("Введіть число");
// while (null !== namber) {
//   total += Number(namber);
//   namber = prompt("Введіть число");
// }
// alert(`Загальна сума введених чисел дорівнює ${total}.`);

/*
 Напишіть через свіч пошук автора мови програмування.
 Пишемо назву мови у шаблонному рядку отримує відповідь
 мова та автор

 
 PHP Расмус Лердорф
 C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
 Swift Кріс Латтнер
 JS Брендан Ейх
 Java Джеймс Гослінг
 Python Гвідо ван Россум
*/

// function faind(string, a) {
//   console.log(string, a);
//   switch (string) {
//     case "java":
//       console.log("Java Джеймс Гослінг");
//       break;

//     case "PHP":
//       console.log("Расмус Лердор");
//       break;

//     case "C#":
//       console.log(
//         "група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота"
//       );
//       break;

//     case "Swift":
//       console.log("Кріс Латтнер");
//       break;

//     case "JS":
//       console.log("Брендан Ейх");
//       break;

//     case "Java":
//       console.log("Джеймс Гослінг");
//       break;

//     default:
//       console.log("Нічого не знайшов");
//   }
// }

// faind("C#", "abcsad");
// faind("Java", "dsadas");

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key} : ${user[key]}`);
// }

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function callSevery(date) {
//   let total = 0;
//   let works = Object.values(date);
//   for (const work of works) {
//     total += work;
//   }
//   return total;
// }
// console.log(callSevery(someObj));


/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція шукає та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stonesName) {
  
//   for (const stone of someStones) {
//     const { name, price, quantity } = stone;
    
//     if (name === stonesName) {
//       return price * quantity;
//     }
//   }
// }

// const result = calcTotalPrice(stones, 'Изумруд');
// console.log(result);


/**
 *? Напишіть функцію updateObject, яка приймає об'єкт та ім'я ключа,
 *? який треба видалити.
 *? повертає новий об'єкт без вказаного параметра
 *? Очікуваний результат updateObject({a: 1, b: 2, c: 3}, 'b') => {a: 1, c: 3}
 *? https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript
 */

const someObj = {a: 1, b: 2, c: 3};
 function updateObject(obj, key)
 {
  const newObj = {...obj};
  delete newObj[key];
  // console.log(newObj);
  return newObj;
 }
 console.log(updateObject(someObj, "b"));
 console.log(someObj);