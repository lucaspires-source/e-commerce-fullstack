import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {productListReducer, productDetailsReducer,} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducers'

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
      },
}
const reducer = combineReducers({
    productList:productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer, 
})
const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;