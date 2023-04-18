import { combineReducers } from "redux";
import { productReducers, selectedProductReducer } from './reducer'

const reducers = combineReducers({
    allproduct: productReducers,
    product: selectedProductReducer
});

export default reducers