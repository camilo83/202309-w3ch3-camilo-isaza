import { Mascot } from '../model/mascot';
import { Component } from './components';

export class Animal extends Component {
  mascott: Mascot;
  constructor(selector: string, mascott: Mascot) {
    super(selector);
    this.mascott = mascott;
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return `
  <li>
    <div>
      holaaa
    </div>
  </li>
`;
  }
}
