console.log('hello');

//#1

var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black',
    showInfo: function() {
        console.log(`${this.firstName} ${this.lastName} has ${this.hairColor} hair and ${this.eyeColor} eyes.`)
    }
}; 

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown',
};

daughter.__proto__ = mom;
console.log(daughter.lastName);

mom.showInfo();
daughter.showInfo();

//#2

class Person {
    constructor (name) {
        this.name = name;
        this.friends = [];
    }
    addFriend(friend) {
        this.friends.push(friend);
    };
    createGreeting(other) {
        return `Yo ${other.name}! from ${this.name}`
    };
    greet(other) {
        alert(this.createGreeting(other));
    }
    createGreetingForFriends() {
        return this.friends.map(anyfriend => this.createGreeting(anyfriend));
    }
}

Person.prototype.lazyGreet = function(other) {
    setTimeout(()=>{this.greet(other)}, 5000);
};

// #3
aPerson = new Person('Veronica');
aPerson2 = new Person('Paul');

aPerson.lazyGreet(aPerson2);

// #4
let boi = new Person('Boi');
let gee = new Person('Gee');
let yeet = new Person('Yeet');

boi.addFriend(gee);
boi.addFriend(yeet);

console.log(boi.createGreetingForFriends());