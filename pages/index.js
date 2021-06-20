import dynamic from 'next/dynamic';
import LinearProgress from '@material-ui/core/LinearProgress';
import Head from 'next/head';

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../src/containers/home'),
  { loading: () => <LinearProgress /> }
)

export default function Index() {
  return (
    <>
      <Head>
        <title>Nguyễn Văn Đặng </title>
        <meta name="description" content="Trang web của Nguyễn Văn Đặng" />
        <meta property="og:title" content="Trang chủ - Trang web của Nguyễn Văn Đặng" />
        <meta property="og:description" content="Trang web của Nguyễn Văn Đặng" />
        <meta property="og:url" content="https://nvdang.dev" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicComponentWithCustomLoading />
    </>
  )
}
