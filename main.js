//1 lecture
//1st task
console.log('Kucher');

//2nd task
const x = 3;
const y = 15;
console.log(x);
console.log(y);

//3rd task
const a = x;
console.log(a);

//4th task
const string = "Hello";
console.log(string);
const num = 10;
console.log(num);
const is_true = true;
console.log(is_true);
var b;
console.log(b);
var c = null;
console.log(c);

//5th task
var adult = confirm("Ви досягли повнолітнього віку?");
console.log(adult);

//6 task
const firstName = "Vika";
const lastName = "Kucher";
const year = 2005;
const married = false;

console.log(year, typeof year);
console.log(married, typeof married);
console.log(firstName + " " + lastName + ". ", typeof (firstName + " " + lastName + ". "));

const variable = null;
let d;
console.log(variable, typeof variable);
console.log(d, typeof d);

//7 task
let login = prompt('Введіть ваш login', '');

let email = prompt('Введіть ваш email', '');

let password = prompt('Введіть ваш password', '');

console.log('Dear User, your login',login, ',email is',email, ', your password is',password);

//2 lecture
//1task
if (a < b && b < c) {
    console.log("True");
  } else {
    console.log("False");
  }

let x = 1;
let y = 2;

let res1 = "" + x + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + "" + y;  // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//3task
let name = prompt('Введіть ваш вік', 'age');
if (age > 18 && age == 18) {
  console.log('Ви досягли повнолітнього віку');
} else {
    console.log('Ви ще надто молоді')
}

//5task
let a = parseFloat(prompt("Введіть довжину сторони a:"));
let b = parseFloat(prompt("Введіть довжину сторони b:"));
let c = parseFloat(prompt("Введіть довжину сторони c:"));

  if (a + b > c && a + c > b && b + c > a) {
    let p = (a + b + c) / 2; // 
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c)); 
    console.log(`S трикутника: ${s.toFixed(3)}`); 
    if (a ** 2 + b ** 2 === c ** 2 || a ** 2 + c ** 2 === b ** 2 || b ** 2 + c ** 2 === a ** 2) {
      console.log("Це прямокутний трикутник");
    } else {
      console.log("Трикутник не є прямокутним");
    }
  }

//6task
if (time >= 23 || time <= 5) {
  console.log("Доброї ночі");
} else if (time > 5 && time <= 11) {
  console.log("Доброго ранку");
} else if (time > 11 && time <= 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}