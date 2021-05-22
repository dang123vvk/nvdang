import { useRouter } from 'next/router'
import en from '../../i18n/lang/en.js'
import vi from '../../i18n/lang/vi.js'

const useTrans = () => {
    const { locale } = useRouter()
    const trans = locale === 'vi' ? vi : en
    return trans
}

export default useTrans