import { Box, Container, Typography } from '@material-ui/core'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import dynamic from 'next/dynamic'
const Main = dynamic(
  () => import('../src/containers/home'),
  { ssr: false }
)
export default function Index() {
  return (
    <Main  />
  )
}
