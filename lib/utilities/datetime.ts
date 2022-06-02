import { padStart } from './index'

export const parseISO8601Duration = (
  duration: string,
  format = 'hh:mm'
): string => {
  const REGEX = /P(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/
  const [, hours, mins, secs] = duration.match(REGEX) || []
  // support two kinds of delimiter (':' and '.')
  let delimiter = ':'
  if (format?.indexOf('.') !== -1) {
    delimiter = '.'
  }
  const formatArr = format.split(delimiter)
  const fullTimeArr: string[] = []
  if (formatArr?.includes('hh')) {
    fullTimeArr.push(hours || '00')
  }
  if (formatArr?.includes('mm')) {
    fullTimeArr.push(mins || '00')
  }
  if (formatArr?.includes('ss')) {
    fullTimeArr.push(secs || '00')
  }

  return fullTimeArr.length
    ? fullTimeArr.map(num => (num.length < 2 ? `0${num}` : num)).join(delimiter)
    : ''
}

export const getCurrentTime = () => {
  const now = new Date()
  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()

  const hh = padStart(h, 2)
  const mm = padStart(m, 2)
  const ss = padStart(s, 2)
  return `${hh}:${mm}:${ss}`
}
