import React,{useEffect} from 'react'
import { View, Text,Platform} from 'react-native'
import HomeStackScreenContainer from './src/navigators/RootNaviagtor'
import { NavigationContainer } from '@react-navigation/native';
import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {Provider} from 'react-redux';
import  reducers from './src/components/reducers'
import SplashScreen from 'react-native-splash-screen'
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';
import { auth } from './src/Core/config/config';
import {signIn} from './src/Core/Auth/auth'
import {useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import { firebase } from '@react-native-firebase/firestore';

export default function App(props) {
  // const dispatch = useDispatch()
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
      // PushNotificationIOS.addEventListener(
      //   'notification',
      //   onRemoteNotification,
      // );
      if(Platform.OS==='ios')
      {
      messaging()
        .getToken()
        .then((token) => {
          setFCMTokenToLocalStorage(token);
        });
      }
    }
  };

  const setFCMTokenToLocalStorage = async (token) => {
    console.log("TOkrndddd=======>",token)
    AsyncStorage.setItem('token',token.toString())
    // await AsyncStorage.setItem('fireBaseToken', token);
  };

  React.useEffect(()=>{
  
   
    SplashScreen.hide()
   
      requestUserPermission();
    
    
    // firebase.notifications().onNotification((notification) => { // your handling goes here })
    //   console.log(
    //     'Notification caused app to open from quit state:',
       
    //   );

    // })
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOkrndddd=======>",token)
        if(Platform.OS === 'android'){
          AsyncStorage.setItem('token',token.token.toString())
        }
        // console.log("TOKEN:", token);
      },
     
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION ====================>>>>",notification)
        if(Platform.OS==="android"){

          PushNotification.localNotification(notification)
        }
        if(Platform.OS === 'ios'){
          messaging()
          .getInitialNotification()
          .then(remoteMessage => {
            if (remoteMessage) {
              console.log(
                'Notification caused app to open from quit state:',
               
              );
              
            //   setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
            }
            // setLoading(false);
                
          });
        }
      
      }
      
      });
     
    //    messaging().onMessage(async (remoteMessage) => {
    //       PushNotificationIOS.addNotificationRequest({
    //           id: remoteMessage.messageId,
    //           body: remoteMessage.notification.body,
    //           title: remoteMessage.notification.title,
    //           userInfo: remoteMessage.data,
    //         });
    //       });
    //       messaging().onNotificationOpenedApp(remoteMessage => {
    //         // console.log(
    //         //   'Notification caused app to open from background state:',
    //         //   remoteMessage.notification,
    //         // );
    //         // navigation.navigate(remoteMessage.data.type);
    //       });
    //     // console.log("NOTIFICATION:=========>", notification);
    //   //   this.checkNotification()
    
    //     // process the notification
    
    //     // (required) Called when a remote is received or opened, or local notification is opened
    //     notification.finish(PushNotificationIOS.FetchResult.NoData);
    //   },
    
    //   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    //   onAction: function (notification) {
    //     // console.log("ACTION:", notification.action);
    //     // console.log("NOTIFICATION:", notification);
    
    //     // process the action
    //   },
    
    //   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    //   onRegistrationError: function(err) {
    //     console.error(err.message, err);
    //   },
    
    //   // IOS ONLY (optional): default: all - Permissions to register.
    //   permissions: {
    //     alert: true,
    //     badge: true,
    //     sound: true,
    //   },
    
    //   // Should the initial notification be popped automatically
    //   // default: true
    //   popInitialNotification: true,
    
    //   /**
    //    * (optional) default: true
    //    * - Specified if permissions (ios) and token (android and ios) will requested or not,
    //    * - if not, you must call PushNotificationsHandler.requestPermissions() later
    //    * - if you are not using remote notification or do not have Firebase installed, use this:
    //    *     requestPermissions: Platform.OS === 'ios'
    //    */
    //   requestPermissions: true,
    // });
    // const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    //   PushNotification.localNotification({
    //     message: remoteMessage.notification.body,
    //     title: remoteMessage.notification.title,
        
    //   });
    // });
  
    // return unsubscribe;
    
   
    
   },[])
  useEffect(()=>{
    const unsubscribe =  messaging().onMessage(async (remoteMessage) => {
    console.log(
      'Notification caused app to open from quit state:',
     
    );
  PushNotificationIOS.addNotificationRequest({
  id: remoteMessage.messageId,
  body: remoteMessage.notification.body,
  title: remoteMessage.notification.title,
  userInfo: remoteMessage.data,
  });
  });
   return unsubscribe;
  },[])
  //  const onRemoteNotification = (notification) => {
  //   console.log('notification recieved------', notification);
  //   PushNotification.localNotification({
      
  //     subtitle: notification._alert.title, // (optional) smaller title below notification title
  //     id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
  //     title: notification._alert.title, // (optional)
  //     message: notification._alert.body, // (required)
  //   });
  // };
  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)
  return (
    <Provider store ={createStoreWithMiddleware(reducers)}>
    <NavigationContainer>
      <HomeStackScreenContainer />
    </NavigationContainer>
    </Provider>
  )
}