import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    marginBottom: 50,
    marginTop: 10,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Comment() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar
            alt='Remy Sharp'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopuYK4IALyeKuX44nnMoHE9bgvYxx9hYaPw&usqp=CAU'
          />
        </ListItemAvatar>
        <ListItemText
          primary='Hương Tràm'
          secondary={
            <React.Fragment>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                Rất không hài lòng
              </Typography>
              {' — Dịch vụ quá tệ, nhân viên làm việc chậm chạp...'}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction className={classes.status}>
          <Rating
            name='disabled'
            value={1}
            disabled
            style={{ marginRight: 200 }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar
            alt='Travis Howard'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxphwIp9B2bzc87Tjg0mGafgi4Ytrr0fXZgyk9nWB6pC86E2xvMpFPJBJDRua3P2axeyICit9CvM&usqp=CAU'
          />
        </ListItemAvatar>
        <ListItemText
          primary='Võ Giang'
          secondary={
            <React.Fragment>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                Không thể chấp nhận
              </Typography>
              {' — Thay ruột xe với giá cao nhưng chất lượng thì...'}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction className={classes.status}>
          <Rating
            name='disabled'
            value={1}
            disabled
            style={{ marginRight: 200 }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar
            alt='Cindy Baker'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZbrG1JpdsPp8MdfuReL3Ka_QnH7WGG5ITbIi0Qg8Iqm2js4GpZwPSZg5n9Vee60Fm2pp3kKEMPv0&usqp=CAU'
          />
        </ListItemAvatar>
        <ListItemText
          primary='Sơn Hùng'
          secondary={
            <React.Fragment>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                Tệ
              </Typography>
              {' — Bán hàng với giá trên trời, thay đồ cũ cho khách...'}
            </React.Fragment>
          }
        />

        <ListItemSecondaryAction className={classes.status}>
          <Rating
            name='disabled'
            value={1}
            disabled
            style={{ marginRight: 200 }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
