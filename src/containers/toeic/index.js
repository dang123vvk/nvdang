import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMenu from '../../components/card';
import { useMediaQuery, useTheme } from '@material-ui/core'
import { useRouter } from 'next/router';
import useTrans from '../../components/hooks/useTrans';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        marginTop: theme.spacing(4)
        // backgroundColor: '#eceff1',
    },
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        height: '85%',
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
    const t = useTrans()
    const router = useRouter()
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.down("xs"));
    const xs = useMediaQuery(theme.breakpoints.down("md"));
    const go = (e, link) => {
        e.preventDefault();
        router.push(link);
    }
    let menus1 = [
        {
            title: t.utilities.toeic.partOne,
            link: '/utilities/toiec/part-one',
            disable: true
        },
        {
            title: t.utilities.toeic.partTwo,
            link: '/utilities/toiec/part-two',
            disable: true
        },
        { title: t.utilities.toeic.partThree,
            link: '/utilities/toiec/part-three',
            disable: true
        },
        {
            title: t.utilities.toeic.partFour,
            link: '/utilities/toiec/part-four',
            disable: true
        }
    ];
    // eslint-disable-next-line
    let menus2 = [
        {
            title: t.utilities.toeic.partFive,
            link: '/utilities/toiec/part-five',
            disable: true
        },
        , {
            title: t.utilities.toeic.partSix,
            link: '/utilities/toiec/part-six',
            disable: true
        },
        {
            title: t.utilities.toeic.partSeven,
            link: '/utilities/toiec/part-seven',
            disable: true
        },
        {
            title: t.utilities.toeic.fullTest,
            link: '/utilities/toiec/full-test',
            disable: true
        }
    ]
    return (
        <Container component="main" className={classes.root}>
            <CssBaseline />
            <div className={sm || xs ? classes.paperMobile : classes.paper}>
                <div style={{height:'30%'}}>
                    <Typography component="h1" variant="h5" color='primary' style={{ fontWeight: 'bold', margin: 50 }}>
                        {t.utilities.toeic.title}
                </Typography>
                </div>
                <div style={{height:'70%'}}  >
                    <div className="bg-primary">
                        <Grid container spacing={3} > 
                            {menus1.map((menu, index) => (
                                <Grid item xs={12} sm={6} md={3} lg={3} key={index} style={{display: 'flex', justifyContent: 'center'}}>
                                    <CardMenu title={menu.title} disable={menu.disable} link={menu.link} go={go} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <div>
                        <Grid container spacing={3}>
                            {menus2.map((menu, index) => (
                                <Grid item xs={12} sm={6} md={3} lg={3} key={index} style={{display: 'flex', justifyContent: 'center'}}>
                                    <CardMenu title={menu.title} disable={menu.disable} link={menu.link} go={go} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>
        </Container>
    );
}