
type Shift<T extends Array<any>> = T extends [any, ...infer U] ? U : []
// 测试用例
type S0 = Shift<[1, 2, 3]> 
type S1 = Shift<[string,number,boolean]> 
