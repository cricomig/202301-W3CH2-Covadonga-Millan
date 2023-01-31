import { Character } from './models/character';
import { Counselor } from './models/counselor';
import { Fighter } from './models/fighter';
import { King } from './models/king';
import { Squire } from './models/squire';

export const allCharacters: Character[] = [
  new King('Joffrey', 'Baratheon', 3, 6),
  new Fighter('Jaime', 'Lannister', 23, 'hand', 9),
  new Fighter('Daenerys', 'Targaryen', 12, 'dragon', 3),
];

allCharacters.push(
  new Counselor('Tyrion', 'Lannister', 34, allCharacters[3].name)
);
allCharacters.push(
  new Squire('Bronn', 'Misterio', 32, allCharacters[2].name, 1)
);
