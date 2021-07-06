// 関数 func を定義
func = async() => {
    await log("a");
    await log("b");
    await log("c");
    await log("d");
    await log("e");
};

// log の処理を記述
log = (alf) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(alf);
            resolve();  // resolveを明示することで次の await 処理を実行できる
        }, 1000);
    });
}

func()