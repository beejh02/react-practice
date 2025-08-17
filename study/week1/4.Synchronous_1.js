console.log("작업 1 시작");
console.log("작업 2 시작");


function doAsyncTask(callback) {
    setTimeout(() => {
    callback();
  }, 0);
}

doAsyncTask(() => {
    console.log("작업 2 시작");
});
console.log("작업 1 시작");