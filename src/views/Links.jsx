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
    padding: '10px',
    fontFamily: 'Barlow',
    fontSize: '15px',
    lineHeight: '20px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '22px',
      padding: '28px',
      lineHeight: '28px',
    },
  },
  special: {
    color: 'red',
  },
  view: {
    // Theme Color, or use css color in quote
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      height: 'auto',
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  return (
    <div className={classes.view}>
      <Typography variant="h1" className={classes.typography}>
        Álgebra
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h6" className={classes.text}>
        Accede a las ponencias de álgebra mediante el siguiente enlace:

        <p className={classes.special}>Próximamente</p>
      </Typography>
      <Typography variant="h1" className={classes.typography}>
        Sistemas Dinámicos
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h6" className={classes.text}>
        Accede a las ponencias de sistemas dinámicos mediante el siguiente enlace

        <p className={classes.special}>Próximamente</p>
      </Typography>
    </div>
  );
}
