import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImageView from '../../components/Image';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from '../../utils';
import {appStyles} from '../../style';
import ButtonText from '../../components/Button';
import SimpleTextInput from '../../components/SimpleInput';
import {signUp, signIn} from '../../Core/Auth/auth';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import functions from '@react-native-firebase/functions';
import messaging from '@react-native-firebase/messaging';
import {SignIn} from '../../components/actions';
import {firestore, auth} from '../../Core/config/config';
function Login(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [curpas, setCurPas] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const changeText = txt => {
    setEmail(txt);
    // setBioText(txt)
  };
  const changePassword = txt => {
    setPass(txt);
    // setBioText(txt)
  };
  const goToHome = async () => {
    setLoading(true);
    if (email == '') {
      Alert.alert('Alert', 'Please enter email');
      setLoading(false);
    } else if (pass == '') {
      Alert.alert('Alert', 'Please enter password');
      setLoading(false);
    } else {
      await signIn(email, pass, dispatch, res => {
        Alert.alert('Alert', res);
        setLoading(false);
      });
    }
  };
  useEffect(() => {
    if (props.users.first_name != undefined && props.users.first_name != '') {
      setLoading(false);
      navigation.navigate('AllTabs', {
        screen: 'Screen_1',
        params: {
          screen: 'Home',
          params: {
            login: false,
          },
        },
      });
    }
  }, [props.users.first_name]);

  const handleValidUser = (val, inputfield) => {};

  return (
    <View style={{flex: 1}}>
      {/* <ScrollView> */}
      <ImageBackground
        source={require('../../images/backimage.png')}
        style={styles.loginImageContainer}
        resizeMode="stretch">
        <View style={{flex: 1, margin: 20}}>
          <View
            style={{
              marginTop: heightPercentageToDP('7%'),
              marginBottom: heightPercentageToDP('5.5%'),
            }}>
            <ImageView
              src={require('../../images/appLogo.png')}
              imageStyle={styles.loginprofileTopBackImageTwo}
            />
          </View>
          <View style={{paddingTop: 5}}>
            <Text style={styles.loginsettingTextInputText}>
              University email address
            </Text>

            <SimpleTextInput
              inputStyle={[
                styles.settingTextInputContainerTop,
                {color: '#000'},
              ]}
              placeholder={'hello@a-c.me'}
              handleValidUser={(val, data) => handleValidUser(val, data)}
              data={'lastName'}
              value={email}
              textInputChange={txt => changeText(txt)}
            />
            {/* {data.isValidUser && data.secondInput && (
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
          )} */}
          </View>
          <View style={{paddingTop: 8}}>
            <Text style={styles.loginsettingTextInputText}>Password</Text>
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
                style={[styles.searchTextInputStyle, {color: '#000'}]}
                // onChangeText={onPress}
                // value={value}
                autoCorrect={false}
                placeholder="Password"
                secureTextEntry={curpas}
                placeholderTextColor={'#8b86ba'}
                onChangeText={val => changePassword(val)}
                value={pass}
                //   onEndEditing={e => handleCurrentPasswordValid(e.nativeEvent.text)}
                // {...props}

                selectionColor={'black'}
              />
              <TouchableOpacity onPress={() => setCurPas(!curpas)}>
                {!curpas ? (
                  <ImageView
                    src={require('../../images/password.png')}
                    imageStyle={{width: 32, height: 32, marginRight: 10}}
                    Color="#00035c"
                  />
                ) : (
                  <Icon
                    name="eye-off"
                    size={22}
                    color="#00035c"
                    style={{marginRight: 15}}
                  />
                )}
              </TouchableOpacity>
            </View>
            {/* {curpassValid && (
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
          )} */}
          </View>
          <View
            style={styles.logincreateCommunityfeedbackBottomButtonContainer}>
            {/* <ButtonText text="Login" inputStyle={[styles.feedbackBottomSendContainer, { backgroundColor: '#fff' }]} GoNext={() => this.communityAdd()} /> */}
            <TouchableOpacity
              style={[
                styles.feedbackBottomSendContainer,
                {backgroundColor: '#fff'},
              ]}
              onPress={() => goToHome()}>
              <View
                style={{
                  justifyContent: 'center',
                  paddingHorizontal: widthPercentageToDP('2%'),
                }}>
                <Text style={styles.loginsettingButtonTextStyle}>
                  {'Login'}
                </Text>
              </View>
              <View style={styles.loginfeedbackImageVerticalLine} />
              {loading ? (
                <ActivityIndicator
                  size="small"
                  color="#0000ff"
                  style={styles.loginfeedbackImageLeftArrow}
                />
              ) : (
                <ImageView
                  src={require('../../images/purpleright.png')}
                  imageStyle={styles.loginfeedbackImageLeftArrow}
                />
              )}
            </TouchableOpacity>
            <View style={[styles.feedbackBottomButtonInner]}>
              <Text style={styles.loginfeedbackBottomCancelText}>
                Forgot Password?
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 5, paddingVertical: 20}}>
            <Text style={styles.loginfeedbackBottomCancelText}>
              Don't have an account?
            </Text>
            <Text
              style={[styles.loginfeedbackBottomCancelText, {marginLeft: 20}]}>
              Sign up today
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 70,
            }}>
            <TouchableOpacity>
              <Text style={styles.loginfeedbackBottomCancelText}>
                Contact Us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.loginfeedbackBottomCancelText,
                  {marginLeft: 20},
                ]}>
                Privacy & terms
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* Scro</llView> */}
    </View>
  );
}
function mapStateToProp(state) {
  return {
    users: state.users,
    getCommunity: state.getCommunity,
    getAllJoinedCommunity: state.getAllJoinedCommunity,
  };
}

const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(Login);
