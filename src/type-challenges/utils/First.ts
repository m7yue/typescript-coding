
export type First<T extends any[]> = T extends [infer F, ...unknown[]] ? F : never;
