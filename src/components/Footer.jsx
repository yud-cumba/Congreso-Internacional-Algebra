import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';
import cienciasMatematicas from '../assets/cienciasMatematicas.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    height: 'auto',
    background: '#D0D0D0',
    padding: '8px',
    [theme.breakpoints.up('sm')]: {
      padding: '15px',
    },
  },
  img: {
    width: '150px',
    [theme.breakpoints.up('sm')]: {
      width: '250px',
    },
  },
  hidden: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  text: {
    fontFamily: 'Roboto Condensed',
    fontSize: '15px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <div className={classes.hidden}>
        <Typography className={classes.text}>
          FACULTAD DE CIENCIAS MATEMÁTICAS
        </Typography>
        <Typography className={classes.text}>
          UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS, Ciudad Universitaria
        </Typography>
        <Typography className={classes.text}>
          Av. Venezuela s/n cuadra 34
        </Typography>
      </div>
      <div>
        <Typography className={classes.text}>
          CONTACTO: congresoalgsis@gmail.com
        </Typography>
      </div>
      <div>
        <img src={cienciasMatematicas} alt="escudo" className={classes.img} />
      </div>
    </BottomNavigation>
  );
}
