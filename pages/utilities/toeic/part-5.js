import { Breadcrumbs, Typography, LinearProgress } from "@material-ui/core";
import Link from "next/link";
import dynamic from 'next/dynamic'
import useTrans from "../../../src/components/hooks/useTrans";

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../../../src/containers/toeic/partFive'),
  { loading: () => <LinearProgress /> }
)

const part5 = () => {
    const t = useTrans()
    return (
        <div>
            <div className='d-flex justify-content-center mt-3'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link href="/"><a style={{textDecoration: 'none'}}><Typography color="textPrimary">{t.menu.home}</Typography></a></Link>
                    <Link href="/" ><a style={{textDecoration: 'none'}}><Typography color="textPrimary">{t.menu.utilities}</Typography></a></Link>
                    <Link href="/utilities/toeic" ><a style={{textDecoration: 'none'}}><Typography color="textPrimary">Toeic</Typography></a></Link>
                    <Typography color="textPrimary">Part 5</Typography>
                </Breadcrumbs>
            </div>
            <DynamicComponentWithCustomLoading />
        </div>
    )
}
export default part5;