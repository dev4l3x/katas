var moveZeros = function (arr) {
  let arrayWithoutZeros = arr.filter((element) => element !== 0);
  var numOfZeros = arr.length - arrayWithoutZeros.length;
  let zeros = Array(numOfZeros).fill(0, 0, numOfZeros);
  return arrayWithoutZeros.concat(zeros);
}
