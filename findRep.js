let s = "she is kiran and kiran is beautiful";
let counter = 0;
let chunk = "";
let k = 0;

reptitionCounter = (sentence, word) => {
  for(let i=0;i<sentence.length;i++){
    chunk = "";
    for(k=i; k<word.length+i;k++){
      chunk = chunk + sentence[k];
      if(chunk === word){
        counter++;
      }
    }
  }
  return counter;
}

let count = reptitionCounter(s, "kiran");
console.log(`the number of repitition is ${count}`);