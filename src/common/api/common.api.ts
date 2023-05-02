import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.1/',
	withCredentials: true,
	headers: {
		'API-KEY': '7d54e03a-c727-4a11-92e7-335f41a4e836'
	}
})




