import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import stockReportsReducer from "./reducers";

//Хранилище хранящее состояние Redux
const store = createStore(stockReportsReducer, applyMiddleware(thunk));

export default store;
