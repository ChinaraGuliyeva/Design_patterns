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


