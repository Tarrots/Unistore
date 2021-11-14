import rootReducers from './reducers/index' // reducer root
import { createStore } from 'redux'

const store = createStore(rootReducers)

export default store;