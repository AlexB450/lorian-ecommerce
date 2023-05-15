import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import '@/assets/styles/globals.scss'

import { persistor, store } from '@/store/store'

import { AuthService } from '@/services/AuthServices'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
const f = async () => {
	const meData = await AuthService.authMe({
		username: 'atuny0',
		password: '9uQFF1Lh'
	})
	console.log(meData)
}
f()
