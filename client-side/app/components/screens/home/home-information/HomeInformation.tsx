import { FC } from 'react'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

const HomeInformation: FC = () => {
	return (
		<Row className='h-full border-b-0 text-white'>
			<Column size={4} className='border-r-2 border-black flex-col'>
				<div className='text-2xl'>100K</div>
				<div className='text-xs text-white/80'>Customers</div>
			</Column>
			<Column
				size={8}
				isBorder={false}
				className='flex-col  !items-start p-8 text-xs'
			>
				<div className='mb-3'>New collection</div>
				<div className=' text-white/80'>
					The red dress was inspired by a love of fashion and a fear of
					complacency. Our challenge was to create a dress
				</div>
			</Column>
		</Row>
	)
}

export default HomeInformation
