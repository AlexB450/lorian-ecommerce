import { FC } from 'react'

import Layout from '@/layout/Layout'

import ProductItem from './ProductItem'
import { IProductsPage } from '@/../pages'

const Shop: FC<IProductsPage> = ({ products }) => {
	console.log(products)
	return (
		<Layout title='Shop' description='fashion clothing store.'>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</Layout>
	)
}

export default Shop
