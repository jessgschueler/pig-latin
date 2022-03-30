Describe: pigLatinTranslator();

Test: "It will add 'w' to the end of words that begin with a vowel."
Code: pigLatin("a")
Expected Output: "aw"

Test: "It will move the first series of consonants of a word that begins with a consonant to the end of the word."
Code: pigLatin("space")
Expected Output: "acesp"

Test: "It will move 'qu' to the end of a word that begins with 'qu'."
Code: piglatin("queen")
Expected Outcome: "eenqu"

Test: "It will only move the first consonant to the end of the word if the second and third letters are 'qu'."
Code: pigLatin("squeak")
Expected Outcome: "queaks" 

Test: "It will add 'ay' onto the end of all words."
Code: pigLatin("acesp")
Expected Output: "acespay"