import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
}));
const AccountForm = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.handleClose();
    props.handleDelete();
  };
  const handleCloseNotDel = () => {
    props.handleClose();
  };

  return (
    <div className={classes.root}>
      <TextField
        id='outlined-basic'
        label={props.reason}
        required
        variant='outlined'
        placeholder='Vì hủy chuyến quá nhiều'
        InputLabelProps={{
          shrink: true,
        }}
      />
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
          Xác nhận
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={handleCloseNotDel}
        >
          Hủy bỏ
        </Button>
      </div>
    </div>
  );
};

export default AccountForm;
