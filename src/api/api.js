import { request } from './utils'

export default {
    user: {
        login: credentials =>
            request('POST', 'api/auth', { credentials })
                .then(res => res.data.user),
        signup: data => {
            console.log('123')
            return request('POST', 'api/users', { data })
                .then(res => res.data.user)
        }

    }
}