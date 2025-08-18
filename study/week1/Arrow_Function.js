// 기본 형태
const add = (a, b) => {
    return a + b;
};

// 매개변수가 하나일 때는 괄호 생략 가능
const double = a => {
    return a * 2;
};

// 본문이 한 줄 일 때 중괄호와 return 키워드 생략 가능
const subtract = (a, b) => a - b;

console.log(add(1, 2));
console.log(double(5));
console.log(subtract(10,4));