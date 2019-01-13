export default function({ store, redirect }) {
    let authenticated = store.getters.authenticated
    if (!authenticated) {
        redirect('/login')
    }
}
