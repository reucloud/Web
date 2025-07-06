//chapter2-5
//デフォルト値

//アロー関数
const sayHello = (name) => console.log(`こんにちは! ${name}さん!`);
sayHello("yuma");
sayHello();//こんにちは! undefinedさん!となる。

const sayHello2 = (name = "ゲスト") => console.log(`こんにちは! ${name}さん!`);
sayHello();//こんにちは! undefinedさん!
sayHello2();//こんにちは! ゲストさん!

//分割代入
const myprofile ={
    age: 24,
};

const {name} = myprofile;
const {name2 = "ゲスト"} = myprofile;
const message = `こんにちは! ${name}さん!`;
const message2 = `こんにちは! ${name2}さん!`;

console.log(message);//こんにちは! undefinedさん!
console.log(message2);//こんにちは! ゲストさん!
