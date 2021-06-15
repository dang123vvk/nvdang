import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Chip } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const socialNetworks = [{
  icon: <FacebookIcon />,
  link: 'https://facebook.com/dang123vvk'
},
{
  icon: <InstagramIcon />,
  link: 'https://instagram.com/dang.van.nguyen'
}, {
  icon: <GitHubIcon />,
  link: 'https://github.com/nvdang-dev'
}, {
  icon: <LinkedInIcon />,
  link: 'https://github.com/nvdang-dev'
}]
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    margin: 'auto',
    borderRadius: 20
  },
  inforBasic: {
    backgroundColor: '#F5F6F8',
    width: 300,
    borderRadius: 20,
  },
  gridBottom: {
    height: 450
  },
  inforBasicAvatar: {
    width: '100%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    width: 150,
    height: 150,
    marginTop: theme.spacing(3)
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  iconButton: {
    marginRight: theme.spacing(1),
    // marginLeft: theme.spacing(1),
  },
}));

export default function InformationCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} color='primary'>
        <Grid container >
          <Grid item className={classes.inforBasic} container>
            <Grid item xs={12} className={classes.inforBasicAvatar}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="/nvdang.png" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} className={classes.gridBottom} >
              <Typography gutterBottom variant="h4" style={{ color: '#13374A' }} className='d-flex justify-content-center'>
                Dang&nbsp;<b>Nguyen</b>
              </Typography>
              <div className='d-flex justify-content-center'>
              <Chip label="Frontend Developer" style={{ backgroundColor: '#E6EBEC', color: '#757F87' }}  />
              </div>
              <div className='d-flex justify-content-center mt-2'>
              {socialNetworks.map((data, index) => (
              <IconButton   key={index} aria-label="upload picture" component="span" className={classes.iconButton}>
                {data.icon}
              </IconButton>
            ))}
              </div>
              <div className='mt-3'>
                <Typography gutterBottom variant="body1" style={{ color: '#13374A', marginLeft: 25 }}>
                <CalendarTodayIcon />&nbsp; September 12, 1997
              </Typography>
              </div>
              <div className='mt-2'>
                <Typography gutterBottom variant="body1" style={{ color: '#13374A', marginLeft: 25 }} >
                <LocationOnIcon />&nbsp; Ho Chi Minh, Vietnam
              </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs={12} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h2">
                  About Me
                </Typography>
                <Typography variant="body2" gutterBottom>

                </Typography>
                <Typography variant="body2" color="textSecondary">

                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>

                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
