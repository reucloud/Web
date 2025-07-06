//問1
const nums = [1,5,8,10];
const doubled = [0,0,0,0];
console.log(nums);
for(var i=0; i<nums.length; i++){
    doubled[i] = nums[i] * 2;
}
console.log(doubled);

//問2
const words = ["Apple","banana","avocado","cherry","Apricot"];
const words2 = [];
var count = 0;

for(var i=0; i<words.length; i++){
    if(words[i].charAt(0) == "a" || words[i].charAt(0) == "A"){
        words2[count] = words[i];
        count++;
    }
}
console.log(words2);

//問3
const students = [
  { name: "Alice", score: 88 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 95 },
  { name: "Dave", score: 80 }
];
function swap(arr,bef,aft){
    var temp = arr[bef];
    arr[bef] = arr[aft];
    arr[aft] = temp;
}
for(var i=0; i<students.length-1; i++){
    for(var j=0; j<students.length-1; j++){
        if(students[j].score < students[j+1].score){
            swap(students,j,j+1);
        }
    }
}
console.log(students);