
import {createStore,combineReducers,applyMiddleware} from "redux"
import  thunkMiddleware  from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
/* import { composeWithDevTools } from "redux-devtools-extension" */
import CartItems from './reducers/CartItems';
import { thunk } from "redux-thunk";


const reducers= combineReducers({
    CartItems:CartItems
})

const store = createStore(
    reducers,
    /* composeWithDevTools(applyMiddleware(thunkMiddleware)) */
    composeWithDevTools(applyMiddleware(thunk))
)

export default store


