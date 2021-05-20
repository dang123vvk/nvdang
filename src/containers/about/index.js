import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import useTrans from '../../../pages/hooks/useTrans';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    content: {
        height: '100%'
    },
    leftContent: {
        backgroundImage: "url('/about.jpeg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%'
    },
}));
export default function AboutContainer() {
    const t = useTrans()
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.down("xs"));
    const xs = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();
    return (
        <div className={classes.content}>
            {sm || xs ? (
                <Grid container component="main" className={classes.root} >
                    <CssBaseline />
                    <Grid item xs={12} >
                        <div className="d-flex flex-column justify-content-start align-items-end w-100 h-100">
                            <h1 style={{ marginTop: 20, marginRight: 30 }}>{t.menu.about}</h1>
                            <h5 style={{ marginTop: 20, marginRight: 30 }}>{t.about.name}</h5>
                            <h5 style={{ marginTop: 20, marginRight: 30 }}>{t.about.from}</h5>
                            <h5 style={{ marginTop: 20, marginRight: 30 }}>{t.about.special}</h5>
                            {/* <h5 style={{ marginTop:20, marginRight:30}}>Donate for mee .... 😉😉</h5> */}
                        </div>
                    </Grid>
                </Grid>
            ) : (
                <Grid container component="main" className={classes.root} >
                    <CssBaseline />
                    <Grid item sm={6} xs={8} md={8} lg={8} xl={8} className={classes.leftContent} >
                    </Grid>
                    <Grid item sm={6} xs={4} md={4} lg={4} xl={4} >
                        <div className="d-flex flex-column justify-content-start align-items-end w-100 h-100">
                        <h1 style={{ marginTop: 20, marginRight: 30 }}>{t.menu.about}</h1>
                            <h5 style={{ marginTop: 20, marginRight: 30 }}>{t.about.name}</h5>
                            <h5 style={{ marginTop: 20, marginRight: 30 }}>{t.about.from}</h5>
                            <h5 style={{ marginTop: 20, marginRight: 30 }}>{t.about.special}</h5>
                            {/* <h5 style={{ marginTop:20, marginRight:30}}>Donate for mee .... 😉😉</h5> */}
                        </div>
                    </Grid>
                </Grid>
            )}

        </div>
    );
}