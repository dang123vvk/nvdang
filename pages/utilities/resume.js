import { Breadcrumbs, Typography } from "@material-ui/core";
import Link from "next/link";
// import PartFive from "../../../src/containers/toeic/partFive";
import dynamic from 'next/dynamic'
import useTrans from "../../src/components/hooks/useTrans";

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../../src/containers/resume/index'),
  { loading: () => <p>...</p> }
)

const resume = () => {
    const t = useTrans()
    return (
        <div>
            <div className='d-flex justify-content-center mt-3'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link href="/"><a style={{textDecoration: 'none'}}><Typography color="textPrimary">{t.menu.home}</Typography></a></Link>
                    <Link href="/" ><a style={{textDecoration: 'none'}}><Typography color="textPrimary">{t.menu.utilities}</Typography></a></Link>
                    <Typography color="textPrimary">{t.menu.utility.cv}</Typography>
                </Breadcrumbs>
            </div>
            <DynamicComponentWithCustomLoading />
        </div>
    )
}
export default resume;