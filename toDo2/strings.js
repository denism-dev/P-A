// Remove Blanks
function removeBlanks(str) {
    return str.split(' ').join('');
  }
  
  // Get Digits
  function getDigits(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(Number(str[i]))) {
        result += str[i];
      }
    }
    return Number(result);
  }
  
  // Acronyms
  function acronym(str) {
    const words = str.split(' ');
    let acronym = '';
    for (const word of words) {
      if (word) {
        acronym += word[0].toUpperCase();
      }
    }
    return acronym;
  }
  
  // Count Non-Spaces
  function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        count++;
      }
    }
    return count;
  }
  
  // Remove Shorter Strings
  function removeShorterStrings(arr, minLength) {
    return arr.filter((str) => str.length >= minLength);
  }
  
  // Example usage:
  console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
  console.log(getDigits("abc8c0d1ngd0j0!8"));
  console.log(acronym(" there's no free lunch - gotta pay yer way. "));
  console.log(countNonSpaces("Honey pie, you are driving me crazy"));
  console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
  