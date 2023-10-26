import { Footer } from './components/footer';
import { Header } from './components/header';
import { List } from './components/list';
import { Router } from './components/router';
import { repo } from './data/repo';
import { MenuOption } from './types';

function main() {
  console.log('Loaded main');

  const menuOptions: MenuOption[] = [
    { label: 'Home', path: '/' },
    { label: 'Pet City', path: '/petcity.html' },
  ];

  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement === null) return;

  const petList = repo();
  // eslint-disable-next-line no-unused-vars
  const components = [
    new Header('#app', menuOptions),
    new Router('#app'),
    new List('#app', petList),
    new Footer('#app'),
  ];
}

main();
