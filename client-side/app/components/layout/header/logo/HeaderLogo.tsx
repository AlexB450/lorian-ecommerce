import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Column from '@/ui/grid/Column'

const HeaderLogo: FC = () => {
	return (
		<Column size={2}>
			<Link href='/' className='flex items-center'>
				<Image src='/images/logo.png' width={50} height={50} alt='Xmas shop' />
				<div className='ml-2'>
					<div className='text-white font-light tracking-[.1rem]'>LORIAN</div>
					<div className='text-dark-gray text-sm font-thin tracking-[.35rem]'>
						STORE
					</div>
				</div>
			</Link>
		</Column>
	)
}
export default HeaderLogo
