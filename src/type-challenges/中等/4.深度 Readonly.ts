type DeepReadonly<T extends Record<string, unknown>> = {
  [P in keyof T]: T[P] extends Record<string, unknown> ? DeepReadonly<T[P]> : T[P]
}

// 关于 Record<string, any> ，官方给出的解答：
// https://github.com/microsoft/TypeScript/issues/41746
// 所有的引用数据类型都可以通过类型检查
const a1: Record<string, any> = [22];
const a2: Record<string, any> = /\d/;
const a3: Record<string, any> = {};
let a4: Record<string, any> = { name: "张三" };
a4 = [];
const a5: Record<string, any> = new Map();
const a6: Record<string, any> = new Set();
const a7: Record<string, any> = class Person {};
const a8: Record<string, any> = new Promise(() => {});

// Record<string, unknown> 只有"对象" 才能通过类型检查
const b: Record<string, unknown> = () => 22; // error
const b1: Record<string, unknown> = [22]; // error
const b2: Record<string, unknown> = /\d/; // error
const b3: Record<string, unknown> = {};
let b4: Record<string, unknown> = { name: "张三" };
b4 = []; // error
const b5: Record<string, unknown> = new Map(); // error
const b6: Record<string, unknown> = new Set(); // error
const b7: Record<string, unknown> = class Person {}; // error
const b8: Record<string, unknown> = new Promise(() => {}); // error