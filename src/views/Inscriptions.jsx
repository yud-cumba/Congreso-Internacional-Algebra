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
  view: {
    // Theme Color, or use css color in quote
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      height: 'auto',
    },
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

export default function Inscriptions() {
  const classes = useStyles();
  const scientific = [
    'Las ponencias se realizaran de manera virtual a través de la plataforma Google Meet.',
    ' El certificado de participación de los asistentes se entregará de manera gratuita y solo a los asistentes que tengan un mínimo de 15 ponencias asistidas. Los datos del certificado se realizarán con los datos registrados en el formulario de inscripción',

  ];
  return (
    <div className={classes.view}>
      <Typography variant="h1" className={classes.typography}>
        Inscripciones

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
          <li style={{ marginLeft: '0px' }}>
            Para poder inscribirse en el congreso,
            deberá completar la solicitud de registo a traves del siguiente enlace:
            {' '}
            <a href="https://forms.gle/Gtuz5sxcKhn1GX5p8" rel="noreferrer" target="_blank">https://forms.gle/Gtuz5sxcKhn1GX5p8</a>
          </li>
        </ul>
      </Typography>

    </div>
  );
}
