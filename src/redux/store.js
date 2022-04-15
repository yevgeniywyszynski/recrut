import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import AllFilesRedux from './AllFilesRedux';
import thunk from 'redux-thunk';

const initialState = {
    allFiles: [],
}

const reducers = {
    allFiles: AllFilesRedux,
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initialState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;