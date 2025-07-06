//chapter2-2
//テンプレート文字列の説明

const name = "主田";
const age = 24;

//従来の記法
const messageb = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(messageb);

//テンプレート文字列の記法
const messagea = `私の名前は${name}です。年齢は${age}歳です。`;//プラスを書かなく、バッククウォートも1つで良い
console.log(messagea);

