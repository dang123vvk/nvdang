import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    content: {
        height: 'calc(100vh - 64px)',
    },
}));
export default function ContainerFit({children}) {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Grid container component="main" className={classes.root} color={'initial'} >
                <CssBaseline />
                {children}
            </Grid>
        </div>
    );
}