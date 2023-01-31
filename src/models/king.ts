import { Character } from './character';

export class King extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public kingdomAges: number
  ) {
    super(name, family, age);
  }

  greetings() {
    super.greetings();
    return 'You are going to die';
  }
}
