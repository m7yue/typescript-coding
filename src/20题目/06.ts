type NaiveFlat<T extends any[]> = {
    [P in keyof T]: T[P] extends any[] ? T[P][number] : T[P]
  }[number]
  
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"
  
type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]];

type DeepFlat<T extends any[]> = {
  [K in keyof T]: T[K] extends any[] ? DeepFlat<T[K]> : T[K]
}[number]

type DeepTestResult = DeepFlat<Deep>
// DeepTestResult: "a" | "b" | "c" | "d" | "e"
