import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk';
import {authReducer} from "./auth-reducer";


const rootReducer = combineReducers({
    login: authReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store