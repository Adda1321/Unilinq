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
import UserScreen from '../../screens/UserScreen'
import ReportMember from '../../screens/ReportMember'
import PrivacyPolicy from '../../screens/General/PrivacyPolicy';
import TermsAndConditions from '../../screens/General/TermsAndConditions';
import AccountClosure from '../../screens/General/AccountClosure';
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator mode="card" headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Feedback" component={Feedback} />
      <HomeStack.Screen name="Settings" component={Settings} />
      <HomeStack.Screen name="CommunityDetails" component={CommunityDetails} />
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen name="CommunityCreate" component={CommunityCreate} />
      <HomeStack.Screen name="CommunityNew" component={CommunityNew} />
      <HomeStack.Screen name="UserScreen" component={UserScreen} />
      <HomeStack.Screen name="ReportMember" component={ReportMember} />
      <HomeStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <HomeStack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <HomeStack.Screen name="AccountClosure" component={AccountClosure} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
