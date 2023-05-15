import { FC } from 'react'

import Row from '@/ui/grid/Row'

import styles from './Header.module.scss'
import HeaderButtons from './buttons/HeaderButtons'
import HeaderLogo from './logo/HeaderLogo'
import HeaderMenu from './menu/HeaderMenu'
import HeaderProfile from './profile/HeaderProfile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Row>
				<HeaderLogo />
				<HeaderMenu />
				<HeaderButtons />
				<HeaderProfile user={{ name: 'Alexander Ben', balance: 200 }} />
			</Row>
		</header>
	)
}

export default Header
