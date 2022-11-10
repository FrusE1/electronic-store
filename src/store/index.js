import { applyMiddleware, combineReducers, createStore } from "redux";
import electronicsReducer from "./electronics/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import basketReducer from "./basket/reducer";
import modalReducer from "./modal/reducer";
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  electronics: electronicsReducer,
  basket: basketReducer,
  modal: modalReducer,
  user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); 