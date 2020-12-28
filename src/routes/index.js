import Committee from '../views/Committee';
import Home from '../views/Home';

const pages = [
  {
    path: '/',
    sidebarName: 'INICIO',
    component: Home,
  },
  {
    path: '/committee',
    sidebarName: 'COMITÉ',
    component: Committee,
  },

];

export default pages;
