function increaseNum(num) {
  let number = (num + 1).toString();
  let digits = number.split("");
  for (let i = 0; i < digits.length; i++) {
    digits[i] = parseInt(digits[i]);
  }
  return digits;
}
console.log(increaseNum(9999));
