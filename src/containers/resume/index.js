import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useMediaQuery } from '@material-ui/core';
import useTrans from '../../components/hooks/useTrans';
import InformationCard from '../../components/resume/informationCard';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        // backgroundColor: '#eceff1',
    },
    paperLight: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '80%',
        backgroundColor: '#eceff1',
        borderRadius: 10
    },
    paperDark: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '80%',
        backgroundColor: '#1f2936',
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    answerTitleLight: {
        color: '#5e6d87'
    },
    answerTitleDark: {
        color: '#ffffff'
    },
    questionTitleLight: {
        fontWeight: 'bold',
        color: '#596981'
    },
    questionTitleDark: {
        fontWeight: 'bold',
        color: '#ffffff'
    }
}));

export default function ResumeContainter() {
    const classes = useStyles();
    const theme = useTheme()
    const t = useTrans()
    const mode = theme.palette.type.toString();
    const sm = useMediaQuery(theme.breakpoints.down("xs"));
    const xs = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Container component="main" className={classes.root}>
            <CssBaseline />
            {/* <div className={mode === 'light' ? classes.paperLight : classes.paperDark}>
                <Typography component="p" variant="body1" style={{ fontWeight: 'bold', margin: 30 }}>
                   Resume Nguyen Van Dang
                </Typography>
            </div> */}
            <div>
                <InformationCard mode={mode} mobile={sm || xs} />
            </div>
        </Container>
    );
}