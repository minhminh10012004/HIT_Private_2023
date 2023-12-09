var ten="Đỗ Thị Minh"
alert(ten)
function checkTriangle(a,b,c){
    
    if(a>0 && b>0 && c>0 && a<b+c && b<a+c && c<a+b){
        return true;
    }else return false
   
}
console.log("Với 3 cạnh là (3,4,5) :"+checkTriangle(3,4,5));
console.log("Với 3 cạnh là (3,4,8) :"+checkTriangle(3,4,8));