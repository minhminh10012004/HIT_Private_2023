function kiemTraSoDX(s) {
    var l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
console.log(kiemTraSoDX("121")); 
console.log(kiemTraSoDX("123")); 