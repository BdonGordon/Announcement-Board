import { combineReducers } from 'redux';
import { announcementReducer } from '../modules/announcement';

const makeRootReducer = combineReducers({
    announcement: announcementReducer
});

export default makeRootReducer;
