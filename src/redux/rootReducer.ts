import applicationReducer from './application';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  application: applicationReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
