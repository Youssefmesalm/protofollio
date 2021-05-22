import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools }  from 'redux-devtools-extension';
import thunk from "redux-thunk";


const store = createStore(reducer,compose(composeWithDevTools(),applyMiddleware(thunk)));

export default store;