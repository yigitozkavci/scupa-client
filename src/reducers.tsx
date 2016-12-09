import { combineReducers } from 'redux';
import auth from './Auth/reducers';
import school from './School/reducers';

export default combineReducers({ auth, school });
