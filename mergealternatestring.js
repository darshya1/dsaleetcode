/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let word = "";
  let w1length = word1.length;
  let w2length = word2.length;
  let wlength = w1length;

  if (w2length > wlength) {
    wlength = w2length;
  }
  for (let i = 0; i < wlength; i++) {
    if (i < w1length) {
      word += word1.charAt(i);
    }
    if (i < w2length) {
      word += word2.charAt(i);
    }
  }
  return word;
};

console.log(mergeAlternately("abhay", "darshan"));
