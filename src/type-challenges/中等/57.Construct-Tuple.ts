{
  // @Q
  type ConstructTuple<L extends number, R extends any[] = []>
    = R['length'] extends L
      ? R
      : ConstructTuple<L, [...R, unknown]>

  type result = ConstructTuple<2> // expect to be [unknown, unkonwn]

}