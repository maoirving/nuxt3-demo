import { toArray, unique } from './array'
import { Action, Dictionary, ObjectAction } from './types/common'
import { cloneDeep, findKey as lo_findKey } from 'lodash'

export const combineObject = (
  currentObj: Dictionary<string | string[]>,
  objActions: ObjectAction | ObjectAction[]
) => {
  const newObj = cloneDeep(currentObj)
  const objActionArr = toArray(objActions)

  objActionArr.forEach(item => {
    const key = item.key
    let newValue: string[] = []
    const newObjVals = toArray(newObj[key])
    const valuesArr = toArray(item.value)
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
        newValue = unique([...newObjVals, ...valuesArr])
    }

    if (newValue.length) {
      newObj[key] = newValue.length > 1 ? newValue : newValue?.[0]
    } else {
      delete newObj[key]
    }
  })

  return newObj
}

export const findKey = lo_findKey

export const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  props: K[]
) => {
  const newObj: Partial<Pick<T, K>> = {}
  props.forEach(key => {
    newObj[key] = obj[key]
  })
  return newObj
}
