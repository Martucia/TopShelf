import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import catalogReducer from "./catalogReducer";
import usersReducer from "./usersReducer";
import loadReducer from "./loadReducer";
import categortReducer from './categoryReducer';
import productReducer from './productReducer';
import reviewsReducer from './reviewsReducer';
import searchReducer from './searchReducer';
import orderReducer from "./orderReducer";
import couponsReducer from "./couponsReducer";

const rootReducer = combineReducers({
    catalog: catalogReducer,
    user: usersReducer,
    load: loadReducer,
    categories: categortReducer,
    product: productReducer,
    reviews: reviewsReducer,
    search: searchReducer,
    order: orderReducer,
    coupons: couponsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))