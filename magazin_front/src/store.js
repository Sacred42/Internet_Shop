// import reducer from './reducer/reducer';
import {ProductsDetailsReducer} from './reducer/ProductDetailsReducer';
import {ProductsReducer} from './reducer/ProductsReducer';
import {ProductCart} from './reducer/ProductCart';
import {UserRegisterReducer, UserAuthReducer} from './reducer/UserReducer';
import { createStore, applyMiddleware , combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    ProductCart : ProductCart,
    ProductsReducer : ProductsReducer,
    ProductsDetailsReducer : ProductsDetailsReducer,
    UserRegisterReducer : UserRegisterReducer,
    UserAuthReducer : UserAuthReducer
})
const composeEnhncer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , composeEnhncer(applyMiddleware(thunk)));
export default store;