/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from "@react-native-community/push-notification-ios";

// messaging().onMessage(async (remoteMessage) => {
//     console.log(
//       'Notification caused app to open from quit state:',
     
//     );
//   PushNotificationIOS.addNotificationRequest({
//   id: remoteMessage.messageId,
//   body: remoteMessage.notification.body,
//   title: remoteMessage.notification.title,
//   userInfo: remoteMessage.data,
//   });
//   });
AppRegistry.registerComponent(appName, () => App);
