import React from 'react';
import CardMenu from '../../components/card';
import { useMediaQuery, useTheme, Grid, Typography, makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router';
import useTrans from '../../components/hooks/useTrans';
import ContainerAuto from '../../components/layout/layoutAuto';

const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        // width: '100%',
        height: '100%',
        borderRadius: 10,
        paddingBottom: theme.spacing(4)
    },
    paperMobile: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: '#eceff1',
        borderRadius: 10,
        paddingBottom: theme.spacing(3)
    },
}));

export default function ToeicContainer() {
    const classes = useStyles();
    const t = useTrans()
    const router = useRouter()
    const theme = useTheme()
    const mode = theme.palette.type.toString();
    const sm = useMediaQuery(theme.breakpoints.down("xs"));
    const xs = useMediaQuery(theme.breakpoints.down("md"));
    const go = (e, link) => {
        e.preventDefault();
        router.push(link);
    }
    let menus1 = [
        {
            title: t.utilities.toeic.partOne,
            link: '/utilities/toeic/part-1',
            disable: true
        },
        {
            title: t.utilities.toeic.partTwo,
            link: '/utilities/toeic/part-2',
            disable: true
        },
        {
            title: t.utilities.toeic.partThree,
            link: '/utilities/toeic/part-3',
            disable: true
        },
        {
            title: t.utilities.toeic.partFour,
            link: '/utilities/toeic/part-4',
            disable: true
        }
    ];
    // eslint-disable-next-line
    let menus2 = [
        {
            title: t.utilities.toeic.partFive,
            link: '/utilities/toeic/part-5',
            disable: false
        },
        , {
            title: t.utilities.toeic.partSix,
            link: '/utilities/toeic/part-6',
            disable: true
        },
        {
            title: t.utilities.toeic.partSeven,
            link: '/utilities/toeic/part-7',
            disable: true
        },
        {
            title: t.utilities.toeic.fullTest,
            link: '/utilities/toeic/full-test',
            disable: true
        }
    ]
    return (
        <ContainerAuto >
            <div className={sm || xs ? classes.paperMobile : classes.paper} style={{ backgroundColor: mode === 'light' ? '#eceff1' : '#1f2936' }}>
                <div>
                    <Typography component="h1" variant="h5" style={{ fontWeight: 'bold', margin: 50 }}>
                        {t.utilities.toeic.title}
                    </Typography>
                </div>
                <div className="d-flex align-items-center" style={{
                    height: '80%', display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }} >
                    <div>
                        <Grid container spacing={3} >
                            {menus1.map((menu, index) => (
                                <Grid item xs={12} sm={6} md={3} lg={3} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <CardMenu title={menu.title} disable={menu.disable} link={menu.link} go={go} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <div style={{ marginTop: 30 }}>
                        <Grid container spacing={3}>
                            {menus2.map((menu, index) => (
                                <Grid item xs={12} sm={6} md={3} lg={3} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <CardMenu title={menu.title} disable={menu.disable} link={menu.link} go={go} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>
        </ContainerAuto>
    );
}