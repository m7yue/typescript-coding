
type MyExclude<T, U> = T extends U ? never : T;

{
 type Event = | {
  type: 'click'
  x: number
  y: number
 }
 | {
  type: 'focus'
 }
 | {
  type: 'change'
  value: string
 }

 type ClickAndFocusEvent = MyExclude<Event, {type: 'click'}>

 type Bol = 
  {
    type: 'click'
    x: number
    y: number
  } extends {type: 'click'} ? true : false // true
}