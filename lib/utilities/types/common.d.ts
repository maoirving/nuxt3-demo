export interface Dictionary<T> {
  [index: string]: T
}

export enum Action {
  Add = 0,
  Remove = 1,
  Replace = 2,
  Delete = 3,
}

export interface ObjectAction {
  key: string
  value?: string | string[]
  action: Action
}
