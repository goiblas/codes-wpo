(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

const suma = (a, b) => a + b;

class App {
    constructor(n) {
        this.number = n;
    }
    sumar(n) {
        return suma(n + this.number);
    }
}

const app = new App(20);
console.log(app.sumar(5));

})));
