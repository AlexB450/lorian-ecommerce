import { IProductsPage } from '.'
import { GetStaticProps, NextPage } from 'next'

import Shop from '@/screens/Shop/Shop'
import { ProductService } from '@/services/ProductService'

const shopPage: NextPage<IProductsPage> = ({ products }) => {
	return <Shop products={products} />
}

export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
	const products = await ProductService.getProducts()
	return {
		props: {
			products
		}
	}
}
export default shopPage
