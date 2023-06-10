
// Instructions:
// Breakdown of the processing: we compare the characters located at the ends of the word:
// if equality we test the rest of the word
// if difference we stop
// Stop condition: an empty word or a word containing a single character is a palindrome.



function isPalindrome(word) {
  // Stop condition: an empty word or a word containing a single character is a palindrome
  if (word.length === 0 || word.length === 1) {
    return true;
  }
  
  // Breakdown of the processing: compare the characters located at the ends of the word
  if (word[0] === word[word.length - 1]) {
    // If the characters at the ends are equal, recursively check the rest of the word
    return isPalindrome(word.slice(1, word.length - 1));
  } else {
    // If the characters at the ends are different, it is not a palindrome
    return false;
  }
}

// Test the function
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("level"));   // true




