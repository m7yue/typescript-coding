/**
 * https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
 * https://www.zhihu.com/question/479585640
 */
export type IsEqual<X, Y>
  = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
    ? true
    : false
