module.exports = function towelSort (matrix) {
  result=[];
  if (!(arguments.length==0 || typeof(matrix)==undefined))
  {
    for (i=0;i<matrix.length;i++){
      if ( i%2 ==0) for (j=0;j<matrix[i].length;j++) result.push(matrix[i][j]);
      else for (j=(matrix[i].length)-1;j>=0;j--) result.push(matrix[i][j]);
  }
  }
  return result;
}
