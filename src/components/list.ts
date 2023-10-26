import { Component } from './components';
import { type Mascot } from '../model/mascot';
import { repo } from '../data/repo';

const listedPets = repo();

export const list = (pets: Mascot) => {
  const template = `<ul>
  <li id=""><p>Id: ${pets.id}</p></li>
  <li id=""><p>Nombre: ${pets.name}</p></li>
  <li id=""><p>Dueño: ${pets.owner}</p></li>
   <li id=""><p>Procedencia: ${
     pets.isAdopted ? 'Adoptado' : 'No adoptado'
   }</p></li>
  </ul>`;

  return template;
};

export const renderList = (parentElement: HTMLElement) => {
  let htmlElement = `<ul>`;

  htmlElement += listedPets.map((mascot) => list(mascot));
  htmlElement += `</ul>`;
  parentElement.innerHTML += htmlElement;

  return htmlElement;
};

export class List extends Component {
  data: Mascot[];
  constructor(selector: string, data: Mascot[]) {
    super(selector);
    this.data = data;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    let list = `<ul class"pet-list">`;
    list += this.data.map(
      (mascot) => `<ul class"${mascot.name}-list"><li><p>Id: ${
        mascot.id
      }</p></li>
                <li><p>Nombre: ${mascot.name}</p></li>
                <li><p>Dueño: ${mascot.owner}</p></li>
                <li><p>Procedencia: ${
                  mascot.isAdopted ? 'Adoptado' : 'No adoptado'
                }</p></li>
                <li><button class="edit-button">Edit</button><button class="delete-button">Delete</button></ul>
</li>`
    );
    list += `</ul>`;
    return list;
  }
}
