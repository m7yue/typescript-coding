{
  /**
   * @Q
   * -readonly
   */
  type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
  }

  interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }
  
  type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }  

  type DeepMutable<T extends object> = { 
    -readonly [P in keyof T]: T[P] extends (...args: unknown[]) => unknown
      ? T[P]
      : T[P] extends object
        ? DeepMutable<T[P]>
        : T[P]
  }

  type X = {
    readonly a: () => 1
    readonly b: string
    readonly c: {
      readonly d: boolean
      readonly e: {
        readonly g: {
          readonly h: {
            readonly i: true
            readonly j: "s"
          }
          readonly k: "hello"
        }
      }
    }
  }
  
  type Expected = {
    a: () => 1
    b: string
    c: {
      d: boolean
      e: {
        g: {
          h: {
            i: true
            j: "s"
          }
          k: "hello"
        }
      }
    }
  }
  
  type Todo1 = DeepMutable<X> // should be same as `Expected`
}