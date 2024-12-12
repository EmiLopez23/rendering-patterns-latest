export type Country = string

export interface Product {
  id: string
  price: number
  name: string
  description: string
  image: string
  link: string
  discount?: number
}


export interface TimeZone{
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    seconds: number,
    milliSeconds: number,
    dateTime: string,
    date: string,
    time: string,
    timeZone: string,
    dayOfWeek: string,
    dstActive: boolean
}