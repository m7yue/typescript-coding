{
  /**
   * @Q
   * [P in T as XXX]
   */
  type Flip<T extends Record<string, any>> = {
    [P in keyof T as `${T[P]}`]: P
  }

  type C = { a: "x", b: "y", c: "z" }
  type V = C[keyof C]


  type T = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
  type T2 = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
  type T3 = Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
}