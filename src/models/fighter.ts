import { Character } from './character';

export class Fighter extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public weapon: string,
    public skill: number
  ) {
    super(name, family, age);
  }

  greetings() {
    super.greetings();
    return 'First I hit and then I ask';
  }
}
