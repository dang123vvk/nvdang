import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMenu from '../../components/card';
import {useMediaQuery, useTheme} from '@material-ui/core'
import { useRouter } from 'next/router';
let  menus1 = [
    {
        title: 'Part 1',
        link: 'part 1',
        disable: true
    },
    {
        title: 'Part 2',
        link: 'part 2',
        disable: true
    },
    {
        title: 'Part 3',
        link: 'part 3',
        disable: true
    },
    {
        title: 'Part 4',
        link: 'part 4',
        disable: true
    }
];
// eslint-disable-next-line
let menus2 = [
    {
        title: 'Part 5',
        link: '/partfive',
        disable: false
    },
    , {
        title: 'Part 6',
        link: 'part 6',
        disable: true
    },
    {
        title: 'Part 7',
        link: 'part 7',
        disable: true
    },
    {
        title: 'Full Test',
        link: 'part 8',
        disable: true
    }
]
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        marginTop:theme.spacing(4)
        // backgroundColor: '#eceff1',
    },
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '80%',
        backgroundColor: '#eceff1',
        borderRadius: 10
    },
    paperMobile: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#eceff1',
        borderRadius: 10, 
        paddingBottom: theme.spacing(3)
    },
}));

export default function ToeicContainer() {
    const classes = useStyles();
    const router = useRouter()
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.down("xs"));
    const xs = useMediaQuery(theme.breakpoints.down("md"));
    const go = (e,link) => {
        e.preventDefault();
        router.push(link);
    }
    return (
        <Container component="main" className={classes.root}>
            <CssBaseline />
            <div className={sm || xs ? classes.paperMobile : classes.paper}>
                <Typography component="h1" variant="h5" color='primary' style={{ fontWeight: 'bold', margin: 30  }}>
                    Toeic Test Online Beta
                </Typography>
                <div style={{ paddingTop: 20 }}>
                    <Grid container spacing={3}>
                        {menus1.map((menu, index) => (
                            <Grid item xs={12} sm={6}  md={3} lg={3} key={index} className='d-flex justify-content-center'>
                                <CardMenu title={menu.title} disable={menu.disable} link={menu.link} go={go}/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div style={{ paddingTop: 20 }}>
                    <Grid container spacing={3}>
                        {menus2.map((menu, index) => (
                            <Grid item xs={12} sm={6}  md={3} lg={3} key={index} className='d-flex justify-content-center'>
                                <CardMenu title={menu.title} disable={menu.disable} link={menu.link} go={go}/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </Container>
    );
}