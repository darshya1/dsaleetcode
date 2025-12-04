/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) return s;
  let array = new Array(numRows).fill("");
  let initialrow = 0;
  let ismovingdown = false;

  for (let letter of s) {
    array[initialrow] += letter;

    if (initialrow === 0 || initialrow === numRows - 1) {
      ismovingdown = !ismovingdown;
    }

    initialrow += ismovingdown ? 1 : -1;
  }

  return array.join("");
};

console.log(convert("abcdefgh", 4));

/*
 * learn to make array with particular size and insert in then somithing
 */
