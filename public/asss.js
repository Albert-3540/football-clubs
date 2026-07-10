// Simple arithmetic and output
const num1 = 10;
const num2 = 20;
console.log("Sum =", num1 + num2);

const number = 13;
console.log(number + (number % 2 === 0 ? " is Even" : " is Odd"));

const divisibleNumber = 500;
console.log(divisibleNumber + (divisibleNumber % 3 === 0 ? " is divisible by 3" : " is not divisible by 3"));

const userName = "Albert";
const gender = "male";
console.log(`${userName} is ${gender === "male" ? "a guy" : "not a guy"}`);

function greet(name) {
    console.log("Hello " + name);
}

greet("Albert");

for (let row = 1; row <= 10; row++) {
    console.log(`Row ${row}`);
}

const a = 15;
const b = 40;
const c = 25;
console.log("Largest number is:", Math.max(a, b, c));

function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 === 0 ? "Cannot divide by zero" : num1 / num2;
        default:
            return "Invalid operator";
    }
}

console.log(calculator(10, 5, "+"));

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

const country = "Nigeria";
console.log(country);

const isStudent = true;
console.log(isStudent);

let score = 95;
score += 5;
console.log(score);

console.log(10 + 5);
console.log(20 - 8);
console.log(4 * 6);
console.log(30 / 5);
console.log(10 % 3);

const age = 18;
console.log(age >= 18 ? "Adult" : "Not adult");

const num = 5;
console.log(num > 0 ? "Positive" : "Negative");

const password = "1234";
console.log(password === "1234" ? "Access Granted" : "Access Denied");

const marks = 75;
console.log(marks >= 50 ? "Pass" : "Fail");

const light = "green";
if (light === "green") {
    console.log("Go");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    console.log("Row " + i);
}

function square(num) {
    return num * num;
}

console.log(square(4));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(6, 7));

function sayName(name) {
    console.log(name);
}

sayName("Albert");

const greetArrow = () => {
    console.log("Hello");
};

greetArrow();

const add = (a, b) => a + b;
console.log(add(10, 20));

const cube = num => num ** 3;
console.log(cube(3));

const welcome = name => {
    console.log(`Welcome ${name}`);
};

welcome("Albert");

let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);
console.log(fruits[0]);

let colors = ["Red", "Blue"];
colors.push("Green");
console.log(colors);

let animals = ["Dog", "Cat"];
animals.pop();
console.log(animals);

let nums = [1, 2, 3];
nums.forEach(num => console.log(num));

let person = {
    name: "Albert",
    age: 25
};
console.log(person.name);

let car = {
    brand: "Toyota",
    model: "Camry"
};
console.log(car.brand);

let book = {
    title: "JavaScript",
    pages: 300
};
console.log(book.pages);

let phone = {
    brand: "Samsung",
    price: 200000
};
console.log(phone.price);

let student = {
    name: "John",
    score: 90
};
student.score = 95;
console.log(student);

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

for (let i = 5; i >= 1; i--) {
    console.log("*".repeat(i));
}

for (let i = 1; i <= 5; i++) {
    console.log(i.toString().repeat(i));
}

let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log(factorial);

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

const primeCandidate = 7;
let isPrime = true;
for (let i = 2; i < primeCandidate; i++) {
    if (primeCandidate % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime);

console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));

const text = "JavaScript";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.replace("Java", "JavaScript"));
console.log(text.includes("JavaScript"));

fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.length);
fruits.shift();
console.log(fruits);

let numberArray = [1, 2, 3, 4];
console.log(numberArray.reverse());

let otherNumbers = [10, 5, 30, 15];
otherNumbers.sort((a, b) => a - b);
console.log(otherNumbers);
