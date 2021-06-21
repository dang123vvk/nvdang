import { LinearProgress } from "@material-ui/core";
import dynamic from 'next/dynamic'
import useTrans from "../../src/components/hooks/useTrans";
import Head from 'next/head';
import { useRouter } from "next/router";
import { splitRoutes, titleRouters } from "../../src/helpers/handleRoute";
import Breadcrumb from '../../src/components/breadcumbs';


const DynamicComponentWithCustomLoading = dynamic(
    () => import('../../src/containers/resume/index'),
    { loading: () => <LinearProgress /> }
)

const resume = () => {
    const t = useTrans();
    const router = useRouter();
    const listPath = splitRoutes(router.pathname, titleRouters(t));
    return (
        <div>
            <Head>
                <title>Resume - Nguyễn Văn Đặng  </title>
                <meta name="description" content="Trang web của Nguyễn Văn Đặng" />
                <meta property="og:title" content="Resume - Trang web của Nguyễn Văn Đặng" />
                <meta property="og:description" content="Trang web của Nguyễn Văn Đặng" />
                <meta property="og:url" content="https://nvdang.dev/utilities/resume" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='d-flex justify-content-center mt-3'>
                <Breadcrumb links={listPath} last={t.menu.utility.cv} />
            </div>
            <DynamicComponentWithCustomLoading />
        </div>
    )
}
export default resume;