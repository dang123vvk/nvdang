import { Breadcrumbs, Typography } from '@material-ui/core';
import Link from 'next/link';
import ToeicContainer from '../../../src/containers/toeic'
const toeic = () => {
    return (
        <div style={{height: '100%'}}>
            <div className='d-flex justify-content-center mt-3'>
                <Breadcrumbs aria-label="breadcrumb">
                <Link href="/"><a style={{textDecoration: 'none'}}><Typography color="textPrimary">Home</Typography></a></Link>
                    <Link href="/" ><a style={{textDecoration: 'none'}}><Typography color="textPrimary">Utilities</Typography></a></Link>
                    <Typography color="textPrimary">Toeic</Typography>
                </Breadcrumbs>
            </div>
            <ToeicContainer />
        </div>

    )
}
export default toeic;