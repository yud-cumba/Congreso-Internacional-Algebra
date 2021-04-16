import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
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
  padding: {
    padding: '0vw',
    [theme.breakpoints.up('sm')]: {
      padding: '2vw',
    },
  },
  btn: {
    background: '#FFAA05',
    width: '180px',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  pdf: {
    width: '87vw',
    height: '140vw',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      width: '76vw',
      height: '150vw',
      display: 'block',
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
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      marginTop: '10px',
      fontSize: '22px',
      padding: '28px',
      lineHeight: '28px',
      display: 'none',
    },
  },
  special: {
    color: 'red',
  },
  view: {
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      height: 'auto',
    },
  },
}));

export default function Summary() {
  const classes = useStyles();
  const link = 'https://firebasestorage.googleapis.com/v0/b/congreso-algebra-sistdinamicos.appspot.com/o/Libro%20de%20resu%CC%81menes%20-%20I%20congreso%20AS.pdf?alt=media&token=2b46c468-d6a5-4b49-a5fe-28963d89bb3f';
  return (
    <div className={classes.view}>
      <Typography variant="h1" className={classes.typography}>
        Resúmenes
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h6" className={classes.text}>
        Acceda y descargue el libro de resúmenes aquí:
      </Typography>
      <Button
        variant="contained"
        color="primary"
        classes={{ root: classes.btn }}
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        Ver resúmenes
      </Button>
      <div className={classes.padding}>
        <iframe className={classes.pdf} src={link} title="Congreso de álgebra y sistemas dinámicos" />
      </div>
    </div>
  );
}
