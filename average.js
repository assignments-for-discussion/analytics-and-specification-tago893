
function average(numbers) {
  const noNaNnumber=numbers.filter(x => !Number.isNaN(x))
  return noNaNnumber.reduce((p, c)=> p + c, 0) / noNaNumber.length;
}

module.exports = {average};
