import { combineReducers, legacy_createStore } from 'redux'
import {authReducer} from "./auth-reducer";


const reducers = combineReducers({
    login: authReducer
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store