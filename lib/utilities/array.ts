import { Dictionary } from './types/common'

export const parseToArray = <T>(val: T | T[]) => {
  if (!val) return []

  return Array.isArray(val) ? val : [val]
}

export const unique = <T>(arr: T[]) => {
  return Array.from(new Set(arr))
}

export const uniqueBy = (arr: Dictionary<any>[], propName: string) => {
  // can alse use uniqBy from 'lodash'
  const set = new Set([])
  const newArr = []

  arr.forEach(obj => {
    const val = obj[propName]
    if (set.has(val)) return
    newArr.push(obj)
    set.add(val)
  })

  return newArr
}
