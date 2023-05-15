import { FC, useEffect } from 'react'
import { FiBell, FiSearch } from 'react-icons/fi'
import { MdOutlineBackpack } from 'react-icons/md'

import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'

import { useOutside } from '@/hooks/useOutside'

import Cart from './cart/Cart'

let isOpenCart = false
const HeaderButtons: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(isOpenCart)
	useEffect(() => {
		isShow
			? document.body.classList.add('isScroll')
			: document.body.classList.remove('isScroll')
	}, [isShow])
	return (
		<>
			<Column size={2} className='gap-5'>
				<SquareButton Icon={FiSearch} onClick={() => {}} />
				<SquareButton Icon={FiBell} onClick={() => {}} />
				<SquareButton
					Icon={MdOutlineBackpack}
					number={5}
					onClick={() => setIsShow(!isShow)}
				/>
			</Column>
			{isShow && (
				<div
					ref={ref}
					className='fixed top-0 right-0 h-full min-w-[20rem]  bg-black bg-opacity-80 -z-10 '
				>
					{' '}
					<Cart />{' '}
				</div>
			)}
		</>
	)
}
export default HeaderButtons
