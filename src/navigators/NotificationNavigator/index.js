import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile'
import Feedback from '../../screens/FeedBack'
import Settings from '../../screens/Settings'
import Notification from '../../screens/Notification'
const NotificationStack = createStackNavigator();

const NotificationStackScreen = () => {
  return (
    <NotificationStack.Navigator mode="card" headerMode="none">
      <NotificationStack.Screen name="Notification" component={Notification} />
      <NotificationStack.Screen name="Profile" component={Profile} />
      <NotificationStack.Screen name="Feedback" component={Feedback} />
      <NotificationStack.Screen name="Settings" component={Settings} />
    </NotificationStack.Navigator>
  );
};

export default NotificationStackScreen;
