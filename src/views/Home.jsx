/* eslint-disable max-len */
import React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import fondoUNMSM from '../assets/fondoSM.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontWeight: '700',
    paddingTop: '15px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '25px',
      fontSize: '30px',
    },
  },
  divider: {
    // Theme Color, or use css color in quote
    height: '5px',
    background: '#FFAA05',
  },
  text: {
    padding: '10px',
    fontFamily: 'Barlow',
    fontSize: '17px',
    lineHeight: '20px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
      padding: '20px',
      lineHeight: '28px',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1" className={classes.typography}>
        Presentación
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h6" className={classes.text}>
        El presente evento científico es organizado por el Departamento Académico de Matemática de la UNMSM, en coordinación con un grupo de profesores de la Facultad de Ciencias Matemáticas y de otras universidades, como una contribución de la Facultad al desarrollo científico del país y consolidar en un futuro próximo la formación de un grupo de investigación. Para esto se ha reunido a un grupo importante y prestigioso de matemáticos nacionales e internacionales de las áreas de Álgebra y Sistemas Dinámicos.
      </Typography>
      <Typography variant="h1" className={classes.typography}>
        Objetivo
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h6" className={classes.text}>
        El objetivo del “Primer Congreso Internacional de Álgebra y Sistemas Dinámicos” es mostrar resultados actuales que están desarrollando investigadores de las áreas de Álgebra y Sistemas Dinámicos, los conferencistas darán a conocer sus resultados y avances de sus trabajos, de este modo se fomentará la investigación entre los estudiantes y profesores de nuestra facultad, como también se incentivará las relaciones con otras instituciones nacionales e internacionales.
      </Typography>
      <img src={fondoUNMSM} alt="fondo UNMSM" style={{ width: '100%' }} />
    </div>
  );
}
