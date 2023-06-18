import Character from './Character';

class Bowerman extends Character {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Bowman';
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
