import Committee from '../views/Committee';
import Home from '../views/Home';
import Program from '../views/Program';
import Links from '../views/Links';
import Inscriptions from '../views/Inscriptions';
import Lecturers from '../views/Lecturers';
import Summary from '../views/Summary';

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
  {
    path: '/program',
    sidebarName: 'PROGRAMA',
    component: Program,
  },
  {
    path: '/lecturers',
    sidebarName: 'CONFERENCISTAS',
    component: Lecturers,
  },
  {
    path: '/summaries',
    sidebarName: 'RESUMENES',
    component: Summary,
  },
  {
    path: '/links',
    sidebarName: 'ENLACES',
    component: Links,
  },
  {
    path: '/inscriptions',
    sidebarName: 'INSCRIPCIONES',
    component: Inscriptions,
  },

];

export default pages;
