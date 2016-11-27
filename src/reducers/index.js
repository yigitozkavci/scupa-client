import { combineReducers } from 'redux';
import auth from './auth';
import schools from './schools';

export default combineReducers({ auth, schools });
