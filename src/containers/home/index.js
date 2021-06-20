import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import ContainerFit from '../../components/layout/layoutFit';
import useTrans from '../../components/hooks/useTrans';

export default function Main() {
    // const theme = useTheme()
    const t = useTrans()
    // const mode = theme.palette.type.toString();
    // const sm = useMediaQuery(theme.breakpoints.down("xs"));
    // const xs = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <ContainerFit >
            <Grid item xs={12} >
                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                    <Typography className="animate__animated animate__bounce animate__infinite" variant="h4" gutterBottom>{t.coming}</Typography>
                </div>
            </Grid>
        </ContainerFit>
    );
}