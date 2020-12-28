/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
// UI
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Link, withRouter, Route, Switch,
} from 'react-router-dom';
import pages from '../routes/index';
import escudoUNMSM from '../assets/escudo.svg';
import cone from '../assets/cone.svg';
// eslint-disable-next-line import/no-unresolved
import './NavBar.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    height: '70px',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      height: '140px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  divider: {
    // Theme Color, or use css color in quote
    height: '5px',
    background: '#FFAA05',
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    height: '100px',
    [theme.breakpoints.up('sm')]: {
      height: '140px',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#071725',
  },
  list: {
    fontFamily: 'Bebas Neue',
    fontSize: '40px',
    paddingLeft: '15px',
  },
  typography: {
    paddingTop: '50px',
    width: '75%',
    fontFamily: 'Bebas Neue',
    fontSize: '20px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px',
      paddingTop: '5px',
    },
  },
  img: {
    width: '70px',
    [theme.breakpoints.up('sm')]: {
      width: '140px',
    },
  },
  escudo: {
    width: '55px',
    [theme.breakpoints.up('sm')]: {
      width: '95px',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const NavigationBar = (prop) => {
  const { window } = prop;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const styleToolbar = {
    background: '#03315C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} style={styleToolbar}>
        <img src={escudoUNMSM} alt="escudo" className={classes.escudo} />
      </div>
      <div className={classes.toolbar} />
      <Divider classes={{ root: classes.divider }} />
      <List>
        {pages.map((page) => (
          <Link to={page.path} style={{ textDecoration: 'none', color: 'white' }}>
            <ListItem button key={page.sidebarName}>
              <Typography variant="h1" className={classes.list}>
                { page.sidebarName }
              </Typography>
              {/* <ListItemText primary={page.sidebarName} /> */}
            </ListItem>
            <Divider classes={{ root: classes.divider }} />
          </Link>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={styleToolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className="toolbar">
            <Typography variant="h1" className={classes.typography}>
              I CONGRESO INTERNACIONAL DE ÁLGEBRA Y SISTEMAS DINÁMICOS
            </Typography>
            <img src={cone} alt="escudex" className={classes.img} />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Divider classes={{ root: classes.divider }} />
        <Switch>
          {pages.map((page) => (
            <Route exact path={page.path} key={page.path}>
              <page.component />
            </Route>
          ))}
        </Switch>
      </main>
    </div>
  );
};
NavigationBar.propTypes = {
  window: PropTypes.func,
};

export default withRouter(NavigationBar);
