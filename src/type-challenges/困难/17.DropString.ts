{
  type DropString<T extends string, K extends string>
    = K extends `${infer A}${infer Res}` ? DropString<DropOne<T, A>, Res> : T;

  type DropOne<T extends string, K extends string>
    = T extends `${infer A}${K}${infer B}` ? DropOne<`${A}${B}`, K> : T;


  type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'
}