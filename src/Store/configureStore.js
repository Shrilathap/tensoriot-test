import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import launchReducer from '../Reducer/launchReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        launches:launchReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore