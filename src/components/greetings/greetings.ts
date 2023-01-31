import { Character } from '../../models/character';
import { Component } from '../component';
import { allCharacters } from '../../characters';

export class Greetings extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
 <div class="comunications">
  <p class="comunications__text display-1">Una frase que dice alguien</p>
  <img
    class="comunications__picture"
    src="img/no-one.jpg"
    alt="Nombre y familia del que habla"
  />
</div>;
    `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
