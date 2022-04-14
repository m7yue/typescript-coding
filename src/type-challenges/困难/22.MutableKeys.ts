import { IsEqual } from '../utils/IsEqual'
{

  type MutableKeys<T> = keyof {
    [Key in keyof T as IsEqual<Pick<T, Key>, Readonly<Pick<T, Key>>> extends true ? never : Key ]: any
  }

  type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
// expected to be “bar”
}