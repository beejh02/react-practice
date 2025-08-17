// Async/Await

// async: 함수 앞에 붙이는 키워드로,
// 이 함수가 비동기 함수임을 나타낸다.
// async 함수는 항상 Promise를 반환.
// Promise가 아닌 값을 반환하면,
// 그 값으로 이행(resolve)되는 Promise가 반환

async function fetchData() {
    return "반환된 데이터";
}
fetchData().then(result => console.log(result));

// Promise 체인
// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('에러:', error));

// await 은 async 함수 내에서만 사용 가능하며
// Promise가 이행될 때까지 기다린다.
