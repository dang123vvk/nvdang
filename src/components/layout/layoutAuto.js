import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    },
}));

export default function ContainerAuto({ children }) {
    const classes = useStyles();
    return (
        <Container component="main" className={classes.root}>
            <CssBaseline />
            {children}
        </Container>
    );
}