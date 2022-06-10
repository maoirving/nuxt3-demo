/* eslint-disable no-console */
import { objArr } from './data'

export const getLastInArray = () => {
  console.log(objArr.at(-1))
}

// when you want to use filter and map at the same time
export const filterAndMap = () => {
  // Method 1. use Array.reduce()
  const newArr = objArr.reduce((prev, current) => {
    if (current.visible) {
      prev.push(current.name)
    }
    return prev
  }, [] as string[])

  // Method 2. use Array.flatMap()
  const newArr2 = objArr.flatMap(obj => (obj.visible ? [obj.name] : []))

  console.log(newArr)
  console.log(newArr2)
}
