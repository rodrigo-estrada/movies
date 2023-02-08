import axios from 'axios'
import api from '../constants/api'
import queryString from 'querystring'
const Request = {
    async getEncoded(url, data = {}) {
        let parameters = { ...data, api_key: api.PRIVATE_KEY }
        const response = await axios.get(`${api.API_URL}${url}?${queryString.stringify(parameters)}`)
        if (response && response.status === 200) {
            return response?.data?.results || response?.data || []
        }
        return []
    }
}

export default Request