import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import useTrans from '../../components/hooks/useTrans';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    content: {
        height: 'calc(100vh - 64px)',
    }
}));
export default function AboutContainer() {
    const t = useTrans()
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Grid container component="main" className={classes.root} >
                <CssBaseline />
                <Grid item xs={12} >
                    <div className="d-flex flex-column justify-content-start align-items-end w-100 h-100">
                        <h1 style={{ marginTop: 20, marginRight: 30 }}>{t.menu.about}</h1>
                        <h5 style={{ marginTop: 20, marginRight: 30 }}>{t.about.name}</h5>
                        <h5 style={{ marginTop: 20, marginRight: 30 }}>{t.about.from}</h5>
                        <h5 style={{ marginTop: 20, marginRight: 30 }}>{t.about.special}</h5>
                    </div>
                </Grid>
            </Grid>


        </div>
    );
}