// 배열 구조분해할당
const colors = ['red', 'green', 'blue'];
const [first, seconde, third] = colors;

console.log(first);
console.log(seconde);
console.log(third);


// 객체 구조분해할당
const person = {
    name: "Hong gil dong",
    age: 22,
    job: "thief"
};
const {name, age} = person;
console.log(name);
console.log(age);
