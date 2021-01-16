import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  toolbar: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    textTransform: 'capitalize',
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: '0em',
    background: 'rgb(255, 170, 5, 0.4)',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    padding: '7px',
    margin: '0px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
      marginRight: '5px',
    },
  },
  withoutColor: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    textTransform: 'capitalize',
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: '0em',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    boxSizing: 'borderBox',
    padding: '7px',
    margin: '0px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
      marginRight: '5px',
    },
  },
  divider: {
    height: '5px',
    background: '#FFAA05',
  },
}));

export default function SimpleTabs(prop) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {
    title, changeValue,
  } = prop;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Tab"
        indicatorColor="#FFAA05"
        variant="scrollable"
        scrollButtons="auto"
      >
        {title.map((t, i) => (
          <Tab
            className={value === i ? classes.toolbar : classes.withoutColor}
            label={t}
            {...{
              id: `scrollable-auto-tab-${i}`,
              'aria-controls': `scrollable-auto-tabpanel-${i}`,
            }}
          />
        ))}
      </Tabs>
      <Divider classes={{ root: classes.divider }} />
    </div>
  );
}
