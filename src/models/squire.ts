import { Character } from './character';

export class Squire extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public servantOf: string,
    public servilism: number
  ) {
    super(name, family, age);
  }

  greetings() {
    super.greetings();
    return 'Im a loser';
  }
}
