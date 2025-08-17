// Global Scope
const globalVar = '전역 변수';
function foo() {
    console.log(globalVar); // 전역 변수 (접근 가능)
}
foo();
console.log(globalVar); // 전역 변수 (접근 가능)


// Function Scope
function bar() {
    const functionVar = '함수 변수';
    console.log(functionVar); // 함수 변수 (접근 가능)
}
bar();
// console.log(functionVar); // ReferenceError: functionVar is not defined (접근 불가능)


// Block Scope
if (true) {
    const blockVar = '블록 변수';
    let anotherBlockVar = '또 다른 블록 변수';
    var functionVar = '함수 스코프 변수'; // var는 함수 스코프이므로 접근 가능
}

// console.log(blockVar); // ReferenceError (접근 불가능)
// console.log(anotherBlockVar); // ReferenceError (접근 불가능)
console.log(functionVar); // 함수 스코프 변수 (접근 가능)


// Scope Chain
const global = '전역';

function outer() {
    const outerVar = '외부';

    function inner() {
        const innerVar = '내부';
        console.log(global);
    }
    inner();
}

outer();
