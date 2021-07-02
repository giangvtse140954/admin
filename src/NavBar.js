import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import People from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));
const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    history.push('/login');
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={classes.appBar}
        // style={{ backgroundColor: '#333' }}
      >
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Quản lý hệ thống
          </Typography>
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  to='/garage-profile'
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  Tài khoản
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <Link to='/garage-list' className={classes.link}>
            <ListItem
              button
              key='product-management'
              selected={selectedIndex === 0}
              onClick={() => {
                setSelectedIndex(0);
              }}
            >
              <ListItemIcon>
                <TurnedInIcon />
              </ListItemIcon>
              <ListItemText primary='Danh sách cửa hàng' />
            </ListItem>
          </Link>
          <Link to='/low-rating' className={classes.link}>
            <ListItem
              button
              key='Service-management'
              selected={selectedIndex === 1}
              onClick={() => {
                setSelectedIndex(1);
              }}
            >
              <ListItemIcon>
                <ThumbDownIcon />
              </ListItemIcon>
              <ListItemText primary='Đánh giá thấp' />
            </ListItem>
          </Link>
          <Link to='/spam-user' className={classes.link}>
            <ListItem
              button
              key='Fixer Management'
              selected={selectedIndex === 2}
              onClick={() => {
                setSelectedIndex(2);
              }}
            >
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary='Báo cáo xấu' />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
