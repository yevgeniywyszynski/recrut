import { applyMiddleware, combiReducers, createStore, compose } from "redux";
import allFilesRedux from './AllFilesRedux';
import thunk from 'redux-thunk';

const initialState = {
    allFiles: [],
}

const reducers = {
    allFiles: allFilesRedux,
}

const storeReducer = combiReducers(reducers);

const store = createStore (
    storeReducer,
    initialState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;