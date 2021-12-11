
function average(numbers) {
  
  //filtering NaN numbers 
  const Filternumbers=numbers.filter(x => !Number.isNaN(x))
  
  return Filternumbers.reduce((p, c)=> p + c, 0) / Filternumbers.length;
  
}

module.exports = {average};
