export const cloneDeep = <T>(val: T): T => {
  return JSON.parse(JSON.stringify(val))
}
