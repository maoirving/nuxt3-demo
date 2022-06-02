import { isNumber } from './variable-type'

export const padStart = (
  val: string | number,
  length: number,
  filler = '0'
) => {
  const avalibleVal = isNumber(val) ? val.toString() : val
  return avalibleVal.padStart(length, filler)
}
