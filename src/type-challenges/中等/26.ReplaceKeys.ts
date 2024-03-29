{
  /**
   * @Q 本体实现是根据题目具体方要求实现的，实际运用时需要根据具体场景
   */
  type ReplaceKeys<T, U, O>
    = T extends T
      ? {
        [P in keyof T]: P extends U ? P extends keyof O ? O[P] : never : T[P]
      }
      : never

      type A = {
        a: number
      }

  type NodeA = {
    type: 'A'
    name: string
    flag: number
  }
  
  type NodeB = {
    type: 'B'
    id: number
    flag: number
  }
  
  type NodeC = {
    type: 'C'
    name: string
    flag: number
  }
  
  
  type Nodes = NodeA | NodeB | NodeC
  
  type ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', {name: number, flag: string}> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.
  
  type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', {aa: number}> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
}