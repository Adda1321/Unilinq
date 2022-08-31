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
import eventDetails from '../../screens/Events/eventDetails';
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator mode="card" headerMode="none" >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Feedback" component={Feedback} />
      <HomeStack.Screen name="AppFeedback" component={AppFeedback} />
      <HomeStack.Screen name="Settings" component={Settings} />
      <HomeStack.Screen name="CommunityDetails" component={CommunityDetails} />
      <HomeStack.Screen name="eventDetails" component={eventDetails} />
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen name="CommunityCreate" component={CommunityCreate} />
      <HomeStack.Screen name="NewEvent" component={NewEvent} />
      <HomeStack.Screen name="CommunityNew" component={CommunityNew} />
      <HomeStack.Screen name="communityEdit" component={communityEdit} />
      <HomeStack.Screen name="CommunityMembers" component={CommunityMembers} />
      <HomeStack.Screen name="CommunityComplete" component={CommunityComplete} />
      <HomeStack.Screen name="UserScreen" component={UserScreen} />
      <HomeStack.Screen name="Logout" component={Logout} />
      <HomeStack.Screen name="ReportMember" component={ReportMember} />
      <HomeStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <HomeStack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <HomeStack.Screen name="AccountClosure" component={AccountClosure} />
      <HomeStack.Screen name="Chat" component={Chat} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
