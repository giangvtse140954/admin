import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { makeStyles } from '@material-ui/core';
import GarageList from './GarageList';
import NavBar from './NavBar';
import Login from './Login';
import LowRating from './LowRating';
import SpamUser from './SpamUser';
import GarageDetail from './GarageDetail';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    marginTop: 75,
  },
}));
function App() {
  const classes = useStyles();

  return (
    <Switch>
      <Route path='/login' component={Login} />
      <>
        <NavBar />
        <main className={classes.content}>
          <PrivateRoute exact path='/' component={GarageList}></PrivateRoute>
          <PrivateRoute
            exact
            path='/garage-list'
            component={GarageList}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/low-rating'
            component={LowRating}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/spam-user'
            component={SpamUser}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path='/garage-detail'
            component={GarageDetail}
          ></PrivateRoute>
        </main>
      </>
    </Switch>
  );
}

export default App;
