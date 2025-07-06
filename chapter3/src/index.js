//3-1
/*console.log("test");

const title1 = document.getElementById("title");
console.log(title1);

const title2 = document.querySelector("#title");
console.log(title2);

//const containers = document.getElementsByClassName("container");
//console.log(containers);

const container = document.querySelector(".container");
console.log(container);

const containers = document.querySelectorAll(".container");
console.log(containers);


//3-2
const divEl = document.createElement("div");
console.log(divEl);

const pEl = document.createElement("p");
console.log(pEl);

const nushidaEl = document.createElement("nushida");
console.log(nushidaEl);

const h2El = document.createElement("h2El");

divEl.appendChild(pEl);
console.log(divEl);

divEl.appendChild(pEl);
divEl.appendChild(h2El);

console.log(divEl);

const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";

const div1El = document.querySelector(".container");
div1El.appendChild(buttonEl);
*/

//3-3
// 追加ボタン押下時に実行する関数
const onClickAdd = () => {
  // テキストボックスのElementを取得
  const textEl = document.getElementById("add-text");

  // テキストボックスの値を取得
  const text = textEl.value;

  // テキストボックスを初期化(空白に)
  textEl.value = "";

  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");

  // pタグ生成(テキストボックスの文字を設定)
  const p = document.createElement("p");
  p.textContent = text;

  // buttonタグ生成(ラベルは[削除])
  const button = document.createElement("button");
  button.textContent = "削除";

  // ボタン押下時に行を削除する処理
  button.addEventListener("click", () => {
    // 削除対象の行(li)を取得
    // closestは親要素に一致する文字列を探すメソッド
    const deleteTarget = button.closest("li");

    // ulタグ配下から上記で特定した行を削除
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  // divタグ配下にpタグとbuttonタグを設定
  div.appendChild(p);
  div.appendChild(button);

  // liタグ配下に上記のdivタグを設定
  li.appendChild(div);

  // メモ一覧のリストに上記のliタグを設定
  document.getElementById("memo-list").appendChild(li);
};

// [追加]ボタン押下時にonClickAdd関数を実行するよう登録
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
