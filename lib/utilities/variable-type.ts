export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isBoolean = (val: unknown): val is boolean =>
  typeof val === 'boolean'

export const isString = (val: unknown): val is string => typeof val === 'string'

export const toTypeString = (value: unknown): string =>
  Object.prototype.toString.call(value)

export const isObject = (val: unknown): val is Record<any, any> =>
  toTypeString(val) === '[object Object]'

export const { isArray } = Array

export const isFunction = <T extends Function>(val: unknown): val is T =>
  typeof val === 'function'
