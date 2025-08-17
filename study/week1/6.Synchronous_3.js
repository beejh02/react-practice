// Promise의 3가지 State
// 1. Pending: 대기 상태
// 2. Fulfilled: 이행 상태
// 3. Rejected: 거부 상태


// 1. Promise 객체 생성
const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업을 수행
  setTimeout(() => {
    const success = true; // 작업 성공 여부
    if (success) {
      resolve("작업 성공");
    } else {
      reject("작업 실패");
    }
  }, 1000);
});

myPromise
  .then(message => {
    // 성공적으로 resolve된 경우
    console.log(message); // "작업 성공"
  })
  .catch(error => {
    // reject된 경우
    console.error(error);
  })
  .finally(() => {
    console.log("Promise 작업 종료");
  });


function step1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('첫 번째 작업 완료');
      resolve('첫 번째 결과');
    }, 1000);
  });
}

function step2(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${data}를 받아 두 번째 작업 완료`);
      resolve('두 번째 결과');
    }, 1000);
  });
}

// Promise 체이닝
step1()
  .then(result1 => step2(result1))
  .then(result2 => {
    console.log(`모든 작업 완료: ${result2}`);
  });