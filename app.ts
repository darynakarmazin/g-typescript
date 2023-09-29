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
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person: [string, number];
person = ["Max", 21];

// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum Load {
  LOADING,
  READY,
}
const page = {
  load: Load.READY,
};
if (page.load === Load.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === Load.READY) {
  console.log("Сторінка завантажена");
}
// Зробіть змінну, яка може приймати або рядок, або число.
let union: string | number;
union = "Text";
union = 10;
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'enable'
let literal: "enable" | "enable";
literal = "enable";
// Вкажіть типи для наступних функцій

function showMessage(message): void {
  console.log(message);
}

function calc(num1, num2): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Створіть свій тип даних на основі наявних даних.
type PageType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
