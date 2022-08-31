import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../../components/BottomBar';

import HomeStack from '../HomeNavigator';
import SurvivalStack from '../SurvivalGuideStack';
import EventStack from '../EventsNavigator';
import FavouritesStackScreen from "../FavouritesNavigator"
import NotificationStackScreen from '../NotificationNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from '../../screens/Auth/Login';

import Landing from '../../screens/General/LandingScreen';

// import Survival from '../../screens/'
const Tab = createBottomTabNavigator();
const HomeStackScreen = createStackNavigator();
function AllTabs() {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Screen_1"
        component={SurvivalStack}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Screen_2"
        component={NotificationStackScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Screen_3"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Screen_4"
        component={EventStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Screen_5"
        component={FavouritesStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
const HomeStackScreenContainer = () => {
  return (
    <HomeStackScreen.Navigator mode="card" headerMode="none">
      <HomeStackScreen.Screen name="Landing" component={Landing} />
      <HomeStackScreen.Screen name="Auth" component={Auth} />
      <HomeStackScreen.Screen name="AllTabs" component={AllTabs} />

      {/* <HomeStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <HomeStack.Screen name="TermsAndConditions" component={TermsAndConditions} />
    */}
    </HomeStackScreen.Navigator>
  );
};

export default HomeStackScreenContainer;
