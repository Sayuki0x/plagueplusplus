import fs from 'fs';

export class InfectedManager {
  public infected: any[];

  constructor() {
    this.infected = [];
  }

  public handOfGod(userID: string, multiplier: number = 1) {
    const roll = this.getRandomInt(1, 101);
    console.log(userID + ' User rolled ' + roll + '.')
    const infected = roll < 50 * multiplier;
    if (infected) {
      this.infect(userID);
      console.log(userID + ' User infected... muahahaha!');
    } else {
      console.log(userID + ' User is safe. Stronk immune system.');
    }
    return infected;
  }


  public heal(userID: string) {
    const index = this.infected.indexOf(userID);
    if (index === -1) {
      console.log(userID + ' This user is not infected.');
      return;
    }
    this.infected.splice(index);
  }

  public infect(userID: string) {
    if (this.infected.includes(userID)) {
      console.log(userID + ' The user is already infected.');
      return;
    }
    this.infected.push(userID);
  }

  public isInfected(userID: string) {
    return this.infected.includes(userID);
  }

  private getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min)) + min; 
  }
}