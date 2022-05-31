//A software design pattern that restricts the instantiation of a class to one "single" instance
//It also has a global access point
//It can be a shopping bag or client's card in the online shop, a player instance
//It may be considered an antipattern, so we should be careful with it

//An example of the singleton may be a class for daily bonus for a player in online game.

class DailyBonusServiceInstance {
    getCurrentReward(){};
    grabCurrentReward(){};
    isWaiting(){};
    getRemainTime(){}
}

//to test this class that can be used only once a day, we can inherit from it and make a class that returns infinite number of bonuses
//https://www.youtube.com/watch?v=5YPsDM5iI3I&t=415s&ab_channel=%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D0%A1%D0%B0%D0%BA%D1%83%D1%82%D0%B8%D0%BD-GameDev

//bad example with global variable

let instance;

class Counter{
    constructor(){
        if(!instance) instance = this;
        instance.count = 0;
        return instance;
    }

    getCount(){
        return instance.count;
    }

    increaseCount(){
        return instance.count++;
    }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount2.getCount()); //4
console.log(myCount1.getCount()) //4


