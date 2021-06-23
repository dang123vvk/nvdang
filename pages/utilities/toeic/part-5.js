import { LinearProgress } from "@material-ui/core";
import dynamic from 'next/dynamic'
import useTrans from "../../../src/components/hooks/useTrans";
import Head from 'next/head';
import { splitRoutes, titleRouters } from "../../../src/helpers/handleRoute";
import { useRouter } from "next/router";
import Breadcrumb from '../../../src/components/breadcumbs';

const DynamicComponentWithCustomLoading = dynamic(
    () => import('../../../src/containers/toeic/partFive'),
    { loading: () => <LinearProgress /> }
)

const part5 = () => {
    const t = useTrans();
    const router = useRouter();
    const listPath = splitRoutes(router.pathname, titleRouters(t))
    return (
        <div>
            <Head>
                <title>Phần 5 Toeic Nguyễn Văn Đặng  </title>
                <meta name="description" content="Trang web của Nguyễn Văn Đặng" />
                <meta property="og:title" content="Phần 5 Toeic - Trang web của Nguyễn Văn Đặng" />
                <meta property="og:description" content="Trang web của Nguyễn Văn Đặng" />
                <meta property="og:url" content="https://nvdang.dev/utilities/toeic/part-5" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='d-flex justify-content-center mt-3'>
                <Breadcrumb links={listPath} last={t.utilities.toeic.partFive} />
            </div>
            <DynamicComponentWithCustomLoading />
        </div>
    )
}
export default part5;