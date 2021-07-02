import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    // right: 0,
  },
  mt: {
    marginTop: 30,
  },
  img: {
    height: '100%',
    position: 'absolute',
    right: 0,
  },
  item: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 25%)',
  },
});
const Login = () => {
  const classes = useStyles();
  const login = () => {};
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={6} style={{ position: 'relative' }}>
          <Paper
            className={classes.item}
            style={{
              width: '500px',
              height: '500px',
              padding: '50px',
            }}
            elevation={3}
          >
            <Grid
              container
              spacing={1}
              alignItems='flex-end'
              justify='center'
              style={{ marginBottom: '30px' }}
            >
              <Grid item>
                <Typography variant='h3' component='h2' className={classes.mt}>
                  Đăng nhập
                </Typography>
                <Typography variant='p' component='p' color='textSecondary'>
                  Đăng nhập để quản lý tiệm xe
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              alignItems='flex-end'
              justify='center'
              style={{ marginBottom: '20px' }}
            >
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  id='input-with-icon-grid'
                  label='Số điện thoại'
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems='flex-end' justify='center'>
              <Grid item>
                <LockIcon />
              </Grid>
              <Grid item>
                <TextField
                  id='input-with-icon-grid'
                  label='Mật khẩu'
                  required
                  type='password'
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              alignItems='flex-end'
              justify='center'
              style={{
                marginTop: '10px',
              }}
            >
              <Grid item>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                  }}
                  to='/ForgetPassword'
                >
                  Quên mật khẩu?
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems='flex-end' justify='center'>
              <Grid item>
                <Button
                  variant='contained'
                  style={{ backgroundColor: '#333' }}
                  onClick={login}
                  className={classes.mt}
                >
                  <Link
                    style={{ textDecoration: 'none', color: '#fff' }}
                    to='/Dashboard'
                  >
                    Đăng nhập
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <img
            className={classes.img}
            src='https://image.freepik.com/free-vector/handyman-cartoon-mascot-carrying-wrench-showing-thumb-up_12402-62.jpg'
            alt=''
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
