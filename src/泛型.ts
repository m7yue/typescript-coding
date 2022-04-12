type TT = <T>(arg: T) => T


interface IT {
  <T>(arg: T): T
}
interface ITT<T> {
  (arg: T): T
}

class CT<T> {
  a: T;
  constructor(arg: T) {
    this.a = arg
  }

  fn:(arg: T) => T = (arg: T) => {
    return arg
  }
}

interface LengthT {
  length: number
}

function f<T extends LengthT>(arg: T) {
  console.log(arg.length)
  return arg
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

interface IClass<T> {
  new (): T
}

function create<T>(c: IClass<T>): T {
  return new c()
}


class Parent {
  name: string = '7'
}
class Child1 extends Parent {
  name: string = '71'
  c1() {}
}
class Child2 extends Parent {
  name: string = '72'
  c2() {}
}

type Ctor<T> = new () => T

function CreateInstance<T extends Parent>(c: Ctor<T>): T {
  return new c()
}

CreateInstance(Child1).c1
CreateInstance(Child2).c2

