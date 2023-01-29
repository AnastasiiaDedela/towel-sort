
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if(matrix === undefined || matrix.length === 0) {
    return arr
  }
  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 != 0){
      let arrReversed = matrix[i].reverse()
      for(let j = 0; j < arrReversed.length; j++) {
        arr.push(arrReversed[j])
      }
    }else {
      for(let j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j])
      }
    }
    
  }
  return arr
}
