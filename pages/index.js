import dynamic from 'next/dynamic';
import LinearProgress from '@material-ui/core/LinearProgress';

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../src/containers/home'),
  { loading: () => <LinearProgress /> }
)

export default function Index() {
  return (
    <>
      <DynamicComponentWithCustomLoading />
    </>
  )
}
