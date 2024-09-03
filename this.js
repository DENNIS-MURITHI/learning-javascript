// let random = {
//     name:"learn js",
//     myArr : ["Dennis", "Informacist", "Kenyan"],
//     info(){
//         this.myArr.forEach(function(tag){ console.log(this.name,tag)},this)
//     }
// }

// filtering
// let myArr = [1,2,3,4,5,6];
// let filteredArr = myArr.filter((value)=>value > 3);
// console.log(filteredArr);//[4,5,6]


//mapping, using map method

let originalArr = [2,4,6,8,10];
let mappedArr = originalArr.map(incrementEachValByOne);

function incrementEachValByOne(val){
    return val+=1;
}
console.log(mappedArr);

// reducemethods
let reducedArr = originalArr.reduce(sum)
function sum(acc,val){
    return  acc + val;
}
console.log(reducedArr); total=0

let enterReducedArrToNewArr = []
enterReducedArrToNewArr.push(reducedArr)
console.log(enterReducedArrToNewArr);
