//Chapter2-8
//map関数

const nameArr = ["主田","先岡","後藤"];
const nameArr2 = nameArr.map((name) => {
    return name;
});
console.log(nameArr2);

//filter関数
const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num) => {
    return num % 2 === 1;
});
console.log(newNumArr);

for(let index = 0; index < nameArr.length; index++){
    console.log(`${index+1}番目は${nameArr[index]}です`);
}

//上のfor文をmap関数を用いて書くと
nameArr.map((name,index) => {
    console.log(`${index+1}番目は${name}です`)
});

//演習問題
//map
const prnameArr = ["主田","先岡","後藤"];
let newnamwArr = [...prnameArr];

const pr = prnameArr.map((name) => {
    if (name === "主田"){
        return name;
    }else{
        //return name + `さん`;
        return `${name} さん`;
    }
});
console.log(pr);

//filter
const prnum = [1,2,3,4,5,6];
const evenArr = prnum.filter((num) => {
    if (num % 2 == 0){
        return num;
    }
});
console.log(evenArr);

const scores = [3,6,4,8,2,7];
const passedScores = scores.filter((num) => {
    if (num >= 5){
        return num;
    }
});
console.log(passedScores);

const nameList = ["山田","中","佐藤","伊","高橋"];
const longNames = nameList.filter((name) => {
    if (name.length >= 3){
        return name;
    }
});
console.log(longNames);