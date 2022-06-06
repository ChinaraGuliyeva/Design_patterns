//The main aim of the pattern is creating a class that will help us to create objects. Initial class may be called a superclass.
//It can be used if you need many similar objects - objects with the same structure but different data. This objects can contain
//properties and methods.
//Simple factory contains of two objects - creator class and a class that calls this creating. There may be a few constructor classes,
//in the root class of the factory one of them is called depending on the parameters.

class BMW {
    constructor(model, price, maxSpeed){
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class BMWFactory {
    create(type){
        if (type === 'X5'){
            return new BMW(type, 108000, 300);
        }
        if (type === 'X6'){
            return new BMW(type, 111000, 320);
        }
    }
}

const factory = new BMWFactory();

const X5 = factory.create('X5');
const x6 = factory.create('X6');

console.log(X5);
