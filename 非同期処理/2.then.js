// 1.Promiseの使い方
function promiseFunc(pay) {
  // Promise（非同期処理の状態をあわらすオブジェクト） を返す
  return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if ( pay == 100 ) {
                //   成功したとき
                resolve('pay='+ pay + '：成功');
            }
            else {
                //   失敗したとき
                reject("失敗");
            }
        }, 1000);
    });
}

/**
 * 2.then の使い方
 * 
 * 【補足】
 * then は resolve の時に結果を返す
 */
promiseFunc(100).then(function(pay) {
    console.log("payは" + pay + "です")
});