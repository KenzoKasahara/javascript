// 1.Promiseの使い方
function promiseFunc(pay) {
  // Promise（非同期処理の状態をあわらすオブジェクト） を返す
  return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if ( pay == 100 ) {
                //   成功したとき
                resolve('成功');
            }
            else {
                //   失敗したとき
                reject("失敗");
            }
        }, 1000);
    });
}

promiseFunc(100)
promiseFunc(500)


