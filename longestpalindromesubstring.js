/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let palindrome = "";

  for (let i = 0; i < s.length; i++) {
    let plstring = "";
    for (let j = i; j < s.length; j++) {
      plstring = plstring.concat(s[j]);
      if (plstring === plstring.split("").reverse().join("")) {
        if (plstring.length > palindrome.length) {
          palindrome = plstring;
        }
      }
    }
    plstring = "";
  }
  return palindrome;
};

var longestPalindrome = function (s) {
  if (!s || s.length < 1) return "";

  let start = 0,
    end = 0;

  // Expand around given center (left, right) and return length of palindrome
  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // after loop, left and right are one step beyond the palindrome
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    // odd-length palindrome (center at i)
    const len1 = expand(i, i);
    // even-length palindrome (center between i and i+1)
    const len2 = expand(i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start + 1) {
      // compute new start and end from center i and length len
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};

console.log(Math.floor(1 / 2));
