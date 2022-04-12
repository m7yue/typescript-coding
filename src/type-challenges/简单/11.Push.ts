type Push<T extends any[], V> = T extends [...infer U] ? [...U, V] : never;
// type Push<T extends any[], V> = [...T, V];

// 测试用例
type Arr0 = Push<[], 1> // [1]
type Arr1 = Push<[1, 2, 3], 4> // [1, 2, 3, 4]
