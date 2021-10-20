import http from 'axios'

http.defaults.baseURL = 'http://localhost:8080'
http.interceptors.request.use(function (config) {
    config.headers.idUsuarioSolicitante = 1;
    return config;
});

export default {
	get(route) {
		return http.get(route)
	},

	post(route, data) {
		return http.post(route, data)
	},

	put(route, data) {
		return http.put(route, data)
	},

	patch(route, data) {
		return http.patch(route, data)
	}
}
