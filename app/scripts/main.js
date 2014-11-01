//------ lib.js ------
import { square, diag } from './lib';

class Car {
    constructor() {
        alert("Car!");
    }
}

new Car();

alert(square(2));
alert(diag(3,4));