import Character from './Character';

class Undead extends Character {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Undead';
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
