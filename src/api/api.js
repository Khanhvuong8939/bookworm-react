
import { request } from './utils'


export default {
    user: {
        login: credentials => request('POST','/api/auth', { credentials })
            .then(res => res.data.users)
    }
}