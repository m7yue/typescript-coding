{
  type ObjectFromEntries<T extends [string, any]>
    = {
      // @Q
      [P in T as P[0]]: P[1]
    }



  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  
  type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];
  
  type result = ObjectFromEntries<ModelEntries> // expected to be Model
}