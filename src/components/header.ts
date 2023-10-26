import { MenuOption } from '../types';
import { Component } from './components';

export class Header extends Component {
  options: MenuOption[];
  constructor(selector: string, options: MenuOption[]) {
    super(selector);
    this.options = options;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return ` 
    <header>
      <h1>PET CITY</h1>
    </header>
    `;
  }
}
