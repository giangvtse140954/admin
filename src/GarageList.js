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
import { useHistory } from 'react-router-dom';
import BanForm from './BanForm';

const columns = [
  { field: 'id', headerName: 'No.', width: 100 },
  { field: 'fullname', headerName: 'Tên cửa hàng', width: 400, editable: true },
  { field: 'email', headerName: 'Email', width: 215, editable: true },
  {
    field: 'birthdate',
    headerName: 'Ngày tạo',
    type: 'date',
    width: 140,
    editable: true,
  },
  { field: 'phone', headerName: 'Số điện thoại', width: 165, editable: true },
  {
    field: 'rating',
    headerName: 'Rating trung bình',
    width: 190,
    editable: true,
  },
];

const rows = [
  {
    id: '1',
    fullname: 'Tiệm sửa xe Thiên Đường',
    email: 'vuthugiang2610@gmail.com',
    birthdate: '6/1/2020',
    phone: '0988.246.000',
    rating: '★★★✰✰',
  },
  {
    id: '2',
    fullname: 'Tiệm sửa xe 3MP',
    email: 'nhantran@gmail.com',
    birthdate: '9/1/2020',
    phone: '0988.246.910',
    rating: '★★★★✰',
  },
  {
    id: '3',
    fullname: 'Sửa xe Thạch Lam',
    email: 'baohoangpham@gmail.com',
    birthdate: '6/1/2020',
    phone: '0988.246.920',
    rating: '★★★★✰',
  },
  {
    id: '4',
    fullname: 'Sửa xe chất lượng cao Vĩnh Ký',
    email: 'hungnguyen@gmail.com',
    birthdate: '6/1/2021',
    phone: '0988.246.930',
    rating: '★★★★✰',
  },
  {
    id: '5',
    fullname: 'Sửa xe nhanh chóng Đạt Lợi',
    email: 'tunhm@gmail.com',
    birthdate: null,
    phone: '0988.246.904',
    rating: '★★✰✰✰',
  },
  {
    id: '6',
    fullname: 'Gara Spaxe',
    email: 'vycnn@gmail.com',
    birthdate: '6/1/2002',
    phone: '0988.246.950',
    rating: '★✰✰✰✰',
  },
  {
    id: '7',
    fullname: 'Xe An Toàn',
    email: 'ongjohnvelog@gmail.com',
    birthdate: '6/1/2020',
    phone: '0988.246.960',
    rating: '★★★★✰',
  },
  {
    id: '8',
    fullname: 'Tiệm xe 24/7',
    email: 'daothienphuc@gmail.com',
    birthdate: '6/1/2001',
    phone: '0988.246.970',
    rating: '★★★★✰',
  },
  {
    id: '9',
    fullname: 'Gara Hoàn Hảo',
    email: 'thaovu@gmail.com',
    birthdate: '6/4/2020',
    phone: '0988.246.870',
    rating: '★★✰✰✰',
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
const GarageList = () => {
  const classes = useStyles();
  const [acc, setAcc] = useState(rows);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  let history = useHistory();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleIsOpen = () => {
    setIsOpen(true);
  };
  const handleIsClosed = () => {
    setIsOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onHandleClick = (e) => {
    history.push('/garage-detail');
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
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <h1
              id='transition-modal-title'
              style={{ lineHeight: '80px', textAlign: 'center' }}
            >
              Thêm cửa hàng mới
            </h1>
            <BanForm handleClose={handleIsClosed} />
          </div>
        </Fade>
      </Modal>
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
              Lý do ban tài khoản
            </h1>
            <AccountForm
              handleClose={handleClose}
              handleDelete={handleDelete}
            />
          </div>
        </Fade>
      </Modal>
      <Typography variant='h4' align='center' style={{ marginTop: 100 }}>
        Quản lý cửa hàng
      </Typography>
      <div className={classes.searchBox}>
        <SearchBox content='Tìm cửa hàng theo tên' />
        <div className={classes.rightPart}>
          <Button
            variant='contained'
            color='primary'
            style={{ marginRight: 10 }}
            onClick={handleIsOpen}
          >
            Thêm cửa hàng
          </Button>
          <Button variant='contained' color='secondary' onClick={handleOpen}>
            Ban cửa hàng
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
export default GarageList;
