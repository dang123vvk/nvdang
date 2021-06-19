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
    },
    textStyle: {
        marginTop: 20,
        marginRight: 30
    }
}));

export default function AboutContainer() {
    const t = useTrans()
    const classes = useStyles();
    const contents = [
        t.about.name,
        t.about.from,
        t.about.special
    ]
    return (
        <div className={classes.content}>
            <Grid container component="main" className={classes.root} >
                <CssBaseline />
                <Grid item xs={12} >
                    <div className="d-flex flex-column justify-content-start align-items-end w-100 h-100">
                        <h1 className={classes.textStyle}>{t.menu.about}</h1>
                        {contents.map((data, index) => (
                            <h5 className={classes.textStyle} key={index}>{data}</h5>
                        ))}
                    </div>
                </Grid>
            </Grid>


        </div>
    );
}