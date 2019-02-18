import axios from 'axios';
import { API_URL } from './../constants/config';

export const request = (method, endpoint, data) => {
    return axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data
    })
}

