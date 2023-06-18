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

// const someObj = {a: 1, b: 2, c: 3};
//  function updateObject(obj, key)
//  {
//   const newObj = {...obj};
//   delete newObj[key];
//   // console.log(newObj);
//   return newObj;
//  }
//  console.log(updateObject(someObj, "b"));
//  console.log(someObj);

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function apdateFruits(arr) {
//     const newArr = [];
//     let id = 0;
//     for (const fruit of fruits) {
//         id += 1;
//         const newFruit = {
//             ...fruit,
//             id,
//             price: fruit.price * 0.8,
//         };

//         newArr.push(newFruit);
//         }
//       return newArr;
// };

// console.log(apdateFruits(fruits));;

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ["best", "the", "foo", "is", "js"];

// let newArr = [...arr];
// newArr.indexOf("foo");

// newArr.splice(newArr.indexOf("foo"), 1);
// newArr.reverse();
// const newString = newArr.join(" ");
// console.log(newString);

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// const updateFruits = (arr) =>
//   arr.map((fruit, idx) => ({
//     ...fruit,
//     price: fruit.price * 0.8,
//     id: idx + 1,
//   }));
// console.log(updateFruits(fruits));

/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Умань", "Харків", "Одеса"]
 */
// const concerts = {
//   Київ: new Date("2024-04-01"),
//   Умань: new Date("2023-07-02"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2023-07-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2023-07-10"),
// };

// function sortConcerts(obj) {
//   const array = Object.keys(obj);
//   return array
//     .filter((concert) => obj[concert] > new Date())
//     .sort((a, b) => obj[a] - obj[b]);
// }

// console.log(sortConcerts(concerts));

//TODO:==============================================
/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// function countTwits(array) {
//   return array
//     .flatMap((item) => item.tags)
//     .reduce((acc, item) => {
//       return { ...acc, [item]: acc.hasOwnProperty([item]) ? acc[item] + 1 : 1 };
//     }, {});
// }

// console.log(countTwits(tweets));
//TODO:=============================================

/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const user = new Client("user", "email@email.com");
// console.log(user);
// user.email = "mail@mail.com";
// console.log(user.email);
//TODO:=============================================
/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priority,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */
// static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };
//   }

// class Notes {
//   static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };
//   }
//   #findIdx(text) {
//     return this.items.findIndex((item) => item.text === text);
//   }

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {
//     const idx = this.#findIdx(text);

//     if (idx !== -1) {
//       this.items.splice(idx, 1);
//     }
//   }
//   updatePriority(text, newPriority) {
//     const idx = this.#findIdx(text);
//     if (idx !== -1) {
//       this.items[idx].priority = newPriority;
//     }
//   }
// }

// const newNote = new Notes();

// newNote.addNote({ text: "qwe", priority: Notes.Priority().HIGHT });
// newNote.addNote({ text: "erte", priority: Notes.Priority().HIGHT });
// newNote.addNote({ text: "zfgdf", priority: Notes.Priority().HIGHT });
// newNote.removeNote("ioupou");
// newNote.updatePriority("livsnzdzdfsl", Notes.Priority().LOW);
// console.log(Notes.prototype);
