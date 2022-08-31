import {combineReducers} from 'redux';
import users from './users';
import community from './community';
import getCommunity from './getCommunity';
import getAllJoinedCommunity from './getAllJoinedCommunites';
import allMembers from './allMembers';
import getEvents from './getEvents';
import notifications from './notifications';
import allRooms from './allRooms';
const LOG_OUT = 'LOG_OUT';
const appReducer = combineReducers({
  users,
  community,
  getCommunity,
  getAllJoinedCommunity,
  allMembers,
  getEvents,
  allRooms,
  notifications,
});

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
