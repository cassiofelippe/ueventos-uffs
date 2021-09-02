import http from 'axios'

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
