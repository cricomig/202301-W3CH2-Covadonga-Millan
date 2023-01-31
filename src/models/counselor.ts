import { Character } from './character';

export class Counselor extends Character {
  // eslint-disable-next-line no-unused-vars
  constructor(name: string, family: string, age: number, public boss: string) {
    super(name, family, age);
  }

  greetings() {
    super.greetings();
    return 'I dont know why but I think Im going to die soon';
  }
}
