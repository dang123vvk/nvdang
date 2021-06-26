import React from 'react';
import { Chip, Button, Paper, Typography, ButtonBase, Grid, makeStyles } from '@material-ui/core';
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
import ChipCustom from './chip'

const socialNetworks = [{
  icon: <FacebookIcon style={{ color: '#656667' }} />,
  link: 'https://facebook.com/dang123vvk'
},
{
  icon: <InstagramIcon style={{ color: '#656667' }} />,
  link: 'https://instagram.com/dang.van.nguyen'
}, {
  icon: <GitHubIcon style={{ color: '#656667' }} />,
  link: 'https://github.com/nvdang-dev'
}, {
  icon: <LinkedInIcon style={{ color: '#656667' }} />,
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
    zIndex: 2
  },
  gridBottom: {
    // height: 'auto'
  },
  inforBasicAvatar: {
    width: '100%',
    height: 200,
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
          <Grid item className={classes.inforBasic} container >
            <Grid item xs={12} className={classes.gridBottom} >
              <div className='d-flex justify-content-center'>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="/nvdang.png" />
                </ButtonBase>
              </div>
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
          <Grid item xs={12} sm container style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20, marginLeft: -20, paddingLeft: 40, paddingTop: 30 }} className='div-custom'>
            <Grid item xs={12} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4" style={{ color: '#13374A', fontWeight: 'bold' }}>
                  About Me
                </Typography>
                <Typography variant="body2" gutterBottom style={{ color: '#13374A' }}>
                  I am a Frontend Developer from Ho Chi Minh, Vietnam. I am so young (only 23 years old). I enjoy turning complex problems into simple.
                </Typography>
                <br />
                <Typography variant="body2" gutterBottom style={{ color: '#13374A' }}>
                  My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I like my job, I want to challenge myself with the impossible things. My aim is to bring across your idea to reality in the most creative way.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4" style={{ color: '#13374A', fontWeight: 'bold' }}>
                  Education
                </Typography>
                <Typography gutterBottom variant="h6" style={{ color: '#13374A', fontWeight: 'bold', fontSize: 15 }}>
                  Can Tho University
                </Typography>
                <Typography gutterBottom variant="body2" style={{ color: '#13374A' }}>
                  My major is Information Technology.
                </Typography>
                <Typography gutterBottom variant="body2" style={{ color: '#13374A' }}>
                  My GPA is 3.3
                </Typography>
                <Typography gutterBottom variant="body2" style={{ color: '#13374A' }}>
                  My thesis is building chatbot using GAN and Reinforcement learning for Data Vietnamese
                  Algorithms implemented in Python.
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="h4" style={{ color: '#13374A', fontWeight: 'bold' }}>
                  Skills
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography gutterBottom variant="h6" style={{ color: '#13374A', fontWeight: 'bold', fontSize: 15, marginRight: 30, width: 75 }}>
                      Programing
                    </Typography>
                    <ChipCustom label="JavaScript" />
                    <ChipCustom label="CSS" />
                    <ChipCustom label="HTML" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                    <Typography gutterBottom variant="h6" style={{ color: '#13374A', fontWeight: 'bold', fontSize: 15, marginRight: 30, width: 75 }}>
                      Framework
                    </Typography>
                    <ChipCustom label="ReactJS" />
                    <ChipCustom label="NextJS" />
                    <ChipCustom label="EmberJS" />
                    <ChipCustom label="ElectronJS" />
                    <ChipCustom label="ExpressJS" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                    <Typography gutterBottom variant="h6" style={{ color: '#13374A', fontWeight: 'bold', fontSize: 15, marginRight: 30, width: 75 }}>
                      Database
                    </Typography>
                    <ChipCustom label="SQL" />
                    <ChipCustom label="Mongo" />
                    <ChipCustom label="PostgreSQL" />
                  </div>
                </div>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="h4" style={{ color: '#13374A', fontWeight: 'bold' }}>
                  Experience
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <Typography gutterBottom variant="h6" style={{ color: '#13374A', fontWeight: 'bold', fontSize: 15, marginRight: 30 }}>
                        Parttime
                      </Typography>
                    </div>
                    <div>
                      <Typography gutterBottom variant="body2" style={{ color: '#13374A', marginRight: 30 }}>
                        May 2018 - Dec 2018
                      </Typography>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <Typography gutterBottom variant="h6" style={{ color: '#13374A', fontWeight: 'bold', fontSize: 15, marginRight: 30 }}>
                        Tracking and managing Asset Platform
                      </Typography>
                    </div>
                    <div>
                      <Typography gutterBottom variant="body2" style={{ color: '#13374A', marginRight: 30 }}>
                        Jul 2019 - Dec 2019
                      </Typography>
                    </div>

                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <Typography gutterBottom variant="h6" style={{ color: '#13374A', fontWeight: 'bold', fontSize: 15, marginRight: 30 }}>
                        Management system for Company
                      </Typography>
                    </div>
                    <div>
                      <Typography gutterBottom variant="body2" style={{ color: '#13374A', marginRight: 30 }}>
                        Mar 2020 - Sep 2020
                      </Typography>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <Typography gutterBottom variant="h6" style={{ color: '#13374A', fontWeight: 'bold', fontSize: 15, marginRight: 30 }}>
                        App Desktop
                      </Typography>
                    </div>
                    <div>
                      <Typography gutterBottom variant="body2" style={{ color: '#13374A', marginRight: 30 }}>
                        Oct 2020 - Apr 2021
                      </Typography>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <Typography gutterBottom variant="h6" style={{ color: '#13374A', fontWeight: 'bold', fontSize: 15, marginRight: 30 }}>
                        Management system for Start up
                      </Typography>
                    </div>
                    <div>
                      <Typography gutterBottom variant="body2" style={{ color: '#13374A', marginRight: 30 }}>
                        Apr 2021  - Present
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
