function lengthValidator(number){
  if(number.length === 16 || number.length === 15){
    return true
  }else{
    return "Enter a valid number of digits"
  }
};


function doublingNumber(number){
  let newCredit;
  let split = number.split("");
  let reverse = split.reverse();
  newCredit = reverse.map(function(num, index){
      if(index % 2 === 0){
        return num *2
      }else{
        return num
      }
  })
  return newCredit
}

console.log(doublingNumber("4102080860435620"))

