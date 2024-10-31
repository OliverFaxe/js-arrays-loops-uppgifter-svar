// //## 1 #################################################################################################################################################
const names = ["Zlatan", "Beckhamn", "Zidane", "Maradona", "Pele", "Ronaldo"];

// console.log(names[3]);

// //## 2 ##

// names.push("Drogba");
// console.log(names);
// // => 7

// //## 3 ##

// names.unshift("Figo");
// console.log(names);
// // => 7

// //## 4 ##

// names.pop();
// console.log(names);
// // => "Ronaldo"

// //## 5 ##
// names.pop();

// names.unshift("Ronaldo");
// console.log(names);
// Ronaldo, Rigo, Zlatan, Beckham, Zidane, Maradona, Pele

//## 6 ##

//## 7 ##
const players = [
  "Zlatan",
  "Beckham",
  "Zidane",
  "Ronaldo",
  "Romario",
  "Maradona",
];

// players.includes("Messi");
// // => False

// //## 8 ##

// if (players.includes("Zlatan")) {
//     console.log("Zlatan är med i listan");
// } else {
//     console.log("Zlatan är inte med i listan");
// }
// // => Zlatan är med i listan

// //## 9 ##

// players.indexOf("Maradona");
// // => 5

// //## 10 ##

// players.indexOf("Messi");
// // => -1
// // Detta visar att Messi finns inte med i Array. -1 = Finns inte.

// //## 11 ##

// players.join(", ");
// => string, string, string, string, string

// //## 12 ##

// players.join("-");
// // => string-string-string-string-string

// //## 13 ##

// players.splice(1, 2);
// // => 2 "Beckham" "Zidane" Visas och betyder hur många och vilka som togs bort.

// //## 14 ##

// players.splice(2, 0, "Ronaldinho");
// // => [] Returerar en tom array eftersom inget blev borttaget.

// //## 15 ##

// const index = players.indexOf("Ronaldo");

// if (index !== -1) {
//     players.splice(index, 1);
//     console.log("Removed Ronaldo");
// } else {
//     console.log("Ronaldo är inte i listan")
// }
// // => Removed Ronaldo

//## 16 ##

// const ThreeFirstPlayers = players.splice(0,3);

// console.log(ThreeFirstPlayers);

// Eftersom vi skapar en ny const där vi använder splice metoden för att få ut de tre första från originella arrayen.
// => Zlatan, Beckham, Zidane

//## 17 ##

// const nyarray = players.splice(2,4);

// console.log(nyarray);

// console.log(players);

// De fyra sista spelarna i förs över till nyarray
// Indexpos. 0 och 1 stannar kvar i players

//## 18 ##

// let newplayers = players.with(1, "Mbappé");

// console.log(newplayers);
//=> Zlatan, Mbappé, Zidane, Ronaldo, Romario, Maradona

//## 19 ##
const numbers = [5, 8, 12, 20, 3];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// // => 5 8 12 20 3

//## 20 ##
// let summa = 0

// for (nummer of numbers) {
//     summa+=nummer
// }

// console.log(summa)
//=> 48

//## 21 ##
// let maxNumber = Math.max(...numbers)

// for (let i = 0; i < numbers.length; i++) {
//     console.log(maxNumber);
// }
// // => 20

//## 22 ##
// let doubledNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     doubledNumbers = numbers[i] * 2
//     console.log(doubledNumbers);
// }

//## 23 ##
// let loops = 0;

// for(number of numbers){
//     loops+=number;
// }

// const average = loops / numbers.length;

// console.log(average);
// => 9.6

//## 24 ##

// let minsta = numbers[0];

// for (const number of numbers) {
//     if (number < minsta) {
//         minsta = number;
//     }
// }
// console.log(minsta);

//## 25 ##

// const mixedNumbers = [3, -5, 12, -1, 8, -6];

// for (let i = 0; i < mixedNumbers.length; i++) {
//     if (mixedNumbers[i] > 0) {
//     console.log(mixedNumbers[i]);
//     }
// }

//## 26 ##

// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// let positiveNumbers = [];

// for (const n of mixedNumbers) {
//     if (n > 0) {
//         positiveNumbers.push(n);
//     }

// }
// console.log(positiveNumbers);
// => 3, 13, 8

//## 27 ##

// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// let index = 0;

// while (index < mixedNumbers.length){
//     if (mixedNumbers[index] > 10) {
//         break;
//     }
//     console.log(mixedNumbers[index]);

//     index++
// }
// console.log("Done")
// => 3, -5 "Done"

//## 28 ##

// const mixedNumbers = [3, -5, 12, -1, 8, -6]; // Här är ursprungliga arrayen vi utgår ifrån
// let i = 0; // = antal gånger loopen ska köras
// let resultat = 0; // räkna ut hur många indexpositioner är mindre än 0

// while (i < mixedNumbers.length) { // conditions säger vi är i ska köras = hur många element/items är i array alltså 6.
//   if (mixedNumbers[i] < 0) { // om någon av dessa indexpostioner inne i arrayen är mindre än 0
//         resultat++; // lägg på en siffra i resultat. och kör om det genom alla element/items en gång.
//   }
//   i++ // därefter lägger vi en 1 för att avsluta loopen.
// }
// console.log(`There are ${resultat} negative numbers in this array`); // resultat har adderat alla element mindre än 0 och loggar ut.

//## 29 ##

const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
// let letters = 0;

// for (let word of words) {
//     letters += word.length;
// }
// console.log(letters);

//## 30 ##

// for (let word of words) {
//     console.log(word[0]);
// }
// // => b, a, k, s, p

//## 31 ##

// let i = 0;
// let budget = 0;

// while (i < words.length && budget <= 25) {
//   console.log(numbers[i]);
//   budget += numbers[i];
//   i++;
// }

//## 32 ##

// let = result = 0;

// for (const number of numbers) {
//     result += number;
// }
// console.log(result);
// // => 48

//## 33 ##

// const temperatures = [15, 22, 19, 30, 28, 18, 25];
// let highest = temperatures[0];

// for (i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] > highest) {
//         highest = temperatures[i];
//     }
// }
// console.log(highest);

//## 34 ##

// let antalord = 0;

// for (word of words) {
//     if (word.length > 5) {
//         antalord++
//     }
// }
// console.log(antalord);

//## 35 ##
/* Skriv en while-loop som räknar upp talen från
numbers-arrayen ovan tills ett udda tal hittas.
Avbryt loopen vid första udda talet och logga resultatet.*/

// let index = 0;

// while (index < numbers.length) {
//   if (numbers[index] % 2 !== 0) {
//     console.log(numbers[index]);
//     break;
//   }
//   index++;
// }

//#########################################################################################################################################################