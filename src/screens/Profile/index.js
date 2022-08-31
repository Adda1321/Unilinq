import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
  PermissionsAndroid,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  Image,
  Alert,
  SafeAreaView,
} from 'react-native';
import {Buffer} from 'buffer';
// var Buffer = require('buffer/').Buffer
import axios from 'axios';
import {Images} from '../../utils';
import ImageView from '../../components/Image';
import {appStyles} from '../../style';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import TextInputWithHeading from '../../components/TextInputWithHeading';
import {imageSettings} from '../../constants';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get('window');
import storage from '@react-native-firebase/storage';
import {useDispatch} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import {signout} from '../../Core/Auth/auth';
import {editProfile} from '../../Core/Profile/editprofile';
import {CommonActions} from '@react-navigation/native';
import {
  SignUp,
  SignIn,
  AllJoinedGetCommunity,
  Logout,
} from '../../components/actions/index';
import AsyncStorage from '@react-native-community/async-storage';
import {updateProfile} from '../../Core/Profile/updataNotification';
import ButtonText from '../../components/Button';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {auth} from '../../Core/config/config';
import {decode, encode} from 'base-64';
import base64 from 'react-native-base64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
function index(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [capturedImage, setCapturedImage] = useState('');
  const [bioText, setBioText] = useState(props.users.bio);
  const [uploading, setUploading] = useState(false);
  const [imageLoad, setImageLoad] = useState(false);
  const [transfered, setTransferred] = useState(0);
  const [posts, setposts] = useState([]);
  const [CourseText, setCourseText] = useState('');
  const [AppText, setAppText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [emptyFieldFeedback, setEmptyFieldFeedback] = useState(false);
  const [emptyCourseFieldFeedback, setEmptyCourseFieldFeedback] =
    useState(false);
  const [data, setData] = React.useState({
    message: 'Maximum characters:200',
    isValidUser: false,
  });
  let imageOptionsSelect;
  let CourseFeedback;
  let AppFeedback;
  let LogoutRef;
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
  const requestPermissionForAndroid = async () => {
    const permisssion = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    return permisssion;
  };

  const sendCourseFeedback = () => {
    // CourseText ? (alert("FIELD CANNOT BE EMPTY") )

    var data = new FormData();
    data.append('user_id', auth()?.currentUser.uid);
    data.append(
      'token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzOTQ3NjE1NSwiZXhwIjoxNjM5NDc5NzU1LCJuYmYiOjE2Mzk0NzYxNTUsImp0aSI6IldxNWh5ZDNjd1A0Yzd5UGEiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.4kKN2TEUE18Mo6VXMF2EcyShg35-sZmrxALfF9rFkok',
    );
    data.append('feedback', CourseText);

    var config = {
      method: 'post',
      url: 'http://54.79.134.48/unilinq-adminpanel/public/index.php/api/course_feedback',
      headers: {
        Authorization: 'Basic dW5pbGlucV9hZG1pbjpROTh7PSs1VkZySw==',
        // ...data.getHeaders()
      },
      data: data,
    };

    if (CourseText.trim() === '') {
      setEmptyCourseFieldFeedback(true);
    } else {
      setEmptyCourseFieldFeedback(false);
      setCourseText(''),
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      CompleteOptionsSelect.open();
    }
  };

  const sendAppFeedback = () => {
    var data = new FormData();
    data.append('user_id', auth()?.currentUser.uid);
    data.append(
      'token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzOTQ3NjE1NSwiZXhwIjoxNjM5NDc5NzU1LCJuYmYiOjE2Mzk0NzYxNTUsImp0aSI6IldxNWh5ZDNjd1A0Yzd5UGEiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.4kKN2TEUE18Mo6VXMF2EcyShg35-sZmrxALfF9rFkok',
    );
    data.append('feedback', AppText);
    data.append(
      'student_name',
      `${props.users.first_name}  ${props.users.last_name}`,
    );

    var config = {
      method: 'post',
      url: 'http://54.79.134.48/unilinq-adminpanel/public/index.php/api/app_feedback',
      headers: {
        Authorization: 'Basic dW5pbGlucV9hZG1pbjpROTh7PSs1VkZySw==',
        // ...data.getHeaders()
      },
      data: data,
    };
    if (AppText.trim() === '') {
      setEmptyFieldFeedback(true);
    } else {
      setEmptyFieldFeedback(false);
      setEmptyCourseFieldFeedback(false);
      setAppText(''),
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      APPCompleteOptionsSelect.open();
    }
  };
  const handleValidUser = val => {
    if (val.trim().length >= 200) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const onPictureCapture = async () => {
    if (Platform.OS === 'android') {
      let permisssion = await requestPermissionForAndroid();
      if (permisssion == PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.openPicker(imageSettings)
          .then(async image => {
            imageOptionsSelect.close();

            await uploadPicture(image);
            setCapturedImage(image);
            // setCapturedImage('Capture Image', image);
          }, 100)
          .catch(err => {
            console.log('Err====>', err);
            imageOptionsSelect.close();
          });
      }
    } else {
      ImagePicker.openPicker(imageSettings)
        .then(async image => {
          imageOptionsSelect.close();

          await uploadPicture(image);
          setCapturedImage(image);
          // setCapturedImage('Capture Image', image);
        }, 100)
        .catch(err => {
          console.log('Err====>', err);
          imageOptionsSelect.close();
        });
    }
  };
  const onPictureGalleryCapture = async () => {
    if (Platform.OS === 'android') {
      let permisssion = await requestPermissionForAndroid();
      if (permisssion == PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(async image => {
          var arr = [];
          arr.push(image);
          await uploadPicture(arr);
          setCapturedImage(arr);
          imageOptionsSelect.close();
          console.log(image);
        });
      }
    } else {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(async image => {
        var arr = [];
        arr.push(image);
        await uploadPicture(arr);
        setCapturedImage(arr);
        imageOptionsSelect.close();
        console.log(image);
      });
    }
  };
  const uploadPicture = async Image => {
    const filename = Image[0].path.substring(
      Image[0].path.lastIndexOf('/') + 1,
    );
    const uploadUri =
      Platform.OS === 'ios'
        ? Image[0].path.replace('file://', '')
        : Image[0].path;

    setUploading(true);
    setTransferred(0);
    const task = storage().ref(filename).putFile(uploadUri);
    // set progress state
    task.on('state_changed', snapshot => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
      );
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    await task.snapshot.ref.getDownloadURL().then(downloadURL => {
      editProfile(props.users.id, downloadURL, bioText, dispatch);
      // Alert.alert(
      //   'Profile Edited!',

      // );
    });
    setUploading(false);
  };
  const updateBio = async () => {
    if (bioText.trim().length < 10) {
      // console.log("Value=====>",val)
      setData({
        message: 'Minimum characters:10',
        isValidUser: true,
      });
    } else if (bioText.trim().length >= 200) {
      setData({
        message: 'Maximum characters:200',
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }

    editProfile(props.users.id, props.users.profile_image, bioText, dispatch);
    // Alert.alert(
    //   'Profile Edited!',

    // );

    // setImage(null);
  };
  const changeText = txt => {
    setBioText(txt);
  };

  const CourseFeedbackText = txt => {
    setCourseText(txt);
  };
  const AppFeedbackText = txt => {
    setAppText(txt);
  };
  const logout = async () => {
    LogoutRef.close();
    await updateProfile(props.users.id, '');
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
    // navigation.navigate('Logout',{userid:props.users.id})
    // await AsyncStorage.removeItem('email')
    // await updateProfile(props.users.id,'')
    // signout(async(res)=>{
    //  await dispatch(Logout())
    // //  await dispatch(SignIn(undefined))
    //   navigation.dispatch(
    //     CommonActions.reset({
    //       index: 1,
    //       routes: [
    //         {
    //         name: 'Auth',
    //         params: { auth: false },
    //         }
    //       ],
    //     })
    //   );
    //   // navigation.navigate('Auth',{auth:false})

    // })
  };

  return (
    <View style={[styles.profileContainer]}>
      <ScrollView>
        <View style={styles.profileContainerUpperView}>
          <ImageBackground
            source={Images.profileMainImage}
            style={styles.profileImageContainer}
            resizeMode="cover">
            <View style={styles.profileTopButtonsContainer}>
              <View style={styles.profileTopButtons}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <ImageView
                    src={Images.left_arrow}
                    imageStyle={styles.profileTopBackImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Settings')}>
                  <ImageView
                    src={Images.profile_setting}
                    imageStyle={styles.profileTopProfileImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => LogoutRef.open()}>
                  <ImageView
                    src={Images.logout}
                    imageStyle={styles.profileTopLogoutImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {uploading ? (
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={styles.profileImageLayout}
              />
            ) : (capturedImage != '' && capturedImage != undefined) ||
              props.users.profile_image ? (
              <TouchableOpacity
                onPress={() => imageOptionsSelect.open()}
                style={styles.profileImageLayout}>
                {imageLoad == false && (
                  <ShimmerPlaceHolder
                    LinearGradient={LinearGradient}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      position: 'absolute',
                    }}
                  />
                )}
                <Image
                  resizeMode="cover"
                  style={{width: 100, height: 100, borderRadius: 50}}
                  source={{
                    uri:
                      capturedImage == ''
                        ? props.users.profile_image
                        : capturedImage[0]?.path == undefined
                        ? capturedImage.path
                        : capturedImage[0]?.path,
                  }}
                  onLoadStart={() => setImageLoad(false)}
                  onLoadEnd={() => setImageLoad(true)}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.profileImageLayout}
                onPress={() => imageOptionsSelect.open()}>
                <View>
                  <ImageView
                    src={Images.upload}
                    imageStyle={{
                      alignItems: 'flex-end',
                      width: 60,
                      height: 60,
                      alignSelf: 'flex-end',
                      position: 'absolute',
                      borderRadius: 6,
                      right: -5,
                      padding: 1,

                      top: 37,
                    }}
                  />
                </View>
                <Text style={styles.profileImageLayoutText}>A</Text>
              </TouchableOpacity>
            )}
          </ImageBackground>
          <View style={styles.profileUserInfoContainer}>
            <Text style={styles.profileUserNameText}>
              {props.users.first_name} {props.users.last_name}
            </Text>
            <Text style={styles.profileUserDescriptionText}>
              Certificate lll In information, Digital Media And Technology
            </Text>
            <View
              style={[styles.profileEmailContainer, {alignItems: 'center'}]}>
              <ImageView
                src={Images.email}
                imageStyle={styles.profileEmailImage}
              />
              <Text style={[styles.profileEmailText]}>{props.users.email}</Text>
            </View>
            <TextInputWithHeading
              profileTextInputContainer={[styles.profileTextInputContainer]}
              ProfileTextInputText={[styles.ProfileTextInputText]}
              textHeading="Your Bio"
              textPlaceHolder="Enter bio here"
              multiline
              handleValidUser={val => handleValidUser(val)}
              data={data}
              val={bioText}
              textInputChange={txt => changeText(txt)}
            />
          </View>
          <TouchableOpacity
            style={styles.profileUpdateInfoContainer}
            onPress={() => updateBio()}>
            <Text style={styles.profileUpdateInfoText}>Update Bio</Text>
            <ImageView
              src={Images.short_right2x}
              imageStyle={styles.profileUpdateInfoImage}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.feedbackTopHeader}>Feedback</Text>
          <Text style={styles.feedbackInnerHeader}>
            Your feedback is important to provide better services to you and
            your peers. Please send us your feedback below
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              width: '45%',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.29,
              shadowRadius: 4.65,

              elevation: 7,
              justifyContent: 'center',
              padding: 2,
            }}
            onPress={() => CourseFeedback.open()}>
            <Text style={styles.feedbackButtontext}>Course feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              height: 50,
              width: '45%',
              borderRadius: 10,
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.29,
              shadowRadius: 4.65,

              elevation: 7,
            }}
            onPress={() => AppFeedback.open()}>
            <Text style={styles.feedbackButtontext}>App feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <RBSheet
        ref={ref => {
          CourseFeedback = ref;
        }}
        closeOnPressMask
        dragFromTopOnly
        animationType="slide"
        // closeOnDragDown
        openDuration={500}
        height={height * 0.85}
        //   onClose={() => closeView()}
        //   onOpen={openView}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000000',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            // flex: 8,
            borderTopRightRadius: 40,
            backgroundColor: '#FFF',
          },
        }}>
        <SafeAreaView
          style={[
            styles.feedbackContainer,
            {backgroundColor: 'transparent', padding: 0},
          ]}>
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
              padding: 0,
            }}>
            <TouchableOpacity
              style={styles.feedbackCrossButton}
              onPress={() => {
                CourseFeedback.close(),
                  setEmptyCourseFieldFeedback(false),
                  setCourseText('');
              }}>
              <ImageView
                src={Images.cross}
                imageStyle={styles.feedbackCrossImageView}
              />
            </TouchableOpacity>
            <View style={styles.feedbackCourseContainer}>
              <View style={styles.feedbackInnerCourseContainer}>
                <Text style={styles.feedbackHeaderText}>Course Feedback</Text>
                <Text style={styles.feedbackInnerHeaderText}>
                  Your feedback is anonymous
                </Text>
                <View style={styles.feedbackTextInputContainer}>
                  <Text style={styles.feedbackTextInputHeader}>
                    What can we do better?
                  </Text>
                  <TextInput
                    placeholder="Hi..."
                    placeholderTextColor={'#00035c'}
                    multiline
                    maxLength={2000}
                    style={[
                      styles.feedbackTextInput,
                      {
                        height: '90%',
                        backgroundColor: 'transparent',
                        textAlign: 'left',
                        textAlignVertical: 'top',
                      },
                    ]}
                    selectionColor={'black'}
                    value={CourseText}
                    // autoCapitalize="none"
                    onChangeText={val => CourseFeedbackText(val)}
                    // onEndEditing={(e)=>handleCourseValidUser(e.nativeEvent.text)}
                  />
                </View>

                <View>
                  {emptyCourseFieldFeedback && (
                    <Animatable.View
                      animation="fadeInLeft"
                      duration={500}
                      style={{
                        alignItems: 'flex-start',
                        width: '85%',
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          color: '#E4434E',
                          fontFamily: 'Poppins-Bold',
                          fontSize: 12,
                        }}>
                        Please write CourseFeedback
                      </Text>
                    </Animatable.View>
                  )}
                </View>

                <View style={styles.feedbackBottomButtonContainer}>
                  <View style={styles.feedbackBottomButtonInner}>
                    <Text style={styles.feedbackBottomCancelText}>Cancel</Text>
                  </View>
                  <ButtonText
                    text="Send"
                    inputStyle={styles.feedbackBottomSendContainer}
                    onPress={sendCourseFeedback}
                  />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </RBSheet>
      <RBSheet
        ref={ref => {
          AppFeedback = ref;
        }}
        closeOnPressMask
        dragFromTopOnly
        animationType="slide"
        // closeOnDragDown
        openDuration={500}
        height={height * 0.85}
        //   onClose={() => closeView()}
        //   onOpen={openView}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000000',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            // flex: 8,
            borderTopRightRadius: 40,
            backgroundColor: '#FFF',
          },
        }}>
        <SafeAreaView style={[styles.feedbackContainer, {padding: 0}]}>
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
              onPress={() => {
                AppFeedback.close(),
                  setEmptyFieldFeedback(false),
                  setAppText('');
              }}>
              <ImageView
                src={Images.cross}
                imageStyle={styles.feedbackCrossImageView}
              />
            </TouchableOpacity>
            <View style={styles.feedbackCourseContainer}>
              <View style={styles.feedbackInnerCourseContainer}>
                <Text style={styles.feedbackHeaderText}>App Feedback</Text>
                <Text style={styles.feedbackInnerHeaderText}>
                  Report bugs or poor app experience
                </Text>
                <View style={[styles.feedbackTextInputContainer]}>
                  <Text style={styles.feedbackTextInputHeader}>
                    What can we do better?
                  </Text>
                  <TextInput
                    placeholder="Hi..."
                    placeholderTextColor={'#00035c'}
                    multiline
                    maxLength={2000}
                    style={[
                      styles.feedbackTextInput,
                      {
                        height: '90%',
                        backgroundColor: 'transparent',
                        textAlign: 'left',
                        textAlignVertical: 'top',
                      },
                    ]}
                    selectionColor={'black'}
                    value={AppText}
                    // autoCapitalize="none"
                    onChangeText={val => AppFeedbackText(val)}
                    // onEndEditing={(e)=>handleValidFeedback(e.nativeEvent.text)}
                  />
                </View>
                <View>
                  {emptyFieldFeedback && (
                    <Animatable.View
                      animation="fadeInLeft"
                      duration={500}
                      style={{
                        alignItems: 'flex-start',
                        width: '85%',
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          color: '#E4434E',
                          fontFamily: 'Poppins-Bold',
                          fontSize: 12,
                        }}>
                        Please write AppFeedback
                      </Text>
                    </Animatable.View>
                  )}
                </View>
                <View style={styles.feedbackBottomButtonContainer}>
                  <View style={styles.feedbackBottomButtonInner}>
                    <Text style={styles.feedbackBottomCancelText}>Cancel</Text>
                  </View>
                  <ButtonText
                    text="Send"
                    inputStyle={styles.feedbackBottomSendContainer}
                    onPress={sendAppFeedback}
                  />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </RBSheet>
      <RBSheet
        ref={ref => {
          imageOptionsSelect = ref;
        }}
        closeOnPressMask
        dragFromTopOnly
        animationType="slide"
        closeOnDragDown
        openDuration={500}
        height={height * 0.2}
        //   onClose={() => closeView()}
        //   onOpen={openView}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000000',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            // flex: 8,
            borderRadius: 16,
            backgroundColor: '#FFF',
          },
        }}>
        <View style={{marginHorizontal: 15, marginTop: 10, marginBottom: -10}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
              color: '#b7b7b7',
            }}>
            Choose an action
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <TouchableOpacity onPress={() => onPictureCapture()}>
            <ImageView
              src={Images.gallery}
              imageStyle={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPictureGalleryCapture()}>
            {/* <ImageView src={Images.camera} imageStyle={{width:50,height:50,marginLeft:10}} /> */}
            <Icon
              name="camera"
              size={40}
              color="#00035c"
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
        </View>
      </RBSheet>
      <RBSheet
        ref={ref => {
          LogoutRef = ref;
        }}
        closeOnPressMask
        dragFromTopOnly
        animationType="slide"
        // closeOnDragDown
        openDuration={500}
        height={height * 0.85}
        //   onClose={() => closeView()}
        //   onOpen={openView}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000000',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            // flex: 8,
            borderTopRightRadius: 40,
            backgroundColor: '#FFF',
          },
        }}>
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
              onPress={() => LogoutRef.close()}>
              <ImageView
                src={Images.cross}
                imageStyle={styles.feedbackCrossImageView}
              />
            </TouchableOpacity>
            <View style={styles.logoutfeedbackCourseContainer}>
              <View style={styles.logoutfeedbackInnerCourseContainer}>
                <Text style={styles.logoutfeedbackHeaderText}>
                  Are you sure?
                </Text>
              </View>
          
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
      </RBSheet>

      <RBSheet
        ref={ref => {
          CompleteOptionsSelect = ref;
        }}
        closeOnPressMask
        dragFromTopOnly
        animationType="slide"
        // closeOnDragDown
        openDuration={500}
        height={height * 0.85}
        //   onClose={() => closeView()}
        //   onOpen={openView}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000000',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            // flex: 8,
            borderRadius: 40,
            backgroundColor: '#FFF',
          },
        }}>
        <SafeAreaView style={[styles.feedbackContainer, {padding: 0}]}>
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
              onPress={() => {
                CompleteOptionsSelect.close(), CourseFeedback.close();
              }}>
              <ImageView
                src={Images.cross}
                imageStyle={styles.feedbackCrossImageView}
              />
            </TouchableOpacity>
            <View
              style={[
                styles.feedbackCourseContainer,
                {justifyContent: 'flex-start'},
              ]}>
              <View
                style={[styles.feedbackInnerCourseContainer, {marginTop: 40}]}>
                <Text style={[styles.feedbackHeaderText]}>Thank you</Text>
                {/* {this.props.props.route.params.check == true ?  */}
                {/* <Text style={[styles.feedbackInnerHeaderText,{marginTop:18}]}>Your community is almost edited.</Text> : */}
                <Text style={[styles.feedbackInnerHeaderText, {marginTop: 5}]}>
                  Your feedback has been sent
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </RBSheet>

      <RBSheet
        ref={ref => {
          APPCompleteOptionsSelect = ref;
        }}
        closeOnPressMask
        dragFromTopOnly
        animationType="slide"
        // closeOnDragDown
        openDuration={500}
        height={height * 0.85}
        //   onClose={() => closeView()}
        //   onOpen={openView}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000000',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            // flex: 8,
            borderRadius: 40,
            backgroundColor: '#FFF',
          },
        }}>
        <SafeAreaView style={[styles.feedbackContainer, {padding: 0}]}>
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
              onPress={() => {
                APPCompleteOptionsSelect.close(), AppFeedback.close();
              }}>
              <ImageView
                src={Images.cross}
                imageStyle={styles.feedbackCrossImageView}
              />
            </TouchableOpacity>
            <View
              style={[
                styles.feedbackCourseContainer,
                {justifyContent: 'flex-start'},
              ]}>
              <View
                style={[styles.feedbackInnerCourseContainer, {marginTop: 40}]}>
                <Text style={[styles.feedbackHeaderText]}>Thank you</Text>
                {/* {this.props.props.route.params.check == true ?  */}
                {/* <Text style={[styles.feedbackInnerHeaderText,{marginTop:18}]}>Your community is almost edited.</Text> : */}
                <Text style={[styles.feedbackInnerHeaderText, {marginTop: 5}]}>
                  Your feedback has been sent
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </RBSheet>
    </View>
  );
}
function mapStateToProp(state) {
  return {
    users: state.users,
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(index);
