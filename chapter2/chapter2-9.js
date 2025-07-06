//chapter2-9
//三項演算子
const val1 = 0;
const val2 = 1;

val1 > val2 ? console.log(`val1の方が大きいです`) : console.log(`val2の方が大きいか一緒です`);
 
const printFormattedNum = (num) => {
    const numcheck = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
    console.log(numcheck);
}
printFormattedNum(1500000);
printFormattedNum("1500000");

//演習問題
const num = 7;
const result = num % 2 == 0 ? "偶数です" : "奇数です";// 三項演算子を使って代入
console.log(result);

const isLoggedIn = true;
const status = isLoggedIn ? "ログイン中です" : "ログアウト中です";// 三項演算子を使って
console.log(status);

const num1 = -10;

const result1 = num1 > 0 ? "正の数です"
              : num1 < 0 ? "負の数です"
              : "ゼロです";

console.log(result1);

const score = 15;

const result2 = score < 0 || score > 100 ? "不正な値です" :
                             score >= 80 ? "優秀です" :
                             score >= 60 ? "合格です" :
                             score >= 40 ? "追試対象です" : "不合格です"
console.log(result2);
console.log(result2);