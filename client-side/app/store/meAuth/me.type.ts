import { IMeData } from '@/types/me.interface'

export interface IAuthInitialState {
	meData: IMeData
}
export interface IUserSignIn {
	username: string
	password: string
}
