import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useMediaQuery, useTheme, Typography } from '@material-ui/core';
import useTrans from '../../components/hooks/useTrans';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    content: {
        height: 'calc(100vh - 64px)',
        // overflowX: 'hidden'
    },
}));
export default function Main() {
    // const theme = useTheme()
    const t = useTrans()
    // const mode = theme.palette.type.toString();
    // const sm = useMediaQuery(theme.breakpoints.down("xs"));
    // const xs = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Grid container component="main" className={classes.root} color={'initial'} >
                <CssBaseline />
                <Grid item xs={12} >
                    <div className="d-flex justify-content-center align-items-center w-100 h-100">
                        <Typography className="animate__animated animate__bounce animate__infinite" variant="h4" gutterBottom>{t.coming}</Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}