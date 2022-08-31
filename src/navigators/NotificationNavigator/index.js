import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile'
import Feedback from '../../screens/FeedBack'
import Settings from '../../screens/Settings'
import Notification from '../../screens/Notification'
import Logout from '../../screens/Auth/LogoutScreen'
import Survival from '../../screens/ServivalGuideHome/index';


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

import NewEvent from '../../screens/Events/newEventCreate'

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
const NotificationStack = createStackNavigator();

const NotificationStackScreen = () => {
  return (
    <NotificationStack.Navigator mode="card" headerMode="none">
      <NotificationStack.Screen name="Notification" component={Notification} />
      <NotificationStack.Screen name="Profile" component={Profile} />
      {/* <NotificationStack.Screen name="Logout" component={Logout} /> 
      <NotificationStack.Screen name="Home" component={Survival} /> */}
      <NotificationStack.Screen name="Feedback" component={Feedback} />
      <NotificationStack.Screen name="Settings" component={Settings} />



      <NotificationStack.Screen name="eventEdit" component={eventEdit} />
      <NotificationStack.Screen name="eventDetails" component={eventDetails} />
      <NotificationStack.Screen name="pendingEventsDetails" component={pendingEventsDetails} />
      <NotificationStack.Screen name="EventMembers" component={EventMembers} />
      <NotificationStack.Screen name="eventComplete" component={eventComplete} />
      <NotificationStack.Screen name="HomeScreen" component={HomeScreen} />
        <NotificationStack.Screen name="AddChat" component={AddChatScreen} />
        <NotificationStack.Screen name="ChatScreen" component={ChatScreen} />
        {/* <NotificationStack.Screen name="PersonToPerson" component={PersonToPerson} /> */}
      <NotificationStack.Screen name="survivalList" component={survivalList} />
      <NotificationStack.Screen name="stafRef" component={stafRef} />
      <NotificationStack.Screen name="Oweeks" component={Oweeks} />
     
      
      <NotificationStack.Screen name="AppFeedback" component={AppFeedback} />
  
      <NotificationStack.Screen name="CommunityDetails" component={CommunityDetails} />
      <NotificationStack.Screen name="Search" component={Search} />
      <NotificationStack.Screen name="CommunityCreate" component={CommunityCreate} />
      <NotificationStack.Screen name="NewEvent" component={NewEvent} />
      <NotificationStack.Screen name="CommunityNew" component={CommunityNew} />
      <NotificationStack.Screen name="communityEdit" component={communityEdit} />
      <NotificationStack.Screen name="CommunityMembers" component={CommunityMembers} />
      <NotificationStack.Screen name="CommunityComplete" component={CommunityComplete} />
      <NotificationStack.Screen name="UserScreen" component={UserScreen} />
      <NotificationStack.Screen name="Logout" component={Logout} /> 
      <NotificationStack.Screen name="ReportMember" component={ReportMember} />
      <NotificationStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <NotificationStack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <NotificationStack.Screen name="AccountClosure" component={AccountClosure} />
      <NotificationStack.Screen name="Chat" component={Chat} />
    </NotificationStack.Navigator>
  );
};

export default NotificationStackScreen;
