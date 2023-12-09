function findUclnAndBcnn(a, b) {
    const ucln = timUCLN(a, b);
    const bcnn = timBCNN(a, b);
    return { "UCLN": ucln, "BCNN": bcnn };
}

function timUCLN(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function timBCNN(a, b) {
    let ucln = timUCLN(a, b);
    let bcnn = (a * b) / ucln;
    return bcnn;
}

console.log(findUclnAndBcnn(10, 20)); 