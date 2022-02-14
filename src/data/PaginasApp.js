import Ejercicio1 from '../components/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2';
import Ejercicio3 from '../components/Ejercicio3';
import Enunciado from '../components/Enunciado';
export const PaginasApp = [
  {
    id: 1,
    path: '/',
    title: './Enunciado',
    component: Enunciado,
  },
  {
    id: 2,
    path: './Ejercicio1',
    title: 'Ejercicio1',
    component: Ejercicio1,
  },
  {
    id: 3,
    path: './Ejercicio2',
    title: 'Ejercicio2',
    component: Ejercicio2,
  },
  {
    id: 4,
    path: './Ejercicio3',
    title: 'Ejercicio3',
    component: Ejercicio3,
  },
];

/*
  id
  path
  title
  component

*/
