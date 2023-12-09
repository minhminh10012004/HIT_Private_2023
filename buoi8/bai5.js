var ten="Đỗ Thị Minh"
alert(ten)
function insertString(str, insertStr, pos) {
    return str.substring(0, pos) + insertStr + str.substring(pos);
}

const s1 = "000";
const s2 = "abc";
const p = 2;

console.log(insertString(s2,s1,p)); 

const s3 = "000";
const s4 = "abc";
const q = -100;
console.log(insertString(s4,s3,q)); 

const s5 = "000";
const s6 = "abc";
const l = 100;
console.log(insertString(s6,s5,l)); 

	