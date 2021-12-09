import { combineReducers } from "redux"
import orderReducer from './orderReducer'

const reducers = combineReducers({
    orderData: orderReducer
});

export default reducers