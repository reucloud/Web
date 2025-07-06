//chapter2-10
//&& ||の本当の意味

const num = null;
const fee = num || "金額未設定です";
console.log(fee);//金額未設定です

const num1 = 1000;
const fee1 = num1 || "金額未設定です";
console.log(fee1);//金額未設定です

//||は左側がtrueなら右側は無視される。
//&&は左側がfalseなら右側は無視される。

