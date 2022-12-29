function checkAnangram(str1, str2) {
  //   console.log(str1);
  //   console.log(str2);
  if (str1.length != str2.length) {
    return false;
  }
  var object = {};
  for (ch of str1) {
    object[ch] = (object[ch] || 0) + 1;
  }
  for (ch of str2) {
    if (!object[ch]) {
      return false;
    }
    object[ch]--;
  }
  return true;
}

console.log(checkAnangram("prinwy", "ecnirp"));
