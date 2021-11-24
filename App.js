import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import {AllTabs} from './src/navigators/RootNaviagtor'
import { NavigationContainer } from '@react-navigation/native';
import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {Provider} from 'react-redux';
import  reducers from './src/components/reducers'
import SplashScreen from 'react-native-splash-screen'


export default function App(props) {
  React.useEffect(()=>{
    SplashScreen.hide()
   },[])
  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)
  return (
    <Provider store ={createStoreWithMiddleware(reducers)}>
    <NavigationContainer>
      <AllTabs />
    </NavigationContainer>
    </Provider>
  )
}
