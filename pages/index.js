// import dynamic from 'next/dynamic'
import Main from '../src/containers/home'
import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../src/containers/home'),
  { loading: () => <p>Loading</p> }
)

export default function Index() {
  return (
    <>
      <DynamicComponentWithCustomLoading />
    </>
  )
}
