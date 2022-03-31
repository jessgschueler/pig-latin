const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function vowelStartWord(word) {
  console.log(word);
  let resultVowel = [];
    if (vowel.includes(word[0])) {
      return true;
    } else {
      return false;
    }
}

function consStartWord(word) {
  if (!vowel.includes(word[0])) {
    return true
  } else {
    return false
  }
}

function findQu(word) {
  if (word[0] === "q" && word[1] === "u") {
    return true;
  }else {
    return false;
  }
}
 
function pigLatin(text) {
  let pigArray = text.toLowerCase().split(" ");
  let outputArray = [];
  for (i = 0; i < pigArray.length; i++) {
      let pigVowel = vowelStartWord(pigArray[i]);
    if (pigVowel === true) {
      outputArray.push(pigArray + "way");
    }
  }
  // console.log(outputArray);
  return outputArray;
}
