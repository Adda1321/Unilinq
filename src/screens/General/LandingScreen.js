import React,{useState,useEffect} from 'react'
import { View, Text,ImageBackground,TouchableOpacity,TextInput,StyleSheet,ScrollView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ImageView from '../../components/Image';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images } from '../../utils'
import {appStyles} from '../../style'
import ButtonText from '../../components/Button';
import SimpleTextInput from '../../components/SimpleInput';
import {signUp, signIn} from '../../Core/Auth/auth';
import {useDispatch} from 'react-redux'
import {connect} from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import {
    widthPercentageToDP ,
    heightPercentageToDP ,
  } from 'react-native-responsive-screen';
  import {getCommunity} from '../../Core/Communities/getCommunity';
  import {getEvents} from '../../Core/Events/getEvents';
import { SignIn } from '../../components/actions';
import {firestore,auth} from '../../Core/config/config'
import AsyncStorage from '@react-native-community/async-storage';
import { getNotifications } from '../../Core/Notifications/getNotification';
 function Landing(props) {
    const dispatch = useDispatch()
    const navigation = useNavigation();
    useEffect(()=>{
        const fetch  = async () =>{
         
            var email = await AsyncStorage.getItem('email');
            var password = await AsyncStorage.getItem('password');
           
            if(email !=undefined){
              await getCommunity(dispatch);
              await getNotifications(dispatch)
              await getEvents(dispatch);
             
        await signIn(email,password, dispatch,(res)=>{
         
        });
        navigation.navigate('AllTabs', {
          screen: 'Screen_1', params: {
              screen: 'Home',params:{
                login:true
              }
          }
      });
            }
            else {
             
                navigation.navigate('Auth')
            }
        }
        fetch()
    },[])
    return (
        <View style={{flex:1}}>
     {/* <ScrollView> */}
             <ImageBackground source={require('../../images/backimage.png')} style={styles.loginImageContainer} resizeMode="cover" >
             <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <ImageView
                  src={require('../../images/appLogo.png')}
                  imageStyle={styles.loginprofileTopBackImageTwo}
                />
                </View>
            </ImageBackground>
           
            {/* Scro</llView> */}
        </View>
    )
}
// function mapStateToProp(state) {
//     return {
//       users: state.users,
//     };
//   }
 
const styles = StyleSheet.create(appStyles)
export default Landing;