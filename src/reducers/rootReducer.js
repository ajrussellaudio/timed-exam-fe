import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import timeReducer from './timeReducer';

const appReducer = combineReducers({
    darkMode: darkModeReducer,
    time: timeReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
