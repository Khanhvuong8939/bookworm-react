import { request } from './utils'

export default {
    user: {
        login: credentials =>
            request('POST', 'api/auth', { credentials })
                .then(res => res.data.user),
        signup: data => {
            return request('POST', 'api/users', { data })
                .then(res => res.data.user)
        }

    }
}