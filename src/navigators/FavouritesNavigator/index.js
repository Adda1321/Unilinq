import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile'
import Feedback from '../../screens/FeedBack'
import Settings from '../../screens/Settings'
import CommunityDetails from '../../screens/Communities/CommunityDetails'
import Search from '../../screens/Search'
import CommunityCreate from '../../screens/Communities/CommunityCreate'
import CommunityNew from '../../screens/Communities/communityNew'
import CommunityComplete from '../../screens/Communities/communityComplete'
import UserScreen from '../../screens/UserScreen'
import ReportMember from '../../screens/ReportMember'
import PrivacyPolicy from '../../screens/General/PrivacyPolicy';
import TermsAndConditions from '../../screens/General/TermsAndConditions';
import AccountClosure from '../../screens/General/AccountClosure';
import Chat from '../../screens/Chat'
import communityEdit from '../../screens/Communities/communityEdit'
import CommunityMembers from '../../screens/Communities/communityMembers'
import AppFeedback from '../../screens/FeedBack/AppFeedback'
import Logout from '../../screens/Auth/LogoutScreen'
import NewEvent from '../../screens/Events/newEventCreate'
import Survival from '../../screens/ServivalGuideHome/index'
import survivalList from '../../screens/ServivalGuideHome/survivalList';
import stafRef from '../../screens/ServivalGuideHome/stafRef';
import Oweeks from '../../screens/ServivalGuideHome/Oweeks';
import eventEdit from '../../screens/Events/eventEdit';
import eventDetails from '../../screens/Events/eventDetails'; 
import EventMembers from '../../screens/Events/eventMembers'
import eventComplete from '../../screens/Events/eventComplete'
import pendingEventsDetails from '../../screens/Events/pendingEventsDetails';
import HomeScreen from "../../Core/Chat/HomeScreen";
import AddChatScreen from "../../Core/Chat/AddChatScreen";
import ChatScreen from "../../Core/Chat/ChatScreen";
import Favourites from '../../screens/Favorites/index'
const FavouritesStack = createStackNavigator();

const FavouritesStackScreen = () => {
  return (
    <FavouritesStack.Navigator mode="card" headerMode="none" >
      <FavouritesStack.Screen name="Home" component={Favourites} />
      <FavouritesStack.Screen name="eventEdit" component={eventEdit} />
      <FavouritesStack.Screen name="eventDetails" component={eventDetails} />
      <FavouritesStack.Screen name="pendingEventsDetails" component={pendingEventsDetails} />
      <FavouritesStack.Screen name="EventMembers" component={EventMembers} />
      <FavouritesStack.Screen name="eventComplete" component={eventComplete} />
      <FavouritesStack.Screen name="HomeScreen" component={HomeScreen} />
        <FavouritesStack.Screen name="AddChat" component={AddChatScreen} />
        <FavouritesStack.Screen name="ChatScreen" component={ChatScreen} />
      <FavouritesStack.Screen name="survivalList" component={survivalList} />
      <FavouritesStack.Screen name="stafRef" component={stafRef} />
      <FavouritesStack.Screen name="Oweeks" component={Oweeks} />
      <FavouritesStack.Screen name="Profile" component={Profile} />
      <FavouritesStack.Screen name="Feedback" component={Feedback} />
      <FavouritesStack.Screen name="AppFeedback" component={AppFeedback} />
      <FavouritesStack.Screen name="Settings" component={Settings} />
      <FavouritesStack.Screen name="CommunityDetails" component={CommunityDetails} />
      <FavouritesStack.Screen name="Search" component={Search} />
      <FavouritesStack.Screen name="CommunityCreate" component={CommunityCreate} />
      <FavouritesStack.Screen name="NewEvent" component={NewEvent} />
      <FavouritesStack.Screen name="CommunityNew" component={CommunityNew} />
      <FavouritesStack.Screen name="communityEdit" component={communityEdit} />
      <FavouritesStack.Screen name="CommunityMembers" component={CommunityMembers} />
      <FavouritesStack.Screen name="CommunityComplete" component={CommunityComplete} />
      <FavouritesStack.Screen name="UserScreen" component={UserScreen} />
      <FavouritesStack.Screen name="Logout" component={Logout} />
      <FavouritesStack.Screen name="ReportMember" component={ReportMember} />
      <FavouritesStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <FavouritesStack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <FavouritesStack.Screen name="AccountClosure" component={AccountClosure} />
      <FavouritesStack.Screen name="Chat" component={Chat} />
    </FavouritesStack.Navigator>
  );
};

export default FavouritesStackScreen;
