//chapter2-6
//スプレッド構文

const arr1 = [1,2];
console.log(arr1);
console.log(...arr1);

const summaryfunc = (num1,num2) => console.log(num1+num2);
summaryfunc(arr1[0],arr1[1]);
summaryfunc(...arr1);

const arr2 = [1,2,3,4,5];
const[num1,num2,...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//予期しないコピー
var arr4 = [10,20];
var arr8 = arr4;//アドレスもコピー
arr8[0] = 100;
//arr8[1] = 100;

console.log(arr4);
console.log(arr8);

//スプレッド構文を使ったコピー
var arr4 = [10,20];
var arr8 = [...arr4];

arr8[0] = 100;
console.log(arr4);
console.log(arr8);
