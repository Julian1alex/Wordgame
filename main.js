$(document).ready(function() {
 
  commonWords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"
  ];

  var bigwords = commonWords.filter(big => big.length > 2);

  // var bigwords = commonWords.filter(function(big){
// return big.length > 2} --- Equavilant to top shorthand return/formula//

  var randomizer = mix => mix[Math.floor(Math.random() * bigwords.length)];

  // Math.floor - Round a number downward to its nearest integer 
// Math.random - Returns a random number between 0 (inclusive), and 1 (exclusive):
  
  var randomword = randomizer(bigwords)

  var split = randomword.split("")

  var under = split.map(l => "_") 
  


  var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 

  var letters = letter.map(function(letter){
  return `
  <button>${letter.toUpperCase()}</button>`
  }) 
  .join(" ")
  
  $('#buttons').html(letters)

  $('#buttons').on("click", "button", function(e){
    e.preventDefault()

    var guess = $(this)
    .html()
    .toLowerCase()
    $(this).attr("disabled", true)

    if (randomword.includes(guess)) {
      under = under.map((u, i) => {
        if (u === "_"){

        if (randomword[i] === (guess)) {
            return randomword[i]
          }else{
            return "_" 
        } 
      } else {
            return u 
      }
    })

      $("#underscore").html(under.join(" "))
    } else {
      console.log("bad guess")
    }


  })

  var turns = 0 
// var maxGuesses = 3; 
// var guess = 0;
// document.getElementById("hangman").innerHTML = maxGuesses
// document.getElementById("game").innerHTML = guess

  document.getElementById("turns").innerHTML = turns

  // document.getElementById("display").innerHTML = randomword 
  // /This Displays the word/
 
  document.getElementById("buttons").innerHTML = letters 
  document.getElementById("underscore").innerHTML = under
// This links JS to HTML through an ID, what's inputted is "randomword"

})