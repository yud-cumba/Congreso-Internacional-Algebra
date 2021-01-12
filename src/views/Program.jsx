/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Tabs from '../components/Tabs';

const useStyles = makeStyles((theme) => ({
  list: {
    marginLeft: '0px',
    fontFamily: 'Barlow',
    fontSize: '18px',
    textTransform: 'capitalize',
    fontStyle: 'normal',
    fontWeight: '1000',
    letterSpacing: '0em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '22px',
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
          <ul style={{ margin: '0px' }} className={classes.list}>
            {children}
            {/* {
            children.map((child) => (
              <div style={{ marginTop: '15px' }} className={classes.list}>
                {child}
              </div>
            ))
          } */}
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

export default function Program() {
  const [value, setValue] = React.useState(0);
  function changeValue(val) {
    setValue(val);
  }
  const title = ['Martes 23', 'Miércoles 24', 'Jueves 26', 'Viernes 27'];
  const content = ['tuesday', 'wednesday', 'thursday', 'friday'];
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
