{
  /**
   * @Q
   */
  type Diff<O, O1> = {
    [k in Exclude<keyof O | keyof O1, keyof O & keyof O1>]: k extends keyof O ? O[k] : k extends keyof O1 ? O1[k] : never
  }

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
