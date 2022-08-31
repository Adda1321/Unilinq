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
import Events from '../../screens/Events';
import eventDetails from '../../screens/Events/eventDetails';
import eventEdit from '../../screens/Events/eventEdit';

const EventStack = createStackNavigator();

const EventStackScreen = () => {
  return (
    <EventStack.Navigator mode="card" headerMode="none" >
      <EventStack.Screen name="Events" component={Events} />
      <EventStack.Screen name="eventDetails" component={eventDetails} />
      <EventStack.Screen name="eventEdit" component={eventEdit} />
      <EventStack.Screen name="Profile" component={Profile} />
      <EventStack.Screen name="Feedback" component={Feedback} />
      <EventStack.Screen name="AppFeedback" component={AppFeedback} />
      <EventStack.Screen name="Settings" component={Settings} />
      <EventStack.Screen name="CommunityDetails" component={CommunityDetails} />
      <EventStack.Screen name="Search" component={Search} />
      <EventStack.Screen name="CommunityCreate" component={CommunityCreate} />
      <EventStack.Screen name="CommunityNew" component={CommunityNew} />
      <EventStack.Screen name="communityEdit" component={communityEdit} />
      <EventStack.Screen name="CommunityMembers" component={CommunityMembers} />
      <EventStack.Screen name="CommunityComplete" component={CommunityComplete} />
      <EventStack.Screen name="UserScreen" component={UserScreen} />
      <EventStack.Screen name="Logout" component={Logout} />
      <EventStack.Screen name="ReportMember" component={ReportMember} />
      <EventStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <EventStack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <EventStack.Screen name="AccountClosure" component={AccountClosure} />
      <EventStack.Screen name="Chat" component={Chat} />
    </EventStack.Navigator>
  );
};

export default EventStackScreen;
