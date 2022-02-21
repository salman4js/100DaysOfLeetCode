const zigzag = (str, numofRows) => {
  if(numofRows === 1){
    return str;
  }

  let x = 0;
  let y = 0;
  let isZigging = true;
  const result = [...new Array(numofRows)].map(_ => []);

  for(let i = 0; i < str.length; i++){
    const char = str[i];
    result[y].push(char);

    if(isZigging){
      if( y === numofRows -1 ){
        isZigging = false;
        x++;
        y--;
      } else {
        y++;
      }
    } else {
      if( y === 0){
        isZigging = true;
        y++;
      } else {
        x++;
        y--;
      }
    }
  }
  return result.reduce((string, row) => string + row.join(''),'');

}

console.log(zigzag("PAYPALISHIRING", 4));
