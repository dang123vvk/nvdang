import { Breadcrumbs, Typography } from '@material-ui/core';
import Link from 'next/link';

function Breadcrumb({ links, last }) {
    return (
        <div className='d-flex justify-content-center mt-3'>
            <Breadcrumbs aria-label="breadcrumb">
                {links.map((link, index) => (
                    <Link href={link?.path} key={index}><a style={{ textDecoration: 'none' }}><Typography color="textPrimary">{link?.title}</Typography></a></Link>
                ))}
                <Typography color="textPrimary">{last}</Typography>
            </Breadcrumbs>
        </div>
    )
}
export default Breadcrumb;