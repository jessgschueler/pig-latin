// Test: "It will move the first series of consonants of a word that begins with a consonant to the end of the word."
// Code: pigLatin("space")
// Expected Output: "acesp"


function vowelStartWord(word) {
  let first = word.charAt(0);

    if (first === 'a' || first === "e" || first === "i" || first === "o" || first === "u") {
    resultVowel = word.concat("w");
    }
  return resultVowel
}
vowelStartWord("under");


  /*  1. take word, turn str to arr, .split(""), divide by char;
  2. store const conStartWord, in loop: find index of first vowel, .slice(index, removeLtR);
  3. word.concat(conStartWord + "ay");
  4. return output outside of local scope. */

//step 1
// function wordSplit(word) {
//    return word.split("");
// }
// wordSplit("cupcakes");
// console.log(wordSplit("cupcakes"));


//step 2
// function findFirstVowel(wordArray) {

//   for (let i = 0; i < wordArray.length; i++){
//     if (wordArray[i] === 'a' || wordArray[i] === "e" || wordArray[i] === "i" || wordArray[i] === "o" || wordArray[i] === "u") {
//       wordArray.slice(wordArray[i]);
//     }
//   }
// }