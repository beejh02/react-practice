console.log("작업 1 시작");

// 2초 후에 실행될 콜백 함수를 setTimeout에 전달
setTimeout(() => {
  console.log("비동기 작업 완료 (2초 뒤)");
}, 2000);

console.log("작업 2 시작");