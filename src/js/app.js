export default class Team {
  constructor() {
    this.teams = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      }, {
        name: 'Демон',
        type: 'Daemon',
        health: 60,
        level: 2,
        attack: 50,
        defence: 20,
      }, {
        name: 'Маг',
        type: 'Magician',
        health: 70,
        level: 3,
        attack: 30,
        defence: 20,
      },
    ];
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this.current === undefined) {
      this.current = 0;
    }
    if (this.current < this.teams.length) {
      this.current += 1;
      return {
        done: false,
        value: this.teams[this.current - 1],
      };
    }
    
    delete this.current;
    return {
      done: true,
    };
  }
}