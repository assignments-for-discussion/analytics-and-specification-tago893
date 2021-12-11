
function average(numbers) {
  
  //filtering NaN numbers with isNan function 
 
  const Filternumbers=numbers.filter(function(num){const x =!Number.isNaN(num); return x;});
  
  return Filternumbers.reduce((p, c)=> p + c, 0) / Filternumbers.length;
  
}

module.exports = {average};
