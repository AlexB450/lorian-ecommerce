import { IUserSignIn } from '@/store/meAuth/me.type'

import { IPaymentResponse } from '@/types/payment.interface'

import { axiosClassic } from '@/api/api'

const AUTH = 'auth/login'

export const AuthService = {
	async authMe(meData: IUserSignIn) {
		const { data } = await axiosClassic.post<IPaymentResponse>(AUTH, {
			...meData
		})

		return data
	}
}
