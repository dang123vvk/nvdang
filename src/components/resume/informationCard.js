import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Chip, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import GetAppIcon from '@material-ui/icons/GetApp';

const socialNetworks = [{
  icon: <FacebookIcon  style={{color: '#656667'}}/>,
  link: 'https://facebook.com/dang123vvk'
},
{
  icon: <InstagramIcon style={{color: '#656667'}} />,
  link: 'https://instagram.com/dang.van.nguyen'
}, {
  icon: <GitHubIcon  style={{color: '#656667'}} />,
  link: 'https://github.com/nvdang-dev'
}, {
  icon: <LinkedInIcon  style={{color: '#656667'}} />,
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
    height: 400
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
  button: {
    marginRight: theme.spacing(1),
    // marginLeft: theme.spacing(1),
    borderRadius: 15,
    backgroundColor: '#2C4AF5',
    color: '#ffffff',
    textTransform: 'none', 
    height: 45,
    "&:hover": {
      backgroundColor: "#1097DE",
    },
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
                <Chip label="Frontend Developer" style={{ backgroundColor: '#E6EBEC', color: '#15303F' }} />
              </div>
              <div className='d-flex justify-content-center mt-2'>
                {socialNetworks.map((data, index) => (
                  <IconButton key={index} aria-label="upload picture" component="span" className={classes.iconButton}>
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
              <div className='mt-2'>
                <Typography gutterBottom variant="body1" style={{ color: '#13374A', marginLeft: 25 }} >
                  <EmailIcon />&nbsp; dang123vvk@gmail.com
                </Typography>
              </div>
              <div className='mt-2'>
                <Typography gutterBottom variant="body1" style={{ color: '#13374A', marginLeft: 25 }} >
                  <PhoneIphoneIcon />&nbsp; (+84) 398 577 544
                </Typography>
              </div>
              <div className='d-flex justify-content-center mt-4'>
                <Button
                  variant="contained"
                  className={classes.button}
                  startIcon={<GetAppIcon />}
                >
                  Download CV
                </Button>
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
