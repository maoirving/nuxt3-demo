export const getDecimalLength = (num: number) => {
  // get number length after decimal point
  const numArr = num.toString().split('.')
  if (numArr.length !== 2) return 0
  return numArr[1].length
}

export const clamp = (min: number, max: number, num: number) => {
  return Math.min(max, Math.max(min, num))
}
