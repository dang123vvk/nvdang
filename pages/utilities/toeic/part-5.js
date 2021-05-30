import { Breadcrumbs, Typography } from "@material-ui/core";
import Link from "next/link";
// import PartFive from "../../../src/containers/toeic/partFive";
import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../../../src/containers/toeic/partFive'),
  { loading: () => <p>...</p> }
)

const part5 = () => {
    return (
        <div>
            <div className='d-flex justify-content-center mt-3'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link href="/"><a style={{textDecoration: 'none'}}><Typography color="textPrimary">Home</Typography></a></Link>
                    <Link href="/" ><a style={{textDecoration: 'none'}}><Typography color="textPrimary">Utilities</Typography></a></Link>
                    <Link href="/utilities/toeic" ><a style={{textDecoration: 'none'}}><Typography color="textPrimary">Toeic</Typography></a></Link>
                    <Typography color="textPrimary">Part 5</Typography>
                </Breadcrumbs>
            </div>
            <DynamicComponentWithCustomLoading />
        </div>
    )
}
export default part5;