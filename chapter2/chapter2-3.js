//chapter2-3
//アロー関数 () => {}

//従来の関数1
function HelloWorld(){
    console.log("HelloWorld");
}
HelloWorld();

const func1 = () => {
    console.log("HelloWorld");
}
func1();

//引数が1つだと括弧を省略できる
const func2 = value => {
    return value;
}
console.log(func2("3"));

const sum = (num1,num2) => {
    return num1 + num2;
}
console.log(sum(1,2));

//処理が1行の時はreturnを省略できる。
const seki = (num1,num2) => num1 * num2;
console.log(seki(2,2));
