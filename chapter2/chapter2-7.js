//脱線
/*const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const number = [1, 2, 3, 4, 5, 6];

rl.question("数字を入力してください：", function(input) {
  const num = Number(input);
  let check = false;

for(var i=0; i<number.length; i++){
    if(number[i] == num){
        check = true;
        break;
    } 
}
if (check){
    console.log(`${num}を検知`);
}else{
    console.log(`${num}を検知できませんでした`);
}
rl.close();
});
*/

//オブジェクトの省略記法
const name = "主田";
const age = 24;

const user = {
    name,
    age,
};
console.log(user);