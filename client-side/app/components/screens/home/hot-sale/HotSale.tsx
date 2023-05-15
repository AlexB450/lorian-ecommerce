import { FC } from 'react'

import { formatToCurrency } from '@/utils/format-to-currency'

interface IHotSale {
	price: {
		old: number
		new: number
	}
}
const HotSale: FC<IHotSale> = ({ price }) => {
	return (
		<div className='text-white px-10 py-16 border-b-2 border-black uppercase'>
			<h3 className=' text-xs'>HOT SALES</h3>

			<h2 className='my-7 text-[3rem]  font-light font-serif'>
				a red dress will brighten up your evening
			</h2>
			<div className='flex justify-between'>
				<div>
					<span className='text-xl pr-2'>{formatToCurrency(price.new)}</span>
					<span className='line-through text-gray text-xs'>
						{formatToCurrency(price.old)}
					</span>
				</div>
				<button className='text-xs underline hover:no-underline'>
					BUY NOW
				</button>
			</div>
		</div>
	)
}

export default HotSale
