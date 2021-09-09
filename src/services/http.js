import http from 'axios'

http.defaults.baseURL = 'http://localhost:8080'

export default {
	get(route) {
		return http.get(route)
	},

	post(route, data) {
		return http.post(route, data)
	},

	put(route, data) {
		return http.put(route, data)
	}
}
