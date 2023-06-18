import Character from './Character';

class Magican extends Character {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Magican';
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
