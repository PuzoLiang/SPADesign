function hello() {
  return new Promise(function(resolve,reject) {
    console.log(`你好啊`);
    resolve(2333);
  });
}

console.log(hello().then(function(data) {
  console.log(`任务完成啦，结果是${data}`);
}));