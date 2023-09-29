// Задайте правильні ts типи для класичних js;
let age: number;
age = 50;
let names: string;
names = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback = (a: number): number => 100 + a;
callback = (a) => {
  return 100 + a;
};

// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
let anything: any;
anything = -20;
anything = "Text";
anything = {};

// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
// let some: unknown;
// some = "Text";

// let str: string;

// str = some;
