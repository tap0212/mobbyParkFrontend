import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import PinDropTwoToneIcon from '@material-ui/icons/PinDropTwoTone';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import '../../../node_modules/react-responsive-modal/styles.css';

import {isAuthenticated, Logout} from '../../APICalls/auth'
import {Link, Redirect} from 'react-router-dom'
const drawerWidth = 240;




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [redirect, setRedirect] = React.useState(false)



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    Logout(() => {
      setRedirect(true)
    })
  }

  const handleRedirect = () => {
    if(redirect){
      return (
        <Redirect to="/" />
      )
    }
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Operator Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <Link to="dashboard" >
              <ListItem button>
                <ListItemIcon><DashboardTwoToneIcon /></ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>
            </Link>

            <Link to="parking" >
              <ListItem button>
                <ListItemIcon><PinDropTwoToneIcon /></ListItemIcon>
                <ListItemText>Parking Area</ListItemText>
              </ListItem>
            </Link>

          <Link to="/schedule" >
          <ListItem button>
              <ListItemIcon><CalendarTodayTwoToneIcon /></ListItemIcon>
              <ListItemText>Schedule</ListItemText>
            </ListItem>
          </Link>

            <Link to="">
              <ListItem button>
                <ListItemIcon><AccountBalanceWalletTwoToneIcon /></ListItemIcon>
                <ListItemText>Payments</ListItemText>
              </ListItem>
            </Link>

           <Link to="employee">
           <ListItem button>
                <ListItemIcon><AddCircleTwoToneIcon /></ListItemIcon>
                <ListItemText>Employees</ListItemText>
              </ListItem>
           </Link>


          {
             isAuthenticated() && 
            <ListItem button onClick={handleLogout}>
              <ListItemIcon><ExitToAppTwoToneIcon /></ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          }
        </List>
          {handleRedirect()}
      </Drawer>
     




    </div>
  );
}