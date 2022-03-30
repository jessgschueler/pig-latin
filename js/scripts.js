// Test: "It will add 'w' to the end of words that begin with a vowel."
// Code: pigLatin("a")
// Expected Output: "aw"

function vowelStartWord(word) {
  let first = word.charAt(0);

    if (first === 'a' || first === "e" || first === "i" || first === "o" || first === "u") {
    resultVowel = word.concat("w");
    }
  return resultVowel
}
vowelStartWord("under");
