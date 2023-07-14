import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import stockReportsReducer from "./reducers";

const store = createStore(stockReportsReducer, applyMiddleware(thunk));

export default store;
