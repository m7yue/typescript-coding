{
  type Replace<
    S extends string,
    From extends string,
    To extends string
  > = From extends ''
      ? S
      : S extends `${infer Left}${From}${infer Right}`
        ? `${Left}${To}${Right}`
        : S


  type ReplaceAll<
    S extends string,
    From extends string,
    To extends string
  > = From extends ''
      ? S
      : S extends `${infer Left}${From}${infer Right}`
        ? `${Left}${To}${ReplaceAll<Right, From, To>}`
        : S

  
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'
}