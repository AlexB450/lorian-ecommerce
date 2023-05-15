import { FC } from 'react'
import { IconType } from 'react-icons'

interface ISquareButton {
	Icon: IconType
	size?: number
	onClick?: () => void
	number?: number
}
const SquareButton: FC<ISquareButton> = ({
	Icon,
	onClick,
	number,
	size = 20
}) => {
	return (
		<button
			className='bg-black rounded-lg flex justify-center items-center hover:bg-[#212121]  transition-colors duration-200 relative'
			style={{
				width: `${size + 20}px`,
				height: `${size + 20}px`
			}}
			onClick={onClick}
		>
			{!!number && (
				<span className='bg-primary p-0.5 h-4 w-4  text-[.6rem] rounded-full flex justify-center items-center text-white leading-3 absolute -top-2 -right-2'>
					{number}
				</span>
			)}
			<Icon color='#8E8E8E' size={size} />
		</button>
	)
}
export default SquareButton
