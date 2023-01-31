import { Character } from '../../models/character';
import { Component } from '../component';
import { allCharacters } from '../../characters';

export class Container extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `

    `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
