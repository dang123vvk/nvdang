import { Breadcrumbs, Typography, LinearProgress } from '@material-ui/core';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import useTrans from '../../../src/components/hooks/useTrans';

const DynamicComponentWithCustomLoading = dynamic(
    () => import('../../../src/containers/toeic'),
    { loading: () => <LinearProgress /> }
)
const toeic = () => {
    const t = useTrans()
    return (
        <div style={{ height: '100%' }}>
            <div className='d-flex justify-content-center mt-3'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link href="/"><a style={{ textDecoration: 'none' }}><Typography color="textPrimary">{t.menu.home}</Typography></a></Link>
                    <Link href="/" ><a style={{ textDecoration: 'none' }}><Typography color="textPrimary">{t.menu.utilities}</Typography></a></Link>
                    <Typography color="textPrimary">Toeic</Typography>
                </Breadcrumbs>
            </div>
            <DynamicComponentWithCustomLoading />
        </div>

    )
}
export default toeic;