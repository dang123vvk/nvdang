import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import useTrans from '../../components/hooks/useTrans';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    content: {
        height: '100%',
    },
}));
export default function Home() {
    const theme = useTheme()
    const t = useTrans()
    const mode = theme.palette.type.toString();
    // const sm = useMediaQuery(theme.breakpoints.down("xs"));
    // const xs = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();
    return (
        <div className={classes.content} style={{ backgroundColor: mode === 'dark' ? '#212121' : '#fff' }}>
            <Grid container component="main" className={classes.root} color={'initial'} >
                <CssBaseline />
                <Grid item xs={12} >
                    <div className="d-flex justify-content-center align-items-center w-100 h-100">
                        <h1 className="animate__animated animate__bounce animate__infinite">{t.coming}</h1>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}