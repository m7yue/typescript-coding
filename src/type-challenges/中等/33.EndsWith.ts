{
  type EndsWith<T extends string, U extends string>
    = T extends `${infer L}${U}` ? true : false


  type a = EndsWith<'abc', 'ac'> // expected to be false
  type b = EndsWith<'abc', 'bc'> // expected to be true
  type c = EndsWith<'abc', 'babc'> // expected to be false
}