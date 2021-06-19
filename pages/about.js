import LinearProgress from '@material-ui/core/LinearProgress';
import dynamic from 'next/dynamic';
const DynamicComponentWithCustomLoading = dynamic(
  () => import('../src/containers/about'),
  { loading: () => <LinearProgress /> }
)
export default function About() {
  return (
    <DynamicComponentWithCustomLoading />
  )
}
