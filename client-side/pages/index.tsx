import { GetStaticProps, NextPage } from 'next'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IProduct } from '@/types/product.interface'

import Home from '@/screens/home/Home'
import { ProductService } from '@/services/ProductService'

export interface IProductsPage {
	products: IProduct[]
}

const HomePage: NextPage<IProductsPage> = ({ products }) => {
	const meData = useTypedSelector(state => state.me)
	console.log(meData)
	return <Home products={products} />
}
/* 
export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
	const products = await ProductService.getProducts()

	return {
		props: {
			products
		}
	}
} */

export default HomePage
