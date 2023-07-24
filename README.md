# type-challenges

## 关键字
- extends
- key of
- infer

## 技巧
-  裸类型: U extends U, [U] extends [U] 
-  长度通过数组 ['length'] 
-  number => string: `${T}`
-  I extends [infer F, ...infer Rest]
-  S extends `${infer F}${infer Rest}`
-  as
   ```ts
    type PickByType<T, U> = {
      [P in keyof T as T[P] extends U ? P : never]: T[P]
    }
   ```
-  -?: means required
-  -readonly: means not readonly, mutable
-  PropertyKey: 内置，string | number | symbol
- ThisType