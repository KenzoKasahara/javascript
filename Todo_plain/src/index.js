// import "./src/styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ作成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグを生成
  const buttonComplate = document.createElement("button");
  buttonComplate.innerText = "完了";
  buttonComplate.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)をリストから削除
    deleteFromIncompleteList(buttonComplate.parentNode);

    // 完了リストに追加する要素取得
    const addTarget = buttonComplate.parentNode;

    // Todo内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const buttonBack = document.createElement("button");
    buttonBack.innerText = "戻す";
    buttonBack.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = buttonBack.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = buttonBack.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(buttonBack);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグを生成
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";
  buttonDelete.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)をリストから削除
    deleteFromIncompleteList(buttonDelete.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(buttonComplate);
  div.appendChild(buttonDelete);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
