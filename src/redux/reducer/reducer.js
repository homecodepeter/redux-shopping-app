import { ActionType } from "../TypeAction/ActionType";

const initialState = {
    products: [],
}

export const productReducers = (state = initialState, {type, payload}) => {
     switch(type){
         case ActionType.SET_PRODUCT:
             return {...state, products: payload}
        default:
          return state
     }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
     switch(type){
         case ActionType.SELECTED_PRODUCT: 
           return {...state, ...payload}
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {}
       default:
           return state
     }
}
