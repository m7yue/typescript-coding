// https://juejin.cn/post/6927507521783627790

{
  // 对象字面量方法的 this 类型为该对象字面量本身
  let foo = {
    x: "hello",
    f(n: number) {
      this //this: {x: string;f(n: number):void }
    },
  }
}


{
  // 如果对象字面量进行了类型标注了，则 this 类型为标注的对象类型
  type Point = {
    x: number
    y: number
    moveBy(dx: number, dy: number): void
  }
  
  let p: Point = {
    x: 10,
    y: 20,
    moveBy(dx, dy) {
      this // Point
    },
  } 
}


{
  // 如果对象字面量的方法有 this 类型标注了，则为标注的 this 类型
  let bar = {
    x: "hello",
    f(this: { message: string }) {
      this // { message: string }
    },
  }
}


{
  // 如果对象字面量的即进行了类型标注，同时方法也标注了类型，则方法的标注 this 类型优先
  type Point = {
    x: number
    y: number
    moveBy(dx: number, dy: number): void
  }
  
  let p: Point = {
    x: 10,
    y: 20,
    moveBy(this: { message: string }, dx, dy) {
      this // {message:string} ,方法类型标注优先级高于对象类型标注
    },
  }
}


{
  // 如果对象字面量进行了类型标注，且该类型标注里包含了 ThisType，那么 this 类型为 T
  type Point = {
    x: number
    y: number
    moveBy: (dx: number, dy: number) => void
  } & ThisType<{ message: string }>
  
  let p: Point = {
    x: 10,
    y: 20,
    moveBy(dx, dy) {
      this // {message:string}
    },
  }
}


{
  // 如果对象字面量进行了类型标注，且类型标注里指明了 this 类型,则使用该标注类型
  type Point = {
    x: number
    y: number
    moveBy(this: { message: string }, dx: number, dy: number): void
  }
  
  let p: Point = {
    x: 10,
    y: 20,
    moveBy(dx, dy) {
      this // { message:string}
    },
  }
}


{}
/**
 * 将规则按从高到低排列如下
 * 1. 如果方法里显示标注了 this 类型，这是用该标注类型
 * 2. 如果上述没标注，但是对象标注的类型里的方法类型标注了 this 类型，则使用该 this 类型
 * 3. 如果上述都没标注，但对象标注的类型里包含了 ThisType,那么 this 类型为 T
 * 4. 如果上述都没标注，this 类型为对象的标注类型
 * 5. 如果上述都没标注，this 类型为对象字面量类型
 */