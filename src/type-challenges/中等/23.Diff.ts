{
  /**
   * @Q
   */
  type Diff<
    O1,
    O2,
    K extends Exclude<keyof O1 | keyof O2, keyof O1 & keyof O2> = Exclude<keyof O1 | keyof O2, keyof O1 & keyof O2>
    > = {
    [P in K]: P extends keyof O1 ? O1[P] : P extends keyof O2 ? O2[P] : never
  }

  type P = ('a' | 'b') & ('b' | 'c') // b

  type DiffA = {
    a: string
    b: number
  }

  type DiffB = {
    b: string
    c: number
  }

  type DiffTest = Diff<DiffA, DiffB>
}
