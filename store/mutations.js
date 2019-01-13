export default {
    updatePage(state, pageName) {
        state.page = pageName
        return state
    },
    setAuthToken(state, token) {
        state.authToken = token
        return state
    },
}
