import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import ImageView from '../../components/Image';
import {Images} from '../../utils';
import {appStyles} from '../../style';
import {useNavigation} from '@react-navigation/native';
import ButtonText from '../../components/Button';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {updateProfile} from '../../Core/Profile/updataNotification';
import {signout} from '../../Core/Auth/auth';
import {useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import {
  SignUp,
  SignIn,
  AllJoinedGetCommunity,
  Logout,
} from '../../components/actions/index';

export default function index(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const logout = async () => {
    await AsyncStorage.removeItem('email');
    await updateProfile(props.route.params.userid, '');
    signout(async res => {
      await dispatch(Logout());
      //  await dispatch(SignIn(undefined))
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: 'Auth',
              params: {auth: false},
            },
          ],
        }),
      );
      // navigation.navigate('Auth',{auth:false})
    });
  };
  return (
    <SafeAreaView style={[styles.feedbackContainer, {padding: 10}]}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.29,
          shadowRadius: 4.65,

          elevation: 7,
          borderTopRightRadius: 40,
        }}>
        <TouchableOpacity
          style={styles.feedbackCrossButton}
          onPress={() => navigation.goBack()}>
          <ImageView
            src={Images.cross}
            imageStyle={styles.feedbackCrossImageView}
          />
        </TouchableOpacity>
        <View style={styles.logoutfeedbackCourseContainer}>
          <View style={styles.logoutfeedbackInnerCourseContainer}>
            <Text style={styles.logoutfeedbackHeaderText}>Are you sure?</Text>
          </View>
          {/* <View style={[styles.feedbackBottomButtonContainer,{marginTop:35,marginRight:15}]}>
           <View  style={styles.feedbackBottomButtonInner}> 
                <Text style={styles.feedbackBottomCancelText}>Cancel</Text>
               </View>
           <ButtonText text="Logout" inputStyle={styles.feedbackBottomSendContainer} />
               
               
           </View> */}
          {/* <View style={[styles.createCommunityfeedbackBottomButtonContainer,{justifyContent:'flex-end',marginRight:15,marginTop:25}]}>
           <TouchableOpacity  style={[styles.feedbackBottomButtonInner]} onPress={()=>navigation.goBack()}> 
                <Text style={styles.feedbackBottomCancelText}>Cancel</Text>
               </TouchableOpacity>
    <TouchableOpacity  style={[styles.feedbackBottomSendContainer,{backgroundColor:'#00035c'}]}  onPress={()=>logout()}>
    <View style={{ justifyContent: 'center', marginBottom:2,paddingHorizontal: widthPercentageToDP('2%') }}>
        <Text style={styles.logoutsettingButtonTextStyle}>{'Logout'}</Text>
      </View>
    <View
style={styles.feedbackImageVerticalLine}
/>
 <ImageView src={Images.short_right2x} imageStyle={styles.feedbackImageLeftArrow}/>

    </TouchableOpacity>
             
             
           </View> */}
          <View
            style={[
              styles.logoutcreateCommunityfeedbackBottomButtonContainer,
              {marginRight: 25, marginTop: 25},
            ]}>
            {/* <ButtonText text="Login" inputStyle={[styles.feedbackBottomSendContainer, { backgroundColor: '#fff' }]} GoNext={() => this.communityAdd()} /> */}
            <TouchableOpacity
              style={styles.feedbackBottomButtonInner}
              onPress={() => navigation.goBack()}>
              <Text style={styles.feedbackBottomCancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.feedbackBottomSendContainer,
                {backgroundColor: '#00035c'},
              ]}
              onPress={() => logout()}>
              <View
                style={{
                  justifyContent: 'center',
                  paddingHorizontal: widthPercentageToDP('2%'),
                }}>
                <Text style={styles.logoutsettingButtonTextStyle}>
                  {'Logout'}
                </Text>
              </View>
              <View style={styles.feedbackImageVerticalLine} />
              <ImageView
                src={Images.short_right2x}
                imageStyle={styles.feedbackImageLeftArrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create(appStyles);
