import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import dynamic from 'next/dynamic'
const AboutContainer = dynamic(
  () => import('../src/containers/about'),
  { ssr: false }
)
export default function About() {
  return (
    <AboutContainer  />
  )
}
