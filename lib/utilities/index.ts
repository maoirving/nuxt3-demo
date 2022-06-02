import { Dictionary, clone } from 'ramda'
import { Action, ObjectAction } from './types'
import { isNumber } from './variable-type'

// String
export const padStart = (
  val: string | number,
  length: number,
  filler = '0'
) => {
  const avalibleVal = isNumber(val) ? val.toString() : val
  return avalibleVal.padStart(length, filler)
}

// Array
export function parseToArray<T>(val: T | T[]) {
  if (!val) return []

  return Array.isArray(val) ? val : [val]
}

export function unique<T>(arr: T[]) {
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

// Object

export const combineObject = (
  currentObj: Dictionary<string | string[]>,
  objActions: ObjectAction | ObjectAction[]
) => {
  const newObj = clone(currentObj)
  const objActionArr = parseToArray(objActions)

  objActionArr.forEach(item => {
    const key = item.key
    let newValue: string[] = []
    const newObjVals = parseToArray(newObj[key])
    const valuesArr = parseToArray(item.value)
    const valuesArrSet = new Set(valuesArr)

    switch (item.action) {
      case Action.Remove:
        newValue = newObjVals.filter(val => !valuesArrSet.has(val))
        break
      case Action.Replace:
        newValue = valuesArr
        break
      case Action.Delete:
        break
      default:
        newValue = unique(newObjVals.concat(valuesArr))
    }

    if (newValue.length) {
      newObj[key] = newValue.length > 1 ? newValue : newValue?.[0]
    } else {
      delete newObj[key]
    }
  })

  return newObj
}
