import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'

const createStore = () => new Vuex.Store({ state, mutations, getters })

export default createStore
