import Committee from '../views/Committee';
import Home from '../views/Home';
import Program from '../views/Program';
import Links from '../views/Links';
import Inscriptions from '../views/Inscriptions';
import Lecturers from '../views/Lecturers';
import Summary from '../views/Summary';
<<<<<<< HEAD
import Certification from '../views/Certification';
=======
import Certifacation from '../views/Certification';
>>>>>>> 99ecdbbbde9b07e7635ba9c421706982daba2dfa

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
    sidebarName: 'RESÚMENES',
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
  {
    path: '/certification',
    sidebarName: 'CERTIFICACIÓN',
<<<<<<< HEAD
    component: Certification,
=======
    component: Certifacation,
>>>>>>> 99ecdbbbde9b07e7635ba9c421706982daba2dfa
  },

];

export default pages;
