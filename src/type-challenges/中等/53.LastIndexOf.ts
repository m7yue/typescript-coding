{
  type LastIndexOf<T extends unknown[], U> = T extends [...infer Rest, infer R]
    ? R extends U
        ? Rest["length"]
        : LastIndexOf<Rest, U>
    : -1

  type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
  type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
}