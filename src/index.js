module.exports = function reverse(n) {
  let num = n;
  if (num < 0) {
    num = Math.abs(num);
  }
  let res = 0;
  while (num > 0) {
    const lastNum = num % 10;
    res = res * 10 + lastNum;
    num = Math.floor(num / 10);
  }
  return res;
};
