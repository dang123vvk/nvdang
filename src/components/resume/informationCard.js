import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

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
    height: 500
  },
  inforBasicAvatar: {
    width: '100%',
    height: '30%',
    display: 'flex', 
    justifyContent: 'center'
  }
  ,
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
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs={12} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                
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
