import { compose, createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools }  from 'redux-devtools-extension';


const store = createStore(reducer,compose(composeWithDevTools()));

export default store;