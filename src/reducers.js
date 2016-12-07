import { combineReducers } from 'redux';
import auth from './Auth/reducers';
import schools from './School/reducers';

export default combineReducers({ auth, schools });
