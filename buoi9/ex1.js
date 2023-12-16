function Person(fullName, height, weight, calcBMI){
    this.fullName = fullName;
    this.height = height;
    this.weight = weight;
    this.getCalcBMI= function(){
        return weight/(height * height)
    }
}
// tạo 2 đối tượng
person1 = new Person('Đỗ Thị Minh', 157, 40 );
person2 = new Person('Nguyễn Văn A', 175, 80 );

//So sánh chỉ số BMI 
bmi1 = person1.getCalcBMI();
bmi2 = person2.getCalcBMI();

if(bmi1 > bmi2){
    console.log(`${person1.fullName} có chỉ số BMI cao hơn ${person2.fullName}`)
}else if(bmi1 < bmi2){
    console.log(`${person1.fullName} có chỉ số BMI thấp hơn ${person2.fullName}`)
}else{
    console.log(`${person1.fullName} và ${person2.fullName} có chỉ số BMI giống nhau`)
}
