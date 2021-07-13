import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import SearchBox from './SearchBox';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AccountForm from './AccountForm';

const columns = [
  { field: 'id', headerName: 'Số điện thoại', width: 165 },
  { field: 'fullname', headerName: 'Họ và tên', width: 170, editable: true },
  { field: 'email', headerName: 'Email', width: 215, editable: true },
  {
    field: 'birthdate',
    headerName: 'Ngày sinh',
    type: 'date',
    width: 140,
    editable: true,
  },
  { field: 'gender', headerName: 'Giới tính', width: 135, editable: true },
  {
    field: 'reason',
    headerName: 'Lý do vào danh sách báo cáo xấu',
    width: 410,
    editable: true,
  },
];

const rows = [
  {
    id: '0988246809',
    fullname: 'Vu Thu Giang',
    email: 'vuthugiang2610@gmail.com',
    birthdate: '6/1/2000',
    gender: 'Nữ',
    reason: 'Hủy chuyến yêu cầu cứu hộ 6 lần',
  },
  {
    id: '0988246009',
    fullname: 'Tran Nhan',
    email: 'nhantran@gmail.com',
    birthdate: '9/1/2000',
    gender: 'Nam',
    reason: 'Hủy chuyến yêu cầu cứu hộ 3 lần',
  },
  {
    id: '0988246709',
    fullname: 'Pham Hoang Bao',
    email: 'baohoangpham@gmail.com',
    birthdate: '6/1/2000',
    gender: 'Nam',
    reason: 'Hủy chuyến yêu cầu cứu hộ 9 lần',
  },
  {
    id: '0988246209',
    fullname: 'Nguyen Van Hung',
    email: 'hungnguyen@gmail.com',
    birthdate: '6/1/2001',
    gender: 'Nam',
    reason: 'Hủy chuyến yêu cầu cứu hộ 1 lần',
  },
  {
    id: '0988246109',
    fullname: 'Nguyen H.Minh Tu',
    email: 'tunhm@gmail.com',
    birthdate: '20/11/2003',
    gender: 'Nữ',
    reason: 'Hủy chuyến yêu cầu cứu hộ 6 lần',
  },
  {
    id: '0988246309',
    fullname: 'Cao Ngoc Nhat Vy',
    email: 'vycnn@gmail.com',
    birthdate: '6/1/2002',
    gender: 'Nữ',
    reason: 'Hủy chuyến yêu cầu cứu hộ 2 lần',
  },
  {
    id: '0988246409',
    fullname: 'John Wick',
    email: 'ongjohnvelog@gmail.com',
    birthdate: '6/1/2000',
    gender: 'Khác',
    reason: 'Hủy chuyến yêu cầu cứu hộ 5 lần',
  },
  {
    id: '0988246509',
    fullname: 'Dao Thien Phuc',
    email: 'daothienphuc@gmail.com',
    birthdate: '6/1/2001',
    gender: 'Nam',
    reason: 'Hủy chuyến yêu cầu cứu hộ 8 lần',
  },
  {
    id: '0988246909',
    fullname: 'Vu Thu Thao',
    email: 'thaovu@gmail.com',
    birthdate: '6/4/2000',
    gender: 'Nữ',
    reason: 'Hủy chuyến yêu cầu cứu hộ 9 lần',
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    width: '99%',
    '& .super-app.busy': {
      color: '#ff0000',
      fontWeight: '600',
    },
    '& .super-app.available': {
      color: '#4caf50',
      fontWeight: '600',
    },
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 50,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const SpamUser = () => {
  const classes = useStyles();
  const [acc, setAcc] = useState(rows);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onHandleClick = (e) => {
    // console.log(e.row);
  };
  const handleDelete = () => {
    let flag = [...acc];
    for (let i = 0; i < selected.length; i++) {
      let j = 0;
      while (j < flag.length) {
        if (selected[i] === flag[j].id) {
          console.log(j);
          flag.splice(j, 1);
        } else {
          j = j + 1;
        }
      }
    }
    setAcc(flag);
  };
  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1
              id='transition-modal-title'
              style={{ lineHeight: '80px', textAlign: 'center' }}
            >
              Lý do ban người dùng
            </h1>
            <AccountForm
              handleClose={handleClose}
              handleDelete={handleDelete}
              reason='Lý do ban người dùng'
            />
          </div>
        </Fade>
      </Modal>
      <Typography variant='h4' align='center' style={{ marginTop: 100 }}>
        Danh sách người dùng xấu
      </Typography>
      <div className={classes.searchBox}>
        <SearchBox
          content='Tìm người dùng theo số điện thoại'
          onInput={(value) => {
            const flag = [...rows];
            let result = [];
            result = flag.filter((item) => {
              if (item.id.toLowerCase().includes(value.toLowerCase())) {
                return true;
              }
              return false;
            });
            setAcc(result);
          }}
        />
        <div className={classes.rightPart}>
          {/* <Button
            variant='contained'
            color='primary'
            style={{ marginRight: 10 }}
            onClick={handleOpen}
          >
            Thêm nhân viên
          </Button> */}
          <Button
            variant='contained'
            color='secondary'
            onClick={handleOpen}
            disabled={selected.length > 0 ? false : true}
          >
            Ban người dùng
          </Button>
        </div>
      </div>
      <DataGrid
        rows={acc}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onRowClick={onHandleClick}
        onSelectionModelChange={(newSelection) => {
          setSelected(newSelection.selectionModel);
        }}
      />
    </div>
  );
};
export default SpamUser;
