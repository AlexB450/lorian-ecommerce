import Image from 'next/image'
import { FC } from 'react'
import { MdOutlineBackpack } from 'react-icons/md'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import SquareButton from '@/ui/square-button/SquareButton'

import { IProduct } from '@/types/product.interface'

import { formatToCurrency } from '@/utils/format-to-currency'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<Row className='justify-center'>
			<Column size={6} className='flex-col text-center px-20'>
				<div className='text-lg text-white my-5'>{product.title}</div>
				<div>{product.description}</div>
				<div className='text-lg text-white mt-4'>
					<span>{formatToCurrency(product.price)}</span>
				</div>
			</Column>
			<Column size={3}>
				<Image
					src={product.images[0]}
					alt='main'
					width={200}
					height={200}
					className='opacity-50 transition-opacity duration-200 hover:opacity-100'
				/>
			</Column>
			<Column size={3} className='flex-col'>
				<div className='uppercase text-sm'>{product.brand}</div>
				<div>{product.category}</div>

				<div className='my-5'>
					<SquareButton Icon={MdOutlineBackpack} onClick={() => {}} size={40} />
				</div>
			</Column>
		</Row>
	)
}

export default ProductItem
