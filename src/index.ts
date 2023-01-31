import { allCharacters } from './characters';
import { Card } from './components/card/card';
import { Container } from './components/container/container';
import { Greetings } from './components/greetings/greetings';

console.log(allCharacters);

const cards = new Card('.card');
const greeting = new Greetings(`.comunications`);
const container = new Container('');

cards.render('afterbegin');
greeting.render('afterbegin');
container.render('afterbegin');
