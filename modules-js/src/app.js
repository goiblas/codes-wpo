import * as operations from './utils/operations';
class App {
    constructor(n) {
        this.number = n;
    }
    sumar(n) {
        return operations.suma(n + this.number);
    }
}

const app = new App(20);
console.log(app.sumar(5));

