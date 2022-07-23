import { groupBy as lo_groupBy, remove as lo_remove } from 'lodash'
import { Iteratee } from './types/common'
import { isString } from './variable-type'

export const parseToArray = <T>(val: T | T[]): NonNullable<T>[] => {
  if (val === undefined || val === null) return []
  return (Array.isArray(val) ? val : [val]) as NonNullable<T>[]
}

export const unique = <T>(arr: T[]) => {
  return Array.from(new Set(arr))
}

export const uniqueBy = <T>(arr: T[], iteratee: string | Iteratee<T>) => {
  // can also use uniqBy from 'lodash'
  const newArrMap = new Map<any, T>()

  arr.forEach(item => {
    const val = isString(iteratee) ? item[iteratee] : iteratee(item)
    if (!newArrMap.has(val)) {
      newArrMap.set(val, item)
    }
  })

  return Array.from(newArrMap.values())
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
