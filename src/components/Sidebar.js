import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { useHistory } from "react-router-dom";

import ListIcon from '@material-ui/icons/List';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  let history = useHistory();
  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
                QUẢN LÝ HỒ SƠ EC TEAM
          </Typography>
          {/* <Button color="inherit"   onClick={() => dispatch(logout())}>Log out</Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <List >
        <ListItem button onClick={()=>history.push("/dasboard")}>
          <ListItemIcon>
       <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary="Dasboard" />
        </ListItem>
        <ListItem button onClick={()=>history.push("/export")}>
          <ListItemIcon>
       <ListIcon/>
          </ListItemIcon>
          <ListItemText primary="Export List" />
        </ListItem>
        
        <ListItem button  onClick={()=>history.push("/user")}>
          <ListItemIcon>
            <PersonIcon/>
          </ListItemIcon>
          <ListItemText primary="Thành viên" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonAddIcon/>
          </ListItemIcon>
          <ListItemText primary="Thêm thành viên" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EqualizerIcon/>
          </ListItemIcon>
          <ListItemText primary="Biểu đồ" />
        </ListItem>
        <ListItem button onClick={()=>history.push("/department")}>
          <ListItemIcon>
            <ApartmentIcon/>
          </ListItemIcon>
          <ListItemText primary="Đơn vị" />
        </ListItem>
      </List>
        <Divider />
       
        <IconButton onClick={() => dispatch(logout())}>
            <AccountCircle /> Log out
          </IconButton>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
        <Typography paragraph>
  
        </Typography>
      </main>
    </div>
  );
}
