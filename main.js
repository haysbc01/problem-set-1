// letterCapitalize

function letterCapitalize(string) {
   var split = string.split(' ');
   for (var i = 0; i < split.length; i++) {
       split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
   }
   return split.join(' ');

}

console.log(letterCapitalize("This is my string that will get Capitalized!"));

// wordCount

function wordCount(singleString) {
  var split = singleString.split(' ');
  return split.length;
}

console.log(wordCount("Never eat shredded wheat."));

// Bonus: primeTime

function primeTime (number) {
  for(var i = 2; i < number; i++) {
    if(number % i === 0){
      return false;
    } else {
      return true;
    }
  }
}

console.log(primeTime(91));
console.log(primeTime(5));
console.log(primeTime(30));
