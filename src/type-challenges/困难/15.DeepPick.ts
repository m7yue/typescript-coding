{
  type GetData<T extends Record<string, any>, K>
    = K extends `${infer F}.${infer Rest}`
      ? {
        [P in F]: GetData<T[F], Rest>
      }
      : K extends `${infer H}`
        ? {
          [P in H]: T[H]
        }
        : never

  type UnionPick<T extends Record<string, any>, K extends string>
    =  K extends K
      ? GetData<T, K>
      : never

  type UnionToIntersection<T>
    = (T extends any ? (x: T) => any : never) extends (x: infer U) => any ? U : never

    
  type DeepPick<T extends Record<string, unknown>, K extends string> = UnionToIntersection<UnionPick<T, K>>
  

  type obj = {
    name: 'hoge', 
    age: 20,
    friend: {
      name: 'fuga',
      age: 30,
      family: {
        name: 'baz',  
        age: 1 
      }
    }
  }

  type T1 = DeepPick<obj, 'name'>   // { name : 'hoge' }
  type T2 = DeepPick<obj, 'name' | 'friend.name'>  // { name : 'hoge' } & { friend: { name: 'fuga' }}
  type T3 = DeepPick<obj, 'name' | 'friend.name' |  'friend.family.name'>  // { name : 'hoge' } &  { friend: { name: 'fuga' }} & { friend: { family: { name: 'baz' }}}
}