// import { EnumSorting } from '@/ui/catalog/sorting/sorting.interface'
//https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid
import { IProduct } from '@/types/product.interface'

import { axiosClassic } from '@/api/api'

import { IProductsPage } from '@/../pages'

const PRODUCTS = '/products/category/womens-shoes'
export const ProductService = {
	async getProducts(type?: any) {
		const {
			data: { products }
		} = await axiosClassic.get<IProductsPage>(PRODUCTS, {
			params: {
				sortType: type
			}
		})

		return products
	},

	async bySearchTerm(searchTerm: string) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/search`, {
			params: { searchTerm }
		})
	},

	async byId(id: number) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/${id}`)
	},

	async bySlug(slug: string) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/slug/${slug}`)
	},

	async getRelatives(withoutId: number) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/relatives/${withoutId}`)
	}
}
