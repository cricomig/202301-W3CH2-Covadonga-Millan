import { Card } from './components/card/card';
import { Greetings } from './components/greetings/greetings';

const cards = new Card('.card-body');
const greeting = new Greetings(`.comunications`);

cards.render('afterbegin');
greeting.render('afterbegin');
