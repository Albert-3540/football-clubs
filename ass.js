// function addNumbers(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
// }

// // Function call
// addNumbers(10, 5, 15);

// function checkResult(score) {
//     if (score >= 50) {
//         return "Pass";
//     } else {
//         return "Fail";
//     }
// }

// console.log(checkResult(75));
// console.log(checkResult(40));

// function checkAge(age) {
//     if (age >= 18) {
//         return "adult";
//     } else {
//         return "not an adult";
//     }
// }
// let result = checkAge(10)          
// console.log(result)
// console.log(checkAge(15));

let weight = 40; // kg
let height = 1.75; // meters

let bmi = weight / (height * height);
let category;

if (bmi < 18.5) {
    category = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight";
} else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
} else {
    category = "Obese";
}

console.log("BMI =", bmi.toFixed(2));
console.log("Category:", category);