
//var,letを用いた変数宣言
var val1 = 1;
console.log(val1);
val1 = 0;
console.log(val1);
var val1 = 20;
console.log(val1);

let val2 = -1;
console.log(val2);
val2++;
console.log(val2);
val2--;
console.log(val2);
val2 = val2 * 2;
console.log(val2);
val2 = val2**2;
console.log(val2);

//let val2 = 2; letは再宣言不可

val1 = Math.floor(Math.random()*100); //Math.randomはランダムで0〜1を出力
val2 = Math.floor(Math.random()*100);

if(val1 < val2){
    console.log("val2の方が大きい");
    console.log("val1 = %d,val2 = %d",val1,val2);
}else if(val1 == val2){
    console.log("val1,val2は等しい");
    console.log("val1 = %d,val2 = %d",val1,val2);
}else{
    console.log("val1の方が大きい");
    console.log("val1 = %d,val2 = %d",val1,val2);
}

//constを用いた変数宣言
const val3 = "JS";
console.log(val3);

//val3 = "Java"; 上書き不可能
//const val3 = "C"; 再宣言も不可

//constを変更できる例とできない例
//プリミティブ型は上書き不可能
//オブジェクト型は上書き可能

//オブジェクトの例
const obj1 = {
    name: "西田",
    age: 24,
};
obj1.name = "戸崎";
console.log(obj1);

obj1.address = "Tokyo";//代入のように追加できる
console.log(obj1);

//配列の例
const arr1 = ["dog","cat"];
console.log(arr1);

arr1[0] = "bird";
console.log(arr1);

arr1.push("monkey");
console.log(arr1);