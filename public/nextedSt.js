// let cars = [
//    'corolla','camry','venza',]; //toyota cars
//    ['lexus is 250']

// let man = {
//     firstName: "Albert",
//     lastName: "Oduma",
//     address: {
//         country: "Nigeria",
//         state: "Cross River",
//         city: "Calabar"
//     }
// };

// console.log(man.address.country); // Nigeria
// console.log(man.address.state);   // Cross River
// console.log(man.address.city);   // City
// console.log(man.firstName)
// console.log(man.lastName)

// let numbers = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(numbers[0][1]); // 2
// console.log(numbers[2][2]); // 9

// let student = {
//     name: "Albert",
//     courses: ["HTML", "CSS", "JavaScript"]
// };

// console.log(student.courses[0]); // HTML
// console.log(student.courses[2]); // JavaScript

// let students = [
//     {
//         name: "Albert",
//         age: 20
//     },
//     {
//         name: "John",
//         age: 22
//     }
// ];

// console.log(students[0].name); // Albert
// console.log(students[1].age);  // 22


let school = {
    name: "ABC School",
    students: [
        {
            name: "Albert",
            subjects: ["Math", "English", "Physics"]
        },
        {
            name: "John",
            subjects: ["Biology", "Chemistry"]
        }
    ]
};

console.log(school.students[0].name);       // Albert
console.log(school.students[0].subjects[2]); // Physics
console.log(school.students[1].subjects[0]); // Biology