import { Character } from '../../models/character';
import { Component } from '../component';
import { allCharacters } from '../../characters';

export class Card extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
          <div class="card-body">
            <h2 class="character__name card-title h4">'${allCharacters[].name} and ${allCharacters[].family}'</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${allCharacters[].age}</li>
                <li>
                  Alive or not:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Reign Years: X</li>
                <li>Weapon: XXX</li>
                <li>Hability: X</li>
                <li>Besaculos: X</li>
                <li>Counselor of: X</li>
                <li>Serves: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
    `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
