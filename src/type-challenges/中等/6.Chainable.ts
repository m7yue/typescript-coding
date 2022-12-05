// @Q
type Chainable = {
  option<ThisArg, K extends string, V>(this: ThisArg, key: Exclude<K, keyof ThisArg>, value: V): ThisArg & { [k in K]: V }
  get<ThisArg>(this: ThisArg): Omit<ThisArg, 'option' | 'get'>;
}

declare const config: Chainable

// 谁调用谁是 this
const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

type Result = typeof result