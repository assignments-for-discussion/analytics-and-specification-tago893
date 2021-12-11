
function average(numbers) {
  
  //filtering NaN numbers with isNan function 
  //i will write a gist here the filternumbers variable has numbers which are filtered from NaN values 
  //in the  line 5 we can see that we have used '=>' it is used  to write an anonymous function.
  //the anonymous function (x => !Number.isNaN(x)) in other words it is  function(num){const x =!Number.isNaN(num); return x;} is what i believe is going on here
  const Filternumbers=numbers.filter(x => !Number.isNaN(x));
  
  return Filternumbers.reduce((p, c)=> p + c, 0) / Filternumbers.length;
  
}

module.exports = {average};
