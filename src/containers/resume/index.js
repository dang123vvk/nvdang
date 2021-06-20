import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import InformationCard from '../../components/resume/informationCard';
import InformationCardMobile from '../../components/resume/informationCardMobile';
import ContainerAuto from '../../components/layout/layoutAuto';

export default function ResumeContainter() {
    const theme = useTheme()
    const mode = theme.palette.type.toString();
    const sm = useMediaQuery(theme.breakpoints.down("xs"));
    const xs = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <ContainerAuto >
            <div>
                {
                    sm || xs ? <InformationCardMobile /> : <InformationCard mode={mode} mobile={sm || xs} />
                }

            </div>
        </ContainerAuto>
    );
}