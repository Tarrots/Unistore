import rootReducers from './reducers/index' // reducer root
import { createStore } from 'redux'
const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux tool
    
)
export default store;