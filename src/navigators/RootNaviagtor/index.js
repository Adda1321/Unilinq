import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../../components/BottomBar';
import HomeScreen from '../../screens/Home'
import Communites from '../../screens/Communities'
import Events from '../../screens/Events'
import HomeStack from '../HomeNavigator'
import NotificationStackScreen from '../NotificationNavigator';
const Tab = createBottomTabNavigator();
export function AllTabs() {
    return (
      <Tab.Navigator  tabBar={(props) => <CustomTabBar {...props} />}>
   
        <Tab.Screen 
          name="Screen_1" 
          component={HomeStack}
          options={{
            headerShown: false,
          }}
          />
   
        <Tab.Screen 
          name="Screen_2" 
          component={NotificationStackScreen}
          options={{
            headerShown: false,
          }} />
   
        <Tab.Screen 
          name="Screen_3" 
          component={Events}
          options={{
            headerShown: false,
          }} />
   
      </Tab.Navigator>
    );
  }