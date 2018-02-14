import { combineReducers } from 'redux';
import mainReducer from './containers/Main/reducer';

const rootReducer = combineReducers({
    mainReducer
});

export default rootReducer;
