import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IMeData } from '@/types/me.interface'

import { IAuthInitialState } from './me.type'

const initialState: IAuthInitialState = {
	meData: {
		id: NaN,
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		gender: '',
		image: '',
		token: ''
	}
}

export const meSlice = createSlice({
	name: 'me',
	initialState,
	reducers: {
		setMyData: (state, action: PayloadAction<IMeData>) => {
			state.meData = action.payload
		},
		reset: state => {
			state.meData = {
				id: NaN,
				username: '',
				email: '',
				firstName: '',
				lastName: '',
				gender: '',
				image: '',
				token: ''
			}
		}
	}
})
