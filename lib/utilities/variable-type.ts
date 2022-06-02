export const isNumber = (val: any): val is number => typeof val === 'number'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isString = (val: any): val is string => typeof val === 'string'

export const isObject = (val: any): val is object =>
  toString.call(val) === '[object Object]'
export const { isArray } = Array
export const isFunction = <T extends Function>(val: any): val is T =>
  typeof val === 'function'
