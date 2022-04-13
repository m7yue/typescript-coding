{
  type AppendArgument<Fn, A>
    = Fn extends (...args: infer Args) => infer Res
      ? (...args: [...Args, A]) => Res
      : Fn;

  type Fn = (a: number, b: string) => number

  type Result = AppendArgument<Fn, boolean> 
  // 期望是 (a: number, b: string, x: boolean) => number
}