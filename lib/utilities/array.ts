import { Dictionary, KeyVal } from './types/common'

export const parseToArray = <T>(val: T | T[]) => {
  if (!val) return []

  return Array.isArray(val) ? val : [val]
}

export const unique = <T>(arr: T[]) => {
  return Array.from(new Set(arr))
}

export const uniqueBy = <T>(arr: Dictionary<T>[], propName: string) => {
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

export const clear = <T>(arr: T[]) => {
  arr.length = 0
}

export const replace = <T>(arr: T[], newArr: T[]) => {
  clear(arr)
  arr.push(...newArr)
}

export const removeByIndex = <T>(arr: T[], index: number) => {
  arr.splice(index, 1)
}

export const removeBy = <T>(
  arr: Dictionary<T>[],
  keyVal: KeyVal<T>,
  all = false
) => {
  const key = keyVal.key
  const val = keyVal.val

  if (all) {
    const newArr: Dictionary<T>[] = []
    arr.forEach(item => {
      if (item[key] === val) return
      newArr.push(item)
    })
    replace(arr, newArr)
  } else {
    const index = arr.findIndex(item => item[key] === val)
    if (index !== -1) {
      removeByIndex(arr, index)
    }
  }
}
