{
  // @Q
  type Fibonacci<T extends number, K extends any[]=[any], F1 extends any[]=[], F2 extends any[]=[any]>
    = K["length"] extends T ? F2["length"] : Fibonacci<T, [...K,any], [...F2], [...F1, ...F2]>

  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
}