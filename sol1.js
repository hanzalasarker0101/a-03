//Problem-01: New Price for Eid Sale
function newPrice(currentPrice,discount){

    if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  }

  if (discount < 0 || discount > 100) {
    return "Invalid";
  }
  let pricewithdiscount =currentPrice-currentPrice*discount/100;

   return pricewithdiscount.toFixed(3);
}

console.log(newPrice(2000,20));

//Problem-02: OTP Validation for Zapshift
function validOtp(otp){
   if (typeof otp !== "string"){
    return 'Invalid'
   }

    if (otp.length !== 8){
    return false;
   }
    if (!otp.startsWith("ph-")){
    return false;
   }
   return true;
}

console.log(validOtp("ph-109859"))

//Problem-03: BCS Final Score Calculator
function finalScore(input) {

if (!input || typeof input !== "object" || !("right" in input) || !("wrong" in input) || !("skip" in input)){
 return "Invalid"
}
let total = input.right + input.wrong + input.skip ;
if(total !== 100){
    return  "Invalid"
}
 let score =input.right - input.wrong * 0.5;

   return Math.round(score);

}
console.log(finalScore({"right":60,"wrong":20,"skip":10}));

//Problem-04: Upcoming Gono Vote
function gonoVote(votes) {
   if(!Array.isArray(votes)){
    return "Invalid";
   }
     let haCount = 0;
  let naCount = 0;

  for(let vote of votes){
    if(vote === 'ha'){
        haCount++;
    }
else if(vote === 'na'){
    naCount++;
}
  }

  if(haCount > naCount){
    return true;
  }
  else if(haCount === naCount){
    return 'equal';
  }
  else{
    return false;
  }
  


}

console.log(gonoVote(["ha", "na", "ha"]))

//Problem-05: Text Analyzer for an AI Company
function analyzeText(text) {
    if (typeof text !== 'string'|| text.trim().length === 0) {
        return 'Invalid';
    }

    let words = text.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    let totalLetter = 0;
    for (let char of text) {
        if (char !== ' ') {
            totalLetter++;
        }
    }

    return { longwords: longestWord, token: totalLetter };
}



