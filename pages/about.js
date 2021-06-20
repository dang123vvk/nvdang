import LinearProgress from '@material-ui/core/LinearProgress';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const DynamicComponentWithCustomLoading = dynamic(
  () => import('../src/containers/about'),
  { loading: () => <LinearProgress /> }
)
export default function About() {
  return (
    <>
        <Head>
        <title>Về tôi - Nguyễn Văn Đặng  </title>
        <meta name="description" content="Trang web của Nguyễn Văn Đặng" />
        <meta property="og:title" content="Về tôi - Trang web của Nguyễn Văn Đặng" />
        <meta property="og:description" content="Trang web của Nguyễn Văn Đặng" />
        <meta property="og:url" content="https://nvdang.dev/about" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicComponentWithCustomLoading />
  
    </>)
    
}
