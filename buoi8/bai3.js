var ten= "Đỗ Thị Minh"
alert(ten);

function countLastWordCharacter(s){
    const words=s.split(' ');
    const lastWord=words[words.length-1]
    return lastWord.length
}

const s1="Hello World";
console.log("Từ cuối có "+countLastWordCharacter(s1)+" kí tự")
const s2="HTML, CSS, Javascript"
console.log("Từ cuối có "+countLastWordCharacter(s2)+" kí tự")