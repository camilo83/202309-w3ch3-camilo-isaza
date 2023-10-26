import { type Mascot } from '../model/mascot';

export const repo = () => {
  const data: Mascot[] = [
    {
      id: crypto.randomUUID(),
      name: 'Polo',
      owner: 'Camilo',
      isAdopted: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Lucas',
      owner: 'Pedro',
      isAdopted: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'Polo',
      owner: 'Manuel',
      isAdopted: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Polo',
      owner: 'Carlos',
      isAdopted: false,
    },
  ];
  return data;
};
