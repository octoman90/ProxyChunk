import axios from 'axios'

import { IProxy } from '../types'

const baseURI: string = 'http://localhost:4000/api'

export const api = {
	getProxies: async (): Promise<IProxy[]> => {
		try {
			return axios.get(baseURI + '/proxies').then(response => response.data.proxies)
		} catch (error) {
			throw new Error(error)
		}
	}
}
