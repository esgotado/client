import axios from 'axios'

const API_ADDR = 'https://esgotado.app/api'

export default {
    async index(payload) {
        try {
            let { data } = await axios.post(
                `${API_ADDR}/auth/new/user`,
                payload
            )
            return data
        } catch (e) {
            return e.response
        }
    },
}
