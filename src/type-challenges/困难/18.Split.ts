{
  // @Q
  type Split<T extends string, K extends string>
    = T extends `${infer L}${K}${infer R}`
      ? [L, ...Split<R, K>]
      : [T]

  type result = Split<'Hi! How are you?', ' '>  // should be ['Hi!', 'How', 'are', 'you?']
}