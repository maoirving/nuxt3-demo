import { clone } from 'ramda'
import { parseToArray, unique } from './array'
import { Action, Dictionary, ObjectAction } from './types/common'

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
