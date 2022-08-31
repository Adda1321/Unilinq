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
import PersonToPerson from '../../Core/Chat/PersonToPerson';
const SurvivalStack = createStackNavigator();

const SurvivalStackScreen = () => {
  return (
    <SurvivalStack.Navigator mode="card" headerMode="none" >
      <SurvivalStack.Screen name="Home" component={Survival} />
      <SurvivalStack.Screen name="eventEdit" component={eventEdit} />
      <SurvivalStack.Screen name="eventDetails" component={eventDetails} />
      <SurvivalStack.Screen name="pendingEventsDetails" component={pendingEventsDetails} />
      <SurvivalStack.Screen name="EventMembers" component={EventMembers} />
      <SurvivalStack.Screen name="eventComplete" component={eventComplete} />
      <SurvivalStack.Screen name="HomeScreen" component={HomeScreen} />
        <SurvivalStack.Screen name="AddChat" component={AddChatScreen} />
        <SurvivalStack.Screen name="ChatScreen" component={ChatScreen} />
        <SurvivalStack.Screen name="PersonToPerson" component={PersonToPerson} />
      <SurvivalStack.Screen name="survivalList" component={survivalList} />
      <SurvivalStack.Screen name="stafRef" component={stafRef} />
      <SurvivalStack.Screen name="Oweeks" component={Oweeks} />
      <SurvivalStack.Screen name="Profile" component={Profile} />
      <SurvivalStack.Screen name="Feedback" component={Feedback} />
      <SurvivalStack.Screen name="AppFeedback" component={AppFeedback} />
      <SurvivalStack.Screen name="Settings" component={Settings} />
      <SurvivalStack.Screen name="CommunityDetails" component={CommunityDetails} />
      <SurvivalStack.Screen name="Search" component={Search} />
      <SurvivalStack.Screen name="CommunityCreate" component={CommunityCreate} />
      <SurvivalStack.Screen name="NewEvent" component={NewEvent} />
      <SurvivalStack.Screen name="CommunityNew" component={CommunityNew} />
      <SurvivalStack.Screen name="communityEdit" component={communityEdit} />
      <SurvivalStack.Screen name="CommunityMembers" component={CommunityMembers} />
      <SurvivalStack.Screen name="CommunityComplete" component={CommunityComplete} />
      <SurvivalStack.Screen name="UserScreen" component={UserScreen} />
      <SurvivalStack.Screen name="Logout" component={Logout} /> 
      <SurvivalStack.Screen name="ReportMember" component={ReportMember} />
      <SurvivalStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <SurvivalStack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <SurvivalStack.Screen name="AccountClosure" component={AccountClosure} />
      <SurvivalStack.Screen name="Chat" component={Chat} />
    </SurvivalStack.Navigator>
  );
};

export default SurvivalStackScreen;
