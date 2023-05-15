import axios from 'axios'

export const axiosClassic = axios.create({
	// baseURL: process.env.SERVER_URL,
	baseURL: 'https://dummyjson.com',
	headers: {
		'Content-Type': 'application/json'
	}
})
