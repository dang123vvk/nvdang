import React from 'react';
import { Chip } from '@material-ui/core';


export default function ChipCustom({label}) {
    return (
        <Chip label={label} style={{ backgroundColor: '#E6EBEC', color: '#15303F', marginRight: 15, marginLeft:15, width: 100 }} />
    );
}
