import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RoomIcon from '@material-ui/icons/Room';
import Rating from '@material-ui/lab/Rating';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('CB000', 'Bình GS GT5A 12V-5Ah', 'Thay bình xe', '360.000', 'VNĐ'),
  createData('CB001', 'Bình GS GTZ6V', 'Thay bình xe', '460.000', 'VNĐ'),
  createData('CB002', 'Bình GS GTZ6V', 'Thay bình xe', '460.000', 'VNĐ'),
  createData('RB000', 'Phanh xe trợ lực', 'Thay phanh xe', '110.000', 'VNĐ'),
  createData('RB001', 'Phanh xe cân bằng', 'Thay phanh xe', '220.000', 'VNĐ'),
  createData('TT001', 'Lốp xe Valve extra', 'Thay lốp xe', '160.000', 'VNĐ'),
  createData('TT002', 'Lốp xe Vancouver', 'Thay lốp xe', '200.000', 'VNĐ'),
  createData('WI000', 'Bánh xe 10CMS', 'Thay bánh xe', '300.000', 'VNĐ'),
  createData(
    'WI001',
    'Cặp bánh trước xe Mercedes 21 inch',
    'Thay bánh xe',
    '16.300.000',
    'VNĐ'
  ),
];
const useStyles = makeStyles((theme) => ({
  root: {
    width: '99%',
  },
  card: {
    marginTop: 50,
    padding: 20,
    display: 'flex',
  },
  card__img: {
    borderRadius: 5,
    width: '100%',
  },
  card__left: {
    marginRight: 50,
    width: 400,
  },
  card__right: {
    width: '100%',
  },
  table: {
    minWidth: 700,
  },
  outer: {
    paddingBottom: 80,
    paddingTop: 20,
  },
}));
const GarageDetail = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h4' align='center' style={{ marginTop: 100 }}>
        Chi tiết Cửa hàng
      </Typography>
      <Paper elevation={3} className={classes.card}>
        <div className={classes.card__left}>
          <img
            src='https://toplist.vn/images/800px/3mp-he-thong-sua-xe-may-chuyen-nghiep-375236.jpg'
            alt=''
            className={classes.card__img}
          />
        </div>
        <div className={classes.card__right}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#f8f8f8',
              padding: '10px',
              borderRadius: '10px',
            }}
          >
            <Typography variant='h5'>Sửa xe 3MP</Typography>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <RoomIcon />
              <Typography variant='p'>
                24 Võ Văn Lượng, Phường 11, Gò Vấp, TPHCM
              </Typography>
            </div>
          </div>
          <div>
            <br />
            Ngày hoạt động: 23/08/2016
            <br />
            <br />
            Đánh giá trung bình: <Rating name='disabled' value={1} disabled />
            <br />
            <br />
            Số điện thoại: 0988.123.321
            <br />
            <br />
            Hỗ trợ sửa xe: Xe đạp, xe máy, xe ô tô
            <br />
            <br />
            Hỗ trợ kéo xe về: Có
            <br />
            <br />
            Giờ mở cửa: 6:00 AM - 9:30 PM
          </div>
        </div>
      </Paper>
      <Typography variant='h4' align='center' style={{ marginTop: 50 }}>
        Dịch vụ và đơn giá
      </Typography>
      <div>
        <div className={classes.outer}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Mã hàng</StyledTableCell>
                  <StyledTableCell align='center'>Tên sản phẩm</StyledTableCell>
                  <StyledTableCell align='center'>Tên dịch vụ</StyledTableCell>
                  <StyledTableCell align='center'>Giá bán</StyledTableCell>
                  <StyledTableCell align='center'>Đơn vị</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component='th' scope='row'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align='center'>{row.fat}</StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.carbs}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default GarageDetail;
