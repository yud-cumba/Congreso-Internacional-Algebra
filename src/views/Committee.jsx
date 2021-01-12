/* eslint-disable max-len */
import React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
    padding: '0px',
    fontFamily: 'Barlow',
    fontSize: '17px',
    lineHeight: '20px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
      lineHeight: '28px',
      padding: '0px',
    },
  },
}));

export default function Committee() {
  const classes = useStyles();
  const scientific = [
    'Arkadiusz Płoski, Kielce University of Technology (Polonia)',
    'Evelia Rosa García Barroso, Universidad de La Laguna (España)',
    'Gabriel Armando Muñoz Márquez, Universidad Nacional Mayor de San Marcos (Perú)',
    'Mauro Fernando Hernández Iglesias, Universidad Nacional Mayor de San Marcos (Perú)',
    'Marcelo Escudeiro Hernandes, Universidade Estadual de Maringá (Brasil)',
    'Roland Rabanal, Pontificia Universidad Católica del Perú. (Perú)',
  ];
  const teachers = [
    'Benito Leonardo Ostos Cordero, Universidad Nacional de Ingeniería- IMCA.',
    'Gabriel Armando Muñoz Márquez, Universidad Nacional Mayor de San Marcos.',
    'Mauro Fernando Hernández Iglesias, Universidad Nacional Mayor de San Marcos.',
    'María del Carmen Cáceres Huamán, Universidad Nacional Mayor de San Marcos.',
    'Maruja Yolanda Gavilán Gonzales, Universidad Nacional Mayor de San Marcos.',
  ];
  const students = [
    'Abad Domínguez Quiroz, Universidad Nacional Mayor de San Marcos.',
    'Joaquín Alfonso Castillo Vilcahuaman, Universidad Nacional Mayor de San Marcos.',
    'Roberto Arturo Fiestas Izaguirrre, Universidad Nacional Mayor de San Marcos.',
    'Yuditd Araceli Cumba Tinipuclla, Universidad Nacional Mayor de San Marcos.',
    'Yumari Faríd Cruz Reyes, Universidad Nacional Mayor de San Marcos.',
  ];
  return (
    <div>
      <Typography variant="h1" className={classes.typography}>
        Comité Científico
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h6" className={classes.text}>
        <ul style={{ marginLeft: '0px' }}>
          {
            scientific.map((scy) => (
              <li style={{ marginLeft: '0px' }}>
                {scy}
              </li>
            ))
          }
        </ul>
      </Typography>
      <Typography variant="h1" className={classes.typography}>
        Comité Organizador
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h6" className={classes.text}>
        <h4 style={{ marginLeft: '10px' }}>Docentes:</h4>
        <ul style={{ marginLeft: '0px' }}>
          {
            teachers.map((scy) => (
              <li style={{ marginLeft: '0px' }}>
                {scy}
              </li>
            ))
          }
        </ul>
        <h4 style={{ marginLeft: '10px' }}>Alumnos:</h4>
        <ul style={{ marginLeft: '0px' }}>
          {
            students.map((scy) => (
              <li style={{ marginLeft: '0px' }}>
                {scy}
              </li>
            ))
          }
        </ul>
      </Typography>
    </div>
  );
}
