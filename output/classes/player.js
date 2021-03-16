export class Players {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProperty() {
        return this.age;
    }
    play() {
        console.log(`my name is ${this.name} and my age is ${this.age} and my country is ${this.country}`);
    }
}
