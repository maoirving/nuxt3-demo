export const getDecimalLength = (num: number) => {
  // get number length after decimal point
  const numArr = num.toString().split('.')
  if (numArr.length !== 2) return 0
  return numArr[1].length
}
