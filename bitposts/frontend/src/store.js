import { configureStore, applyMidleWare } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'react-thunkt';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = configureStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMidleWare(...middleware))
);

export default store;