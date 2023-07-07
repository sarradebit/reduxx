import {combineReducers} from 'redux'
import listReducer from './listTask'



const rootReducer = combineReducers({listReducer})

export default rootReducer