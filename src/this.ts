{


  type Point = {
    x: number
    y: number
    moveBy: (dx: number, dy: number) => void
  } & ThisType<{ messageaaaa: string }>
  
  let p: Point = {
    x: 10,
    y: 20,
    moveBy(dx, dy) {
      this // {message:string}
    },
  }
  
}