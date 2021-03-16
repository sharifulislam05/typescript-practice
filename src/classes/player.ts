import { IsPlayer } from "./../interfaces/isPlayer.js";

export class Players implements IsPlayer {
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}
  getProperty() {
    return this.age;
  }
  play() {
    console.log(
      `my name is ${this.name} and my age is ${this.age} and my country is ${this.country}`
    );
  }
}
