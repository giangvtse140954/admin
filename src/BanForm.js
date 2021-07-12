import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const BanForm = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.handleClose();
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title='Nhập thông tin cửa hàng'
          style={{ marginLeft: '10px' }}
          // subheader='Tạo tài khoản'
        />
        <CardContent style={{ textAlign: 'center' }}>
          <form className={classes.form} noValidate autoComplete='off'>
            <TextField
              id='outlined-basic'
              label='Số điện thoại'
              required
              variant='outlined'
              placeholder='0123456789'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-basic'
              label='Mật khẩu'
              variant='outlined'
              required
              type='password'
              placeholder='******'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-basic'
              label='Tên cửa hàng'
              variant='outlined'
              required
              placeholder='Juli Baker'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-basic'
              label='Email'
              required
              variant='outlined'
              placeholder='example@yeah.ok'
              type='email'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </CardContent>
      </Card>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant='contained'
          color='primary'
          style={{ marginRight: 10 }}
          onClick={handleClose}
        >
          Thêm
        </Button>
        <Button variant='contained' color='secondary' onClick={handleClose}>
          Hủy bỏ
        </Button>
      </div>
    </div>
  );
};

export default BanForm;
