/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Tabs from '../components/Tabs';

const useStyles = makeStyles((theme) => ({
  list: {
    marginLeft: '0px',
    fontFamily: 'Barlow',
    fontSize: '20px',
    textTransform: 'capitalize',
    fontStyle: 'normal',
    fontWeight: '1000',
    letterSpacing: '0em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
    },
  },
}));
function TabPanel(prop) {
  const classes = useStyles();
  const {
    children, value, index, ...other
  } = prop;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <ul style={{ margin: '0px' }}>
            {
            children.map((child) => (
              <div style={{ marginTop: '15px' }}>
                <li className={classes.list}>
                  {child.name}
                </li>
                <Typography>{child.country}</Typography>
                <Typography>{child.university}</Typography>
              </div>
            ))
          }
          </ul>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Lecturers() {
  const [value, setValue] = React.useState(0);
  function changeValue(val) {
    setValue(val);
  }
  const title = ['Internacionales', 'Nacionales'];
  const internationals = [
    {
      name: 'Arkadiusz Płoski',
      country: 'Polonia',
      university: 'Kielce University of Technology',
    },

    {
      name: 'Arturo Fernández',
      country: 'Brasil',
      university: 'Universidade Federal de Minas Gerais',
    },
    {
      name: 'Bruno Azevedo',
      country: 'Brasil',
      university: 'Universidade Federal do Rio de Janeiro',
    },
    {
      name: 'Begoña Alarcón',
      country: 'Brasil',
      university: 'Universidade Federal Fluminense',
    },

    {
      name: 'David Fernández',
      country: 'Alemania',
      university: 'Universidad de Bielefeld',
    },

    {
      name: 'Evelia García',
      country: 'España',
      university: 'Universidad de La Laguna',
    },

    {
      name: 'Ignacio García',
      country: 'España',
      university: 'Universidad de La Laguna',
    },

    {
      name: 'Irene Márquez',
      country: 'España',
      university: 'Universidad de La Laguna',
    },

    {
      name: 'Liliana Jurado',
      country: 'Brasil',
      university: 'Universidade Federal Oeste da Bahia',
    },
    {
      name: 'Marcelo Escudeiro',
      country: 'Brasil',
      university: 'Universidade Estadual de Maringá',
    },

    {
      name: 'Napoleón Caro',
      country: 'Brasil',
      university: 'Universidade Federal de Paraiba',
    },

    {
      name: 'Pedro Hernández',
      country: 'Colombia',
      university: 'Universidad de Antioquía',
    },
  ];
  const nationals = [
    {
      name: 'Benito Ostos',
      country: 'Perú',
      university: 'Universidad Nacional de Ingeniería',
    },

    {
      name: 'Gabriel Muñoz',
      country: 'Perú',
      university: 'Universidad Nacional Mayor de San Marcos',
    },

    {
      name: 'Hernán Neciosup',
      country: 'Perú',
      university: 'Pontificia Universidad Católica del Perú',
    },

    {
      name: 'Joe Palacios',
      country: 'Perú',
      university: 'Universidad Nacional de Ingeniería',
    },

    {
      name: 'Jorge Crisóstomo',
      country: 'Perú',
      university: 'Universidad Nacional Mayor de San Marcos',
    },

    {
      name: 'Fernando Hernández',
      country: 'Perú',
      university: 'Universidad Nacional Mayor de San Marcos',
    },

    {
      name: 'Nancy Saravia',
      country: 'Perú',
      university: 'Pontificia Universidad Católica del Perú',
    },

    {
      name: 'Percy Fernández',
      country: 'Perú',
      university: 'Pontificia Universidad Católica del Perú',
    },

    {
      name: 'Renato Benazic',
      country: 'Perú',
      university: 'Universidad Nacional Mayor de San Marcos',
    },

    {
      name: 'Roland Rabanal',
      country: 'Perú',
      university: 'Pontificia Universidad Católica del Perú',
    },

    {
      name: 'Rudy Rosas',
      country: 'Perú',
      university: 'Pontificia Universidad Católica del Perú',
    },

  ];
  const content = [internationals, nationals];
  return (
    <div>
      <Tabs title={title} changeValue={changeValue} />
      {content.map((children, i) => (
        <TabPanel value={value} index={i}>
          {children}
        </TabPanel>
      ))}
    </div>
  );
}
