{
  type MinusOne<T extends number, Arr extends unknown[] = []>
    = [...Arr, any]['length'] extends T ? Arr['length'] : MinusOne<T, [...Arr, any]>

  type Zero = MinusOne<1> // 0  
  type FiftyFour = MinusOne<55> // 54
}