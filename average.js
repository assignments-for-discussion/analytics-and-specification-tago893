
function average(numbers) {
  
  //filtering NaN numbers 
  filtered_numbers=numbers.filter(x => !Number.isNaN(x))
  
  return filtered_numbers.reduce((p, c)=> p + c, 0) / filtered_numbers.length;
  
}

module.exports = {average};
