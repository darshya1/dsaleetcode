/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  if (/[a-zA-Z]/.test(s[0])) return 0;
  let numstring = "";
  s = s.trimStart();
  for (let i = 0; i < s.length; i++) {
    if (i === 0 && (s[i] === "-" || s[i] === "+")) {
      numstring += s[i];
    } else if (/^\d$/.test(s[i])) {
      numstring += s[i];
    } else {
      break;
    }
  }

  if (!/[0-9]/.test(numstring)) {
    return 0;
  }
  let integer = parseInt(numstring);
  if (integer < -(2 ** 31)) {
    return -(2 ** 31);
  } else if (integer > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }
  return integer;
};

console.log(myAtoi("1duqsbuhdbuqbdub"));
