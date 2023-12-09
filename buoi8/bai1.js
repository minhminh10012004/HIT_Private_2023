var ten="Đỗ Thị Minh"
alert(ten);

function findMax(num1, num2){
    return Math.max(num1,num2);
}

function maxNumber(a,b,c){
    return findMax(findMax(a,b),findMax(b,c));
}

console.log("Max(1,2,3):" +maxNumber(1,2,3));
console.log("Max(3,4,5):" +maxNumber(3,4,5));
console.log("Max(3,4,8):" +maxNumber(3,4,8));

