import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {appStyles} from '../../style';
import {Images} from '../../utils';
import ImageView from '../../components/Image';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';
import SimpleTextInput from '../../components/SimpleInput';
import * as Animatable from 'react-native-animatable';
import ButtonText from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {editProfileName} from '../../Core/Profile/editProfileName'
import { last, update } from 'lodash';
import {useDispatch} from 'react-redux'
function index(props) {
  const dispatch = useDispatch()
  const [data, setData] = React.useState({
    message: 'Maximum characters:10',
    firstInput: false,
    secondInput: false,
    isValidUser: false,
  });
  const [emailValid, setemailValid] = useState(false);
  const [curpas, setCurPas] = useState(true);
  const [newpas, setNewPas] = useState(true);
  const [curpassValid, setCurPassValid] = useState(false);
  const [newpassValid, setNewPassValid] = useState(false);
  const [firstName, setFirstName] = useState(props.users?.first_name);
  const [lastName, setLastName] = useState(props.users?.last_name);
  const navigation = useNavigation();
  const handleValidUser = (val, inputfield) => {
    console.log('Value=====>', data);
    if (val.trim().length >= 10 && inputfield == 'firstName') {
      // console.log("Data====>",data)
      setData({
        ...data,
        firstInput: true,
        isValidUser: true,
      });
    } else if (val.trim().length >= 10 && inputfield == 'lastName') {
      setData({
        ...data,
        secondInput: true,
        isValidUser: true,
      });
    } else if (val.trim().length <= 10 && inputfield == 'firstName') {
      setData({
        ...data,
        firstInput: false,
        isValidUser: true,
      });
    } else if (val.trim().length <= 10 && inputfield == 'lastName') {
      setData({
        ...data,
        secondInput: false,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        firstInput: false,
        secondInput: false,
        isValidUser: false,
      });
    }
  };
  const changeText = txt => {
    setFirstName(txt)
    // setBioText(txt)
  };
  const handleEmailValid = val => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if (re.test(String(val).toLowerCase())) {
      setemailValid(false);
    } else {
      setemailValid(true);
    }
  };
  const handleCurrentPasswordValid = val => {
    if (val.trim().length >= 15 && val.trim().length <= 6) {
      setCurPassValid(false);
    } else {
      setCurPassValid(true);
    }
  };
  const handleNewPasswordValid = val => {
    if (val.trim().length >= 15 && val.trim().length <= 6) {
      setNewPassValid(false);
    } else {
      setNewPassValid(true);
    }
  };
  const update = () => {
    console.log("rest=============>")
    if (firstName.trim().length >=  10) {
      // console.log("Value=====>",val)
      setData({
        ...data,
        firstInput: true,
        isValidUser: true,
      });
    }
    else if(lastName.trim().length >= 10){
      setData({
        ...data,
        secondInput: true,
        isValidUser: true,
      });
    }
     else {
      editProfileName(props.users.id,firstName,lastName,dispatch)

    }
    
   
      // Alert.alert(
      //   'Profile Edited!',
        
      // );
    
    
  // setImage(null);
  }
  return (
    <KeyboardAvoidingView style={styles.settingScreenContainer}>
      <ScrollView>
        <ImageBackground
          source={Images.profileMainImage}
          style={styles.SettingImageContainer}
          >
          <View style={styles.settingTopButtonsContainer}>
            <View style={styles.settingTopButtons}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ImageView
                  src={Images.left_arrow}
                  imageStyle={styles.profileTopBackImageTwo}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.settingScreenHeaderTextContainer}>
          <Text style={styles.settingScreenHeaderText}>Settings</Text>
          <View style={styles.settingScreenHorizontalLine} />
        </View>
        <View style={styles.settingScreenProfileHeader}>
          <Text style={styles.settingScreenProfileText}>Profile</Text>
        </View>
        <View style={styles.settingScreenProfileHeader}>
          <Text style={styles.settingTextInputText}>First Name</Text>

          <SimpleTextInput
            inputStyle={styles.settingTextInputContainerTop}
            placeholder={'Anders'}
            handleValidUser={(val, data) => handleValidUser(val, data)}
            data={'firstName'}
            value={firstName}
            textInputChange={txt => changeText(txt)}
          />
          {data.isValidUser && data.firstInput && (
            <Animatable.View
              animation="fadeInLeft"
              duration={500}
              style={{alignItems: 'flex-start', width: '85%', marginTop: 10}}>
              <Text
                style={{
                  color: '#E4434E',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 12,
                }}>
                {data.message}
              </Text>
            </Animatable.View>
          )}
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 5}}>
          <Text style={styles.settingTextInputText}>Last Name</Text>

          <SimpleTextInput
            inputStyle={styles.settingTextInputContainerTop}
            placeholder={'Chow'}
            handleValidUser={(val, data) => handleValidUser(val, data)}
            data={'lastName'}
            value={lastName}
            textInputChange={txt => changeTText(txt)}
          />
          {data.isValidUser && data.secondInput && (
            <Animatable.View
              animation="fadeInLeft"
              duration={500}
              style={{alignItems: 'flex-start', width: '85%', marginTop: 10}}>
              <Text
                style={{
                  color: '#E4434E',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 12,
                }}>
                {data.message}
              </Text>
            </Animatable.View>
          )}
        </View>
        <View style={styles.settingScreenEducationHeader}>
          <Text style={styles.settingScreenEducationHeaderText}>Education</Text>
        </View>
        <View style={styles.settingTextInputContainer}>
          <Text style={styles.settingScreenEducationText}>
            Swinburne University of Technology
          </Text>
        </View>
        <View style={styles.settingTextInputContainer}>
          <Text style={styles.settingScreenEducationCertificate}>
            Certificate III in Information, Digital...
          </Text>
        </View>
        <View style={styles.settingScreenProfileHeader}>
          <Text style={styles.settingScreenProfileText}>
            Account & Security
          </Text>
        </View>
        <View style={styles.settingScreenEmailContainer}>
          <Text style={styles.settingTextInputText}>Email address</Text>
          <View style={styles.settingTextInputContainerTop}>
            <TextInput
              placeholder={'hananwaqar7@gmail.com'}
              placeholderTextColor={'#8b86ba'}
              style={styles.searchTextInputStyle}
              selectionColor={'black'}
              value={props.users?.email}
              editable={false}
              // autoCapitalize="none"
              // onChangeText={(val) => textInputChange(val)}
              onEndEditing={e => handleEmailValid(e.nativeEvent.text)}
            />
          </View>
          {emailValid && (
            <Animatable.View
              animation="fadeInLeft"
              duration={500}
              style={{alignItems: 'flex-start', width: '85%', marginTop: 10}}>
              <Text
                style={{
                  color: '#E4434E',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 12,
                }}>
                {'Please enter valid email address'}
              </Text>
            </Animatable.View>
          )}
        </View>
        <View style={styles.settingScreenPassword}>
          <Text style={styles.settingTextInputText}>Current Password</Text>
          <View
            style={[
              styles.settingTextInputContainerTop,
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <TextInput
              style={styles.searchTextInputStyle}
              // onChangeText={onPress}
              // value={value}
              autoCorrect={false}
              placeholder="Password"
              secureTextEntry={curpas}
              placeholderTextColor={'#8b86ba'}
              onEndEditing={e => handleCurrentPasswordValid(e.nativeEvent.text)}
              // {...props}
              selectionColor={'black'}
            />
            <TouchableOpacity onPress={() => setCurPas(!curpas)}>
              {!curpas ? (
                <ImageView
                  src={require('../../images/password.png')}
                  imageStyle={{width: 32, height: 32,marginRight:10}}
                  Color="#00035c"
                />
              ) : (
                <Icon name="eye-off" size={22} color="#00035c" style={{marginRight:15}} />
              )}
            </TouchableOpacity>
          </View>
          {curpassValid && (
            <Animatable.View
              animation="fadeInLeft"
              duration={500}
              style={{alignItems: 'flex-start', width: '93%', marginTop: 10}}>
              <Text
                style={{
                  color: '#E4434E',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 12,
                }}>
                {'Password must be between 6 to 15 characters'}
              </Text>
            </Animatable.View>
          )}
        </View>
        <View style={styles.settingScreenPassword}>
          <Text style={styles.settingTextInputText}>New Password</Text>
          <View
            style={[
              styles.settingTextInputContainerTop,
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <TextInput
              style={styles.searchTextInputStyle}
              // onChangeText={onPress}
              // value={value}
              autoCorrect={false}
              placeholder="Password"
              secureTextEntry={newpas}
              placeholderTextColor={'#8b86ba'}
              onEndEditing={e => handleNewPasswordValid(e.nativeEvent.text)}
              // {...props}
              selectionColor={'black'}
            />
            <TouchableOpacity onPress={() => setNewPas(!newpas)}>
              {!newpas ? (
                <ImageView
                  src={require('../../images/password.png')}
                  imageStyle={{width: 32, height: 32,marginRight:10}}
                  Color="#00035c"
                />
              ) : (
                <Icon name="eye-off" size={22} color="#00035c" style={{marginRight:15}}/>
              )}
            </TouchableOpacity>
          </View>
          {newpassValid && (
            <Animatable.View
              animation="fadeInLeft"
              duration={500}
              style={{alignItems: 'flex-start', width: '93%', marginTop: 10}}>
              <Text
                style={{
                  color: '#E4434E',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 12,
                }}>
                {'Password must be between 6 to 15 characters'}
              </Text>
            </Animatable.View>
          )}
        </View>
        <View style={styles.settingScreenProfileUpdateHeader}>
          <Text style={styles.settingScreenProfileText}>Updates</Text>
        </View>

        <View style={styles.settingScreenToggleContainer}>
          <Text style={styles.settingScreenToggleContainerText}>
            Push Notifications
          </Text>
          <ToggleSwitch
            isOn={false}
            onColor="white"
            offColor="#63f0a4"
            label=""
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="medium"
            onToggle={isOn => console.log('changed to : ', isOn)}
          />
        </View>
        <View style={styles.settingScreenHorizontal} />
        <View style={styles.settingScreenToggleContainer}>
          <Text style={styles.settingScreenToggleContainerText}>
            Email Update
          </Text>
          <ToggleSwitch
            isOn={false}
            onColor="white"
            offColor="#63f0a4"
            label=""
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="medium"
            onToggle={isOn => console.log('changed to : ', isOn)}
          />
        </View>
        <View style={styles.settingScreenHorizontal} />
        <TouchableOpacity
          style={styles.settingScreenTopToggleContainer}
          onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text style={styles.settingScreenToggleContainerText}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <View style={styles.settingScreenHorizontal} />
        <TouchableOpacity
          style={styles.settingScreenToggleContainer}
          onPress={() => navigation.navigate('TermsAndConditions')}>
          <Text style={styles.settingScreenToggleContainerText}>
            Terms & Conditions
          </Text>
        </TouchableOpacity>
        <View style={styles.settingScreenHorizontal} />
        <View style={styles.settingScreenToggleContainer}>
          <Text style={styles.settingScreenToggleContainerText}>
            Contact Us
          </Text>
        </View>
        <View style={styles.settingScreenHorizontal} />
        <TouchableOpacity
          style={styles.settingScreenToggleContainer}
          onPress={() => navigation.navigate('AccountClosure')}>
          <Text style={styles.settingScreenToggleContainerText}>
            Close Account
          </Text>
        </TouchableOpacity>
        <View style={styles.settingScreenHorizontal} />
        <ButtonText
          text="Update"
          inputStyle={styles.settingUpdateButtonContainer}
          onPress={()=>update()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
function mapStateToProp(state) {
  return {
    users: state.users,
   
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(index);