import { FC } from 'react'
import { FiUser } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'

import { formatToCurrency } from '@/utils/format-to-currency'

interface IHeaderProfile {
	user: { name: string; balance: number }
}

const HeaderProfile: FC<IHeaderProfile> = ({ user }) => {
	return (
		<Column size={3} isBorder={false}>
			<SquareButton Icon={FiUser} />
			<div className='ml-2'>
				<div className='text-xs text-gray'>{user.name}</div>
				<div className='text-[.7rem]'>
					balance: {formatToCurrency(user.balance)}{' '}
				</div>
			</div>
		</Column>
	)
}
export default HeaderProfile
