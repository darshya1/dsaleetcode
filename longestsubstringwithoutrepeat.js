/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longetsstring = "";

  for (let i = 0; i < s.length; i++) {
    let substring = "";
    for (let j = i; j < s.length; j++) {
      if (substring.includes(s[j])) {
        break;
      } else {
        substring = substring.concat(s[j]);
      }
    }
    if (substring.length > longetsstring.length) {
      longetsstring = substring;
    }
    substring = "";
  }

  return longetsstring.length;
};

var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0,
    max = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, set.size);
  }

  return max;
};

console.log(lengthOfLongestSubstring("bjbjuhvghv"));
