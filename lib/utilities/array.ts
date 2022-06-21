import { groupBy as lo_groupBy, remove as lo_remove } from 'lodash'

export const parseToArray = <T>(val: T | T[]) => {
  if (!val) return []

  return Array.isArray(val) ? val : [val]
}

export const unique = <T>(arr: T[]) => {
  return Array.from(new Set(arr))
}

export const uniqueBy = <T>(arr: T[], propName: string) => {
  // can also use uniqBy from 'lodash'
  const set = new Set([])

  return arr.reduce((prev, current) => {
    const val = current[propName]
    if (!set.has(val)) {
      prev.push(current)
      set.add(val)
    }
    return prev
  }, [] as T[])
}

export const empty = <T>(arr: T[]) => {
  arr.length = 0
}

export const replace = <T>(arr: T[], newArr: T[]) => {
  empty(arr)
  arr.push(...newArr)
}

export const removeByIndex = <T>(arr: T[], index: number) => {
  arr.splice(index, 1)
}

export const removeBy = lo_remove

export const groupBy = lo_groupBy
