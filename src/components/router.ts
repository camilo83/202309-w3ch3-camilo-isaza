import { Component } from './components';

export class Router extends Component {
  path: string;
  constructor(selector: string) {
    super(selector);
    this.path = location.pathname;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    let html = '<main>';

    switch (this.path) {
      case '/petcity.html':
        html += `<h2>Animals</h2>`;

        break;

      default:
        html += `<h2>Home</h2>`;
        break;
    }

    html += '</main>';
    return html;
  }
}
