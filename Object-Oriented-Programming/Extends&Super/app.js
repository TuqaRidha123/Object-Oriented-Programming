class Pet {
    constructor(name, age) {
        console.log('in pet constructor');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('in cat constructor');
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meow!';
    }
}
/* // to run...
const monty = new Cat('monty', 9);
monty.eat(); //monty is eating!
*/

class Dog extends Pet {
    bark() {
        return 'Woof!'
    }
}