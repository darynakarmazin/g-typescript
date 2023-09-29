// Задайте правильні ts типи для класичних js;
var age;
age = 50;
var names;
names = "Max";
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) { return 100 + a; };
callback = function (a) {
    return 100 + a;
};
// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
var anything;
anything = -20;
anything = "Text";
anything = {};
