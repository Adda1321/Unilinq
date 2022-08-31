import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Animated,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Linking,
  Modal,
  Alert,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {auth, firestore} from '../config/config';
import storage from '@react-native-firebase/storage';
import {ScrollView} from 'react-native';
import ImageView from '../../components/Image';
import {Images} from '../../utils';
import {appStyles} from '../../style';
import {connect} from 'react-redux';
import moment from 'moment';
import DocumentPicker from 'react-native-document-picker';
import EmojiBoard from 'react-native-emoji-board';
import RBSheet from 'react-native-raw-bottom-sheet';
import AudioRecorderPlayer, {
  AudioSet,
} from 'react-native-audio-recorder-player';
import {getAllUsers} from '../Profile/allProfiles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {AudioRecorder, AudioUtils} from 'react-native-audio';
import {PermissionsAndroid} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import RNFetchBlob from 'rn-fetch-blob';
import {now} from 'lodash';

const {height, width} = Dimensions.get('window');

const dirs = RNFetchBlob.fs.dirs;
const path = Platform.select({
  ios: 'hello.m4a',
  android: `${dirs.CacheDir}/hello.mp3`,
});

const audioRecorderPlayer = new AudioRecorderPlayer();
function PersonToPerson(props) {
  // console.log('params', props.route.params);
  let categorySelect;
  let AppFeedback;
  const scrollViewRef = useRef();
  const [emptyFieldFeedback, setEmptyFieldFeedback] = useState(false);
  const [AppText, setAppText] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const [singleFile, setSingleFile] = useState('');
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Progress, setProgress] = useState(0);
  const [check, setcheck] = useState(false);
  const [checkVN, setcheckVN] = useState(true);
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [StopRec, setStopRec] = useState(false);
  const [Result, setResult] = useState(null);
  const [ID, setID] = useState('');
  /// ON START PLAY
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setplayTime] = useState('00:00:00');
  const [duration, setduration] = useState('00:00:00');

  //Online
  const [Detail, setDetail] = useState([]);
  // const [visible, setIsVisible] = useState(false);
  // const [filename, setFilename] = useState(null);
  // const [uploadUri, setUploadUri] = useState(null);

  const onStartRecord = useCallback(async () => {
    // alert("VOICE  MSG"),
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
      setcheck(true);
    }

    const result = await audioRecorderPlayer.startRecorder(path);
    audioRecorderPlayer.addRecordBackListener(e => {
      // console.log('e.currentPosition', e.currentPosition);
      console.log(
        'Recording...',
        audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      );

      if( moment(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),'mmm:ss:ms') >= moment('00:59:00','mmm:ss:ms')){
        console.log('true----')
        onStopRecord()
      }

      // setRecordSecs(e.currentPosition);
      // setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setInput(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));

      return;
    });
    console.log('RESULTS URI------------------>>>>', result);
  }, []);

  const onStopRecord = useCallback(async () => {
    console.log('STOPED RECORDING....');
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    console.log('result', result);
    setStopRec(true);
    setResult(result);
    setcheck(false);
  }, []);

  const sendVoiceNote = async () => {
    setLoading(true);
    // ----------------- SENDING TO STORAGE -------------------
    let ranFileName = `${(Math.random() + 1).toString(36).substring(7)}audio`;

    console.log('RandomFileName---', ranFileName);
    const uploadUri =
      Platform.OS === 'ios' ? Result.replace('file:', '') : Result;

    const taskk = storage().ref(ranFileName).putFile(uploadUri);
    // set progress state
    taskk.on('state_changed', snapshot => {
      setProgress(
        `${Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        )}%`,
      );
      console.log(
        'PRGRESS BAR...',
        `${Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        )}%`,
      );
    });
    try {
      await taskk;

      console.log('IMG SAVED');
    } catch (e) {
      console.error(e);
    }
    // ------------ getting the URL ---------
    await taskk.snapshot.ref.getDownloadURL().then(downloadURL => {
      // console.log('STORAGE URL  ------------ >>> ', downloadURL);
      firestore()
        .collection('Chatroom')
        .doc(props.route.params.ID)
        .collection('messages')
        .add({
          senderId: props.route.params.sender_id,
          timestamp: now(),
          timeOnly: new Date().getTime(),
          dateOnly: new Date().toDateString(),
          message: downloadURL,
          voicenotetime: input,
          displayName: props.users?.first_name,
          email: auth()?.currentUser.email,
          photoURL: props.users?.profile_image,
        });
    });
    setInput('');
    setStopRec(false);
    setLoading(false);
    setProgress(0);
  };
  onStartPlay = async (path, id) => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer(path);
    // console.log("msg-------------",msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      // console.log('POS-----' , e.duration);
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setplayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setduration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));

      if (
        audioRecorderPlayer.mmssss(Math.floor(e.duration)) ===
        audioRecorderPlayer.mmssss(Math.floor(e.currentPosition))
      ) {
        onStopPlay();
      }

      // console.log('Duration sec-----', audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      // console.log('Position sec-----', audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      return;
    });
    setcheckVN(false);
    setID(id);
  };

  onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setcheckVN(true);
  };

  // -------
  const openImageHandler = async asd => {
    // console.log("ASD===========>",asd)
    let urlObj = {url: asd};
    let image = [];
    image.push(urlObj);
    setImages(image);

    setModalVisible(true);
  };

  const closeModal = () => {
    if (modalVisible) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown'),
        scrollViewRef.current.scrollToEnd({animated: true});

      // scrollViewRef.show();
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: 'Chat',
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
    });
  }, [props.navigation]);

  const sendMessage = async () => {
    if (input.trim() != '') {
      Keyboard.dismiss();
      await firestore()
        .collection('Chatroom')
        .doc(props.route.params.ID)
        .collection('messages')
        .add({
          senderId: props.route.params.sender_id,
          message: input,
          timestamp: now(),
          timeOnly: new Date().getTime(),
          dateOnly: new Date().toDateString(),
          displayName: props.users?.first_name,
          email: auth()?.currentUser.email,
          photoURL: props.users?.profile_image,
        });
      setInput('');
      setStopRec(false);
      // console.log("props.users?.first_name------------>>>>>>------>",props.users?.first_name)
    }
    console.log('STOP REC', StopRec);
  };

  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.fileCopyUri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res);
      const filename = res.name;
      const uploadUri =
        Platform.OS === 'ios'
          ? res.fileCopyUri.replace('file:', '')
          : res.fileCopyUri;

      Alert.alert('Confirmation', 'Do you want to send this file?', [
        {
          text: 'Cancel',
          // onPress: () => console.log("Cancel Pressed"),
          style: 'cancel',
        },
        {text: 'Send', onPress: () => sendFile(filename, uploadUri)},
      ]);

      // const path = await normalizePath(res.uri);
      // console.log(path);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        // alert('Canceled from single doc picker');
        console.log('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const sendFile = async (filename, uploadUri) => {
    setLoading(true);
    // alert('IN STORAGE111');
    // console.log('FileNamee----', filename);
    // console.log('uploadURI----', uploadUri);
    const taskk = storage().ref(filename).putFile(uploadUri);
    // set progress state
    taskk.on('state_changed', snapshot => {
      setProgress(
        `${Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        )}%`,
      );
      console.log(
        'PRGRESS BAR...',
        `${Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        )}%`,
      );
    });
    try {
      await taskk;
      console.log('IMG SAVED');
    } catch (e) {
      console.error(e);
    }
    await taskk.snapshot.ref.getDownloadURL().then(downloadURL => {
      // console.log('STORAGE URL  ------------ >>> ', downloadURL);
      firestore()
        .collection('Chatroom')
        .doc(props.route.params.ID)
        .collection('messages')
        .add({
          senderId: props.route.params.sender_id,

          timestamp: now(),
          timeOnly: new Date().getTime(),
          dateOnly: new Date().toDateString(),
          message: downloadURL,
          Filename: filename,
          displayName: props.users?.first_name,
          email: auth()?.currentUser.email,
          photoURL: props.users?.profile_image,
          // date:
        });
    });
    setLoading(false);
    setProgress(0);
  };
  useLayoutEffect(() => {
    firestore()
      .collection('Chatroom')
      .doc(props.route.params.ID)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot =>
        setMessages(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          })),
        ),
      );
  }, [props.route]);

  const onClick = emoji => {
    console.log(emoji);
  };
  const OpenModal = () => {
    categorySelect.open();
    // selectOneFile
  };
  const dismissing = () => {
    console.log('DISMISSING------------------->>>');
    setShow(!show);
    Keyboard.dismiss;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f3f3f4'}}>
      {/* {console.log('In Return......')} */}
      <View
        style={{
          height: 60,
          backgroundColor: '#f3f3f4',
          flexDirection: 'row',
          alignItems: 'center',
          // width: 300,
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 4},
          // shadowRadius: 6,
          shadowOpacity: 0.2,
          elevation: 3,
        }}>
        <View
          style={[appStyles.chatsettingTopButtonsContainer, {marginRight: 20}]}>
          <View style={appStyles.settingTopButtons}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <ImageView
                src={Images.left_arrow}
                imageStyle={appStyles.profileTopBackImageTwo}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{fontFamily: 'Poppins-Bold', color: '#00035c', fontSize: 14}}>
          {props.route.params.chatName}
        </Text>
      </View>
      <KeyboardAvoidingView
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-160}
        enabled>
        <TouchableWithoutFeedback onPress={dismissing}>
          <>
            <ScrollView
              // contentContainerStyle={{paddingTop: 50}}
              ref={scrollViewRef}
              onContentSizeChange={() =>
                scrollViewRef.current.scrollToEnd({animated: true})
              }>
              {/* Chat goes here */}
              {messages.map(({id, data}, index) =>
                data.email === auth().currentUser.email ? (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 10,
                        marginTop: 30,
                        // backgroundColor:"purple"
                      }}>
                      <View>
                        <Avatar
                          rounded
                          size={55}
                          source={{
                            uri: data.photoURL,
                          }}
                        />
                        {
                          moment(props.users?.timestamp).add(30, 'minutes') >=
                            new Date(Date.now()) && (
                            // (alert('true'),
                            <>
                              <View
                                style={{
                                  height: 15,
                                  width: 15,
                                  backgroundColor: 'white',
                                  borderRadius: 50,
                                  alignSelf: 'flex-end',
                                  // position:"absolute",
                                  // alignItems:"flex-end",
                                  justifyContent: 'center',
                                  // marginTop:56
                                  marginLeft: -15,
                                  marginTop: -15,
                                }}>
                                <View
                                  style={{
                                    height: 8,
                                    width: 8,
                                    backgroundColor: '#39D480',
                                    borderRadius: 50,

                                    alignSelf: 'center',
                                  }}
                                />
                              </View>
                            </>
                          )
                          // )
                        }
                      </View>
                      {/* {console.log("TIMESTAMP----->" )} */}
                      <View
                        key={id}
                        style={{
                          paddingHorizontal: 12,
                          justifyContent: 'center',
                          padding: 3,
                          // backgroundColor:"pink"
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '160%',
                          }}>
                          {/* <Text style={{width: '100%' , backgroundColor:"yellow"}}> */}
                          <Text
                            style={{
                              fontFamily: 'Poppins-SemiBold',
                              fontSize: 12,
                              color: '#EA434e',
                              paddingRight: 10,
                            }}>
                            {'You'}
                          </Text>

                          {Platform.OS === 'ios' ? (
                            <Text style={styles.chatDate}>
                              {moment(data.timestamp).format('lll')}
                            </Text>
                          ) : (
                            <>
                              <Text>
                                <Text
                                  style={[styles.chatDate, {marginLeft: 100}]}>
                                  {moment(data.timestamp).format(
                                    'MMM DD , YYYY ',
                                  )}
                                </Text>
                                <Text style={styles.chatDate}>
                                  {moment(data.timestamp).format('LT')}
                                </Text>
                              </Text>
                            </>
                          )}
                          {/* </Text> */}
                        </View>
                        {data.message.includes('https://') ? (
                          data.message.includes('audio') ? (
                            checkVN ? (
                              <TouchableOpacity
                                onPress={async () => {
                                  onStartPlay(data.message, id);
                                }}
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'flex-end',
                                  marginTop: 5,
                                }}>
                                <Icon
                                  name="microphone"
                                  size={20}
                                  color={'#B7B7B7'}
                                  style={{margin: -2, padding: -2}}
                                />
                                <Text style={{color: '#000', marginLeft: 10}}>
                                  {`Voice Recording `}
                                  {data.voicenotetime}
                                  {/* {data.message} */}
                                </Text>
                              </TouchableOpacity>
                            ) : id === ID ? (
                              <>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                  }}>
                                  <TouchableOpacity
                                    onPress={() => onStopPlay()}>
                                    <Icon
                                      name="pause"
                                      size={27}
                                      color={'#EA434e'}
                                      backgroundColor={'white'}
                                      style={{margin: 0, padding: -2}}
                                    />
                                  </TouchableOpacity>
                                  <Text style={{color: '#000'}}>
                                    {playTime}
                                  </Text>
                                </View>
                              </>
                            ) : (
                              <>
                                <TouchableOpacity
                                  disabled
                                  onPress={async () => {
                                    onStartPlay(data.message, id);
                                  }}
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-end',
                                    marginTop: 5,
                                  }}>
                                  <Icon
                                    name="microphone"
                                    size={20}
                                    color={'#B7B7B7'}
                                    style={{margin: -2, padding: -2}}
                                  />
                                  <Text style={{color: '#000', marginLeft: 10}}>
                                    {`Voice Recording `}
                                    {data.voicenotetime}
                                    {/* {data.message} */}
                                  </Text>
                                </TouchableOpacity>
                              </>
                            )
                          ) : data.message.includes('.png') ||
                            data.message.includes('.jpg') ? (
                            <TouchableOpacity
                              onPress={() => openImageHandler(data.message)}>
                              <Image
                                style={{width: 150, height: 150}}
                                source={{
                                  uri: data.message,
                                }}
                              />

                              {/* {console.log(data.message)}
                              <Text style={{color:"red"}}>
                                {data.message}
                              </Text> */}
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity
                              onPress={async () => {
                                // console.log('URL----->', data.message);
                                Linking.openURL(data.message);
                              }}
                              style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                marginTop: 5,
                              }}>
                              <Icon
                                name="file-multiple"
                                size={20}
                                color={'#B7B7B7'}
                                style={{margin: -2, padding: -2}}
                              />
                              <Text style={{color: '#000', marginLeft: 10}}>
                                {data.Filename}
                              </Text>
                            </TouchableOpacity>
                          )
                        ) : (
                          <>
                            <Text
                              style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 12,
                                color: '#3d3d3d',
                                paddingTop: 10,
                              }}>
                              {data.message}
                            </Text>
                          </>
                        )}
                      </View>
                    </View>
                    {new Date(messages[index]?.data.dateOnly) <
                      new Date(messages[index + 1]?.data.dateOnly) && (
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: -20,
                          marginTop: 25,
                          // backgroundColor:"purple"
                        }}>
                        <Text style={styles.chatDate}>
                          {moment(messages[index + 1]?.data.dateOnly).format(
                            'MMM DD , YYYY ',
                          )}
                        </Text>
                        <View
                          style={{
                            borderBottomColor: '#b7b7b7',
                            width: '100%',
                            borderBottomWidth: 1,
                            alignSelf: 'center',
                            marginLeft: 10,
                          }}
                        />
                      </View>
                    )}
                    {/* {console.log("ID---------->>",id)} */}
                  </>
                ) : (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 10,
                        marginTop: 30,
                      }}>
                      <View>
                        <Avatar
                          rounded
                          size={55}
                          source={{
                            uri: data.photoURL,
                          }}
                        />
                        {
                          moment(props.users?.timestamp).add(30, 'minutes') >=
                            new Date(Date.now()) && (
                            // (alert('true'),
                            <>
                              <View
                                style={{
                                  height: 15,
                                  width: 15,
                                  backgroundColor: 'white',
                                  borderRadius: 50,
                                  alignSelf: 'flex-end',
                                  // position:"absolute",
                                  // alignItems:"flex-end",
                                  justifyContent: 'center',
                                  // marginTop:56
                                  marginLeft: -15,
                                  marginTop: -15,
                                }}>
                                <View
                                  style={{
                                    height: 8,
                                    width: 8,
                                    backgroundColor: '#39D480',
                                    borderRadius: 50,

                                    alignSelf: 'center',
                                  }}
                                />
                              </View>
                            </>
                          )
                          // )
                        }
                      </View>
                      <View
                        key={id}
                        style={{
                          paddingHorizontal: 12,
                          justifyContent: 'center',
                          padding: 3,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '160%',
                          }}>
                          {/* <Text style={{width: '100%' , backgroundColor:"yellow"}}> */}
                          <Text
                            style={{
                              fontFamily: 'Poppins-SemiBold',
                              fontSize: 12,
                              color: '#00035c',
                              paddingRight: 10,
                            }}>
                            {data.displayName}
                          </Text>

                          {Platform.OS === 'ios' ? (
                            <Text style={styles.chatDate}>
                              {moment(data.timestamp).format('lll')}
                            </Text>
                          ) : (
                            <>
                              <Text>
                                <Text
                                  style={[styles.chatDate, {marginLeft: 100}]}>
                                  {moment(data.timestamp).format(
                                    'MMM DD , YYYY ',
                                  )}
                                </Text>
                                <Text style={styles.chatDate}>
                                  {moment(data.timestamp).format('LT')}
                                </Text>
                              </Text>
                            </>
                          )}
                          {/* </Text> */}
                        </View>
                        {data.message.includes('https://') ? (
                          data.message.includes('audio') ? (
                            checkVN ? (
                              <TouchableOpacity
                                onPress={async () => {
                                  onStartPlay(data.message, id);
                                }}
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'flex-end',
                                  marginTop: 5,
                                }}>
                                <Icon
                                  name="microphone"
                                  size={20}
                                  color={'#B7B7B7'}
                                  style={{margin: -2, padding: -2}}
                                />
                                <Text style={{color: '#000', marginLeft: 10}}>
                                  {`Voice Recording `}
                                  {data.voicenotetime}
                                  {/* {data.message} */}
                                </Text>
                              </TouchableOpacity>
                            ) : id === ID ? (
                              <>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                  }}>
                                  <TouchableOpacity
                                    onPress={() => onStopPlay()}>
                                    <Icon
                                      name="pause"
                                      size={27}
                                      color={'#EA434e'}
                                      backgroundColor={'white'}
                                      style={{margin: 0, padding: -2}}
                                    />
                                  </TouchableOpacity>
                                  <Text style={{color: '#000'}}>
                                    {playTime}
                                  </Text>
                                </View>
                              </>
                            ) : (
                              <>
                                <TouchableOpacity
                                  disabled
                                  onPress={async () => {
                                    onStartPlay(data.message, id);
                                  }}
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-end',
                                    marginTop: 5,
                                  }}>
                                  <Icon
                                    name="microphone"
                                    size={20}
                                    color={'#B7B7B7'}
                                    style={{margin: -2, padding: -2}}
                                  />
                                  <Text style={{color: '#000', marginLeft: 10}}>
                                    {`Voice Recording `}
                                    {data.voicenotetime}
                                    {/* {data.message} */}
                                  </Text>
                                </TouchableOpacity>
                              </>
                            )
                          ) : data.message.includes('.png') ||
                            data.message.includes('.jpg') ? (
                            <TouchableOpacity
                              onPress={() => openImageHandler(data.message)}>
                              <Image
                                style={{width: 150, height: 150}}
                                source={{
                                  uri: data.message,
                                }}
                              />

                              {/* {console.log(data.message)}
                              <Text style={{color:"red"}}>
                                {data.message}
                              </Text> */}
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity
                              onPress={async () => {
                                // console.log('URL----->', data.message);
                                Linking.openURL(data.message);
                              }}
                              style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                marginTop: 5,
                              }}>
                              <Icon
                                name="file-multiple"
                                size={20}
                                color={'#B7B7B7'}
                                style={{margin: -2, padding: -2}}
                              />
                              <Text style={{color: '#000', marginLeft: 10}}>
                                {data.Filename}
                              </Text>
                            </TouchableOpacity>
                          )
                        ) : (
                          <>
                            <Text
                              style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 12,
                                color: '#3d3d3d',
                                paddingTop: 10,
                              }}>
                              {data.message}
                            </Text>
                          </>
                        )}
                      </View>
                    </View>

                    {new Date(messages[index]?.data.dateOnly) <
                      new Date(messages[index + 1]?.data.dateOnly) && (
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: -20,
                          marginTop: 25,
                          // backgroundColor:"purple"
                        }}>
                        <Text style={styles.chatDate}>
                          {moment(messages[index + 1]?.data.dateOnly).format(
                            'MMM DD , YYYY ',
                          )}
                        </Text>
                        <View
                          style={{
                            borderBottomColor: '#b7b7b7',
                            width: '100%',
                            borderBottomWidth: 1,
                            alignSelf: 'center',
                            marginLeft: 10,
                          }}
                        />
                      </View>
                    )}
                  </>
                ),
              )}
            </ScrollView>
            {loading && (
              <>
                {console.log('Progresing---->>', Progress)}
                <View style={styles.progressBar}>
                  <View style={{backgroundColor: '#EA434E', width: Progress}} />
                </View>
              </>
            )}
            {/* {loading && <ActivityIndicator size="large" color="#0000ff" />} */}
            <Modal
              visible={modalVisible}
              onRequestClose={closeModal}
              transparent={true}>
              <ImageViewer imageUrls={images} />
            </Modal>
            {/* {console.log('IMAGES--------------------------->>>', images)} */}

            <View style={[styles.footer, show === true && {marginBottom: 240}]}>
              <View style={appStyles.chatsearchScreenInsertKeyword}>
                <View
                  style={[
                    appStyles.searchLoginTextBox,
                    {
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 13,
                    },
                  ]}>
                  <TouchableOpacity onPress={OpenModal}>
                    <View style={{backgroundColor: '#EA434e', borderRadius: 3}}>
                      <ImageView
                        src={require('../../images/addmessage.png')}
                        imageStyle={{width: 30, height: 30}}
                      />
                    </View>
                  </TouchableOpacity>

                  {check ? (
                    <TouchableOpacity onPress={onStopRecord}>
                      <View style={{alignItems: 'center'}}>
                        <Icon
                          name="microphone"
                          size={27}
                          color={'#EA434e'}
                          backgroundColor={'white'}
                          style={{margin: 0, padding: -2}}
                        />
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={onStartRecord}>
                      <View style={{alignItems: 'center'}}>
                        <ImageView
                          src={require('../../images/voice.png')}
                          imageStyle={{
                            width: 15,
                            height: 22,
                            marginHorizontal: 10,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  )}

                  <TextInput
                    style={[
                      appStyles.searchInsertKeywordStyle,
                      {
                        alignItems: 'center',
                        color: '#000',
                        width: '70%',
                        paddingVertical: 5,
                      },
                    ]}
                    // onChangeText={onPress}
                    // value={value}
                    autoCorrect={false}
                    placeholder="Message"
                    // secureTextEntry={hidePass}
                    placeholderTextColor={'#B7B7B7'}
                    // onChangeText={(val) => textInputChange(val)}
                    selectionColor={'black'}
                    multiline
                    keyboardType="email-address"
                    value={input}
                    onChangeText={text => setInput(text)}
                    // {...props}
                  />
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        StopRec
                          ? (console.log('STOP RECOrd', StopRec),
                            sendVoiceNote())
                          : (console.log('STOP RECO', StopRec),
                            onStopRecord(),
                            sendMessage());
                      }}
                      
                    >
                      <ImageView
                        src={require('../../images/smile.png')}
                        imageStyle={{width: 30, height: 30}}
                      />
                    </TouchableOpacity>
                  </View>
                  {/* {loading == true ? 
    <ActivityIndicator size="small" color="#0000ff" />
     :  <ImageView
     src={require('../../images/searchkeyword.png')}
     imageStyle={{width: 25, height: 25,marginLeft:-3,marginTop:-1}}
     // Color="#00035c"
   />} */}
                </View>
              </View>
              {/* <TextInput
                placeholder="Message"
                style={styles.textInput}
                value={input}
                onSubmitEditing={sendMessage}
                onChangeText={(text) => setInput(text)}
              /> */}
              {/* <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
                <FontAwesome name="send" size={24} color="black" />
              </TouchableOpacity> */}
            </View>
            <EmojiBoard showBoard={show} onClick={onClick} />
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* -----------------------POP UP START----------- */}
      <RBSheet
        ref={ref => {
          categorySelect = ref;
        }}
        closeOnPressMask
        dragFromTopOnly
        animationType="slide"
        closeOnDragDown
        openDuration={500}
        height={height * 0.4}
        //   onClose={() => closeView()}
        //   onOpen={openView}

        customStyles={{
          wrapper: {
            backgroundColor: '#00000000',
          },
          draggableIcon: {
            backgroundColor: '#fff',
          },
          container: {
            // flex: 8,
            // borderRadius: 16,
            backgroundColor: '#000',
          },
        }}>
        <View style={{}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                selectOneFile(), categorySelect.close();
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontFamily: 'Poppins-Bold',
                  paddingTop: 20,
                }}>
                Attach file
              </Text>
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: '#3d3d3d',
                borderBottomWidth: 1,
                marginHorizontal: 5,
                width: '100%',
                paddingTop: 15,
              }}
            />
            <TouchableOpacity
              disabled
              // onPress={()=>confirmationHandler()}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontFamily: 'Poppins-Bold',
                  paddingTop: 20,
                }}>
                Anonymously report a member
              </Text>
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: '#3d3d3d',
                borderBottomWidth: 1,
                marginHorizontal: 5,
                width: '100%',
                paddingTop: 15,
              }}
            />
            <TouchableOpacity
              disabled
              // onPress={()=>confirmationHandler()}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontFamily: 'Poppins-Bold',
                  paddingTop: 20,
                }}>
                Faculty feedback
              </Text>
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: '#3d3d3d',
                borderBottomWidth: 1,
                marginHorizontal: 5,
                width: '100%',
                paddingTop: 15,
              }}
            />
            <TouchableOpacity
              disabled
              onPress={() => {
                AppFeedback.open();
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontFamily: 'Poppins-Bold',
                  paddingTop: 20,
                }}>
                App feedback
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      {/* // --------------------POPUP END---------------------------- */}

      {/* -------------------------- Feedbackk ---------------------------- */}
    </SafeAreaView>
  );
}
function mapStateToProp(state) {
  return {
    users: state.users,
  };
}
export default connect(mapStateToProp)(PersonToPerson);

const styles = StyleSheet.create({
  chatDate: {
    marginLeft: 15,
    paddingLeft: 15,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#B7B7B7',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  receiver: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-end',
    borderRadius: 20,
    right: 15,
    marginBottom: 20,
    maxWidth: '80%',
    position: 'relative',
  },
  receiverText: {
    color: 'black',
    fontWeight: '500',
    marginLeft: 10,
    marginBottom: 15,
  },
  sender: {
    padding: 15,
    backgroundColor: '#2B68E6',
    alignSelf: 'flex-start',
    borderRadius: 20,
    //marginLeft: 15,
    marginBottom: 20,
    maxWidth: '80%',
    position: 'relative',
    left: 10,
  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: 'white',
  },
  senderText: {
    color: 'white',
    fontWeight: '500',
    marginLeft: 10,
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: 'transparent',
    backgroundColor: '#ECECEC',
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    borderRadius: 30,
  },
  absoluteFill: {},
  progressBar: {
    height: 8,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 5,
  },
});
