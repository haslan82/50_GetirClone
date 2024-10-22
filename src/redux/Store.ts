import  thunkMiddleware  from 'redux-thunk';
/* import {thunkMiddleware} from 'redux-thunk'; */
import {createStore,combineReducers,applyMiddleware} from "redux"
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";



import CartItems from './reducers/CartItems';



const reducers= combineReducers({
     CartItems:CartItems
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  /*   composeWithDevTools(applyMiddleware(thunk)) */
)

export default store