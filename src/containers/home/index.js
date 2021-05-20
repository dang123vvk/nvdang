import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    content: {
        backgroundImage: "url('/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%'
    },
}));
export default function Home() {
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.down("xs"));
    const xs = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();
    return (
        <div className={classes.content}>
        <Grid container component="main" className={classes.root} >
            <CssBaseline />
            <Grid item xs={12} >
                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                    <h1 className="animate__animated animate__bounce animate__infinite">Cooming soon ...</h1>
                </div>
            </Grid>
        </Grid>
        </div>
    );
}