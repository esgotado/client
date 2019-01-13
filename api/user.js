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

    /**
     *
     * @param {{email,pass}} payload User email and password
     */
    async auth(payload) {
        try {
            let { email, pass } = payload
            let { data } = await axios.post(`${API_ADDR}/auth`, { email, pass })
            return data
        } catch (e) {
            return e.response
        }
    },
}
