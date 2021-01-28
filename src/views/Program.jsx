/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Tabs from '../components/Tabs';
import program from '../json/program.json';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    width: '100%',
  },
  name: {
    margin: '0px',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#E38E0F',
    [theme.breakpoints.up('sm')]: {
      fontSize: '22px',
    },
  },
  hour: {
    width: '100px',
    lineHeight: '0px',
    fontSize: '14px',
    color: 'black',
    [theme.breakpoints.up('sm')]: {
      width: '130px',
      lineHeight: '15px',
      fontSize: '19px',
    },
  },
  tabPanel: {
    background: 'red',
  },
  description: {
    width: `calc(100% - ${100}px)`,
    lineHeight: '13px',
    fontSize: '14px',
    fontWeight: '400',
    fontStyle: 'italic',
    [theme.breakpoints.up('sm')]: {
      marginTop: '6px',
      lineHeight: '15px',
      marginLeft: '10px',
      fontSize: '18px',
    },
  },
  normal: {
    fontStyle: 'normal',
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
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          {children.program_day.map((child) => (
            <div style={{ marginBottom: '15px' }}>
              <h1 className={classes.name}>{child.name}</h1>
              {child.program.map((progr) => (
                <div className={classes.flex}>
                  <h4 className={classes.hour}>
                    {progr.hour}
                    :
                  </h4>
                  <div className={classes.description}>
                    <p className={progr.description === 'Inauguración y presentación' || progr.description === 'Clausura' ? classes.normal : ''}>
                      {progr.description}
                    </p>
                    {progr.speaker ? (
                      <p className={classes.normal}>
                        {progr.speaker}
                        {', '}
                        {progr.university}
                        {' - '}
                        {progr.country}
                      </p>
                    ) : ''}
                  </div>
                </div>
              ))}
            </div>
          ))}
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

export default function Program() {
  const [value, setValue] = React.useState(0);
  function changeValue(val) {
    setValue(val);
  }
  const title = program.map((e) => e.day);
  return (
    <div>
      <Tabs title={title} changeValue={changeValue} />
      {program.map((children, i) => (
        <TabPanel value={value} index={i}>
          {children}
        </TabPanel>
      ))}
    </div>
  );
}
