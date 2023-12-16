function generate(numRows) {
  let rows = [[1]];
  for (let i = 1; i < numRows; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row.push(rows[i - 1][j - 1] + rows[i - 1][j]);
    }
    row.push(1);
    rows.push(row);
  }
  return rows;
}
console.log(generate(5));
