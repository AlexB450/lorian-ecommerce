import { FC } from 'react'

import { COLORS } from '@/config/color.config'

import loader from './loader.svg'

const Loader: FC = () => {
	return <img src={loader.src} alt='loader' width={200} height={200} />
}

export default Loader
