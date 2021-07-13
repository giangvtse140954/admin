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

const columns = [
  { field: 'id', headerName: 'No.', width: 100 },
  { field: 'fullname', headerName: 'Tên cửa hàng', width: 220, editable: true },
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
  {
    field: 'addr',
    headerName: 'Địa chỉ',
    width: 400,
    editable: true,
  },
];

const rows = [
  {
    id: '1',
    fullname: 'Tiệm sửa xe Thiên Hương',
    email: 'vuthugiang2610@gmail.com',
    birthdate: '6/1/2020',
    phone: '0988.246.000',
    rating: '★★✰✰✰',
    addr: '24 Trần Thời, Phường 11, Gò Vấp, TPHCM',
  },
  {
    id: '2',
    fullname: 'Tiệm sửa xe 3MP',
    email: 'nhantran@gmail.com',
    birthdate: '9/1/2020',
    phone: '0988.246.910',
    rating: '★★✰✰✰',
    addr: '24 Võ Văn Lượng, Phường 11, Gò Vấp, TPHCM',
  },
  {
    id: '3',
    fullname: 'Sửa xe chất lượng cao Vĩnh Tín',
    email: 'baohoangpham@gmail.com',
    birthdate: '6/1/2020',
    phone: '0988.246.920',
    rating: '★✰✰✰✰',
    addr: '100 Nguyễn Văn Lượng, Phường 11, Gò Vấp, TPHCM',
  },
  {
    id: '4',
    fullname: 'Sửa xe 24h',
    email: 'hungnguyen@gmail.com',
    birthdate: '6/1/2021',
    phone: '0988.246.930',
    rating: '★✰✰✰✰',
    addr: '104 Nguyễn Thế Khai, Phường 11, Gò Vấp, TPHCM',
  },
  {
    id: '5',
    fullname: 'Gara Thanh Hiền',
    email: 'tunhm@gmail.com',
    birthdate: '6/12/2019',
    phone: '0988.246.904',
    rating: '★★✰✰✰',
    addr: '102 Nguyễn Kiệm, Phường 11, Gò Vấp, TPHCM',
  },
  {
    id: '6',
    fullname: 'Gara Spaxe',
    email: 'vycnn@gmail.com',
    birthdate: '6/1/2021',
    phone: '0988.246.950',
    rating: '★✰✰✰✰',
    addr: '1 Lê Lợi, Phường 11, Quận 1, TPHCM',
  },
  {
    id: '7',
    fullname: 'Xe An Toàn',
    email: 'ongjohnvelog@gmail.com',
    birthdate: '6/1/2020',
    phone: '0988.246.960',
    rating: '★✰✰✰✰',
    addr: '2 Nguyễn Kiện, Quận 3, TPHCM',
  },
  {
    id: '8',
    fullname: 'Tiệm xe 24/7',
    email: 'daothienphuc@gmail.com',
    birthdate: '6/1/2021',
    phone: '0988.246.970',
    rating: '★✰✰✰✰',
    addr: '109 Nguyễn Bỉnh Khiêm, Phường 11, Gò Vấp, TPHCM',
  },
  {
    id: '9',
    fullname: 'Gara Hoàn Hảo',
    email: 'thaovu@gmail.com',
    birthdate: '6/4/2020',
    phone: '0988.246.870',
    rating: '★★✰✰✰',
    addr: '09 Trần Tiến, Phường 11, Gò Vấp, TPHCM',
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
const LowRating = () => {
  const classes = useStyles();
  const [acc, setAcc] = useState(rows);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
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
              Lý do ban cửa hàng
            </h1>
            <AccountForm
              handleClose={handleClose}
              handleDelete={handleDelete}
              reason='Lý do ban cửa hàng'
            />
          </div>
        </Fade>
      </Modal>
      <Typography variant='h4' align='center' style={{ marginTop: 100 }}>
        Danh sách cửa hàng bị đánh giá thấp
      </Typography>
      <div className={classes.searchBox}>
        <SearchBox
          content='Tìm cửa hàng theo tên'
          onInput={(value) => {
            const flag = [...rows];
            let result = [];
            result = flag.filter((item) => {
              if (item.fullname.toLowerCase().includes(value.toLowerCase())) {
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
export default LowRating;
