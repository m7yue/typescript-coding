type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
