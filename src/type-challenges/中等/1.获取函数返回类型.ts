{
  type MyReturnType<T extends (...args: any) => unknown> = T extends (...args: any) => infer R ? R : never

  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
}
