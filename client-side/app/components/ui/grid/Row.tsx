import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Row: FC<PropsWithChildren<{ className?: string }>> = ({
	className,
	children
}) => {
	return (
		<div
			className={cn(
				'grid w-full grid-cols-12  border-b-2 border-black',
				className
			)}
		>
			{children}
		</div>
	)
}

export default Row
