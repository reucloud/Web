//chapter2-4
//分割代入 {}[]

//従来の記法
const Myprofile = {
    name: "主田",
    age: 24,
};

const messageb = `私の名前は${Myprofile.name}です。年齢は${Myprofile.age}です。`
console.log(messageb);

//オブジェクトの分割代入
const { name,age } = Myprofile;
const messagea = `私の名前は${name}です。年齢は${age}です。`;
console.log(messagea);
//一部だけ取り出しても、順番が逆でもOK!
//const {name: newname, age: newage} のように変数名を変更もできる。

//配列の分割代入
const myProfile = ["主田", 24];

const [nname, nage] = myProfile;
const amessage = `私の名前は${name}です。年齢は${age}です。`
console.log(amessage);