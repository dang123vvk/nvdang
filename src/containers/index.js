import React,{ Suspense } from 'react';
import { LinearProgress, makeStyles } from '@material-ui/core';
import Home from './home';
import Header from '../components/generic/header';
// import Loading from "../../components/loading";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#ffff',
        // backgroundColor: '#363C41',
        flexDirection: 'column',
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        height: '100vh'
    },
    content: {
        // flexGrow: 1,
        // backgroundColor: '#ffff',
        backgroundImage: 'url(https://ssl.gstatic.com/atari/images/simple-header-blended-small.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%'
    },
}));
export default function Layout() {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Header /> 
                <main className={classes.content}>
                    {/* <Suspense fallback={<LinearProgress variant="indeterminate"></LinearProgress>}> */}
                        <Home  />
                    {/* </Suspense> */}
                </main>
            </div>
    )
}