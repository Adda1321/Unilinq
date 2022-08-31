import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {appStyles} from '../../style';
import {Images} from '../../utils';
import ImageView from '../../components/Image';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';
import TextInputWithHeading from '../../components/TextInputWithHeading';
import {connect} from 'react-redux';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import SimpleTextInput from '../../components/SimpleInput';
import {auth} from '../../Core/config/config';
const {width, height} = Dimensions.get('window');
function index(props) {
  // console.log("SENDER---------------------->>>",props.route.params)
  let reportMember;

  const navigation = useNavigation();
  const [data, setData] = React.useState({
    message: 'Maximum characters:20',
    isValidUser: false,
  });
  const CommunityArray = [
    'MCU Gaming Union',
    'BHS Code',
    'MEL U AFL Fan',
    'Bachelor of Design',
  ];
  const handleValidUser = val => {
    if (val.trim().length >= 20) {
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
  const changeText = txt => {
    setBioText(txt);
  };
  // const ChatPerson = (sender_id, receiver_id) =>
  // {
  //   console.log("ID----------------------->>>",sender_id, receiver_id)
  // }

  const ChatPerson = async (sender_id, receiver_id) => {
    alert('Successful click');
    const members = [];

    var check;
    var ID;
    var check2;
    members.push(sender_id, receiver_id);
    // var checkRoom =
    props.allRooms.data.map((item, index) => {
      // console.log(
      //   'CHECK------------/////------------>>',
      //   item.members.find(obj => obj === receiver_id),
      // );

      check = item.members.find(obj => obj === receiver_id);
      if (item.members.find(obj => obj === receiver_id) !== undefined) {
        ID = item.id;
        check2 = true;
      }
    });

    if (check2 !== undefined) {
      // console.log('IF STATEMENT --------');
      navigation.navigate('PersonToPerson', {
        sender_id,
        receiver_id,
        ID,
      });
    } else if (check === undefined) {
      console.log('IN ELSE ');
      firestore()
        .collection('Chatroom')
        .add({
          members: members,
        })
        .then(response => {
          // console.log('ELSE CONDITION ----------------------------->>> ');

          navigation.navigate('PersonToPerson', {
            ID: response._documentPath._parts[1],
            sender_id,
            receiver_id,
          });
        });
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <ImageBackground
          source={Images.profileMainImage}
          style={styles.profileImageContainer}
          resizeMode="cover">
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
          {props.route.params.data.image ? (
            <TouchableOpacity
              disabled
              // onPress={() => imageOptionsSelect.open()}
              style={styles.profileImageLayout}>
              {/* {imageLoad ==false && (
                  <ShimmerPlaceHolder LinearGradient={LinearGradient} style={{width: 100, height: 100, borderRadius: 50,position:'absolute'}}/> 
                )} */}
              <Image
                resizeMode="cover"
                style={{width: 100, height: 100, borderRadius: 50}}
                source={{
                  uri: props.route.params.data.image,
                }}
                //   onLoadStart={() => setImageLoad(false)}
                //   onLoadEnd={() => setImageLoad(true)}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity disabled style={styles.profileImageLayout}>
              <Text style={styles.profileImageLayoutText}>A</Text>
            </TouchableOpacity>
          )}
        </ImageBackground>
        <View style={styles.profileUserInfoContainer}>
          <Text style={styles.profileUserNameText}>
            {props.route.params.data.first_name}{' '}
            {props.route.params.data.last_name}
          </Text>
          <Text style={styles.profileUserDescriptionText}>
            {props.route.params.data.degree},{' '}
            {props.route.params.data.university_name}
          </Text>

          {auth()?.currentUser?.uid !== props.route.params.data.id && (
            <TouchableOpacity
              onPress={() =>
                ChatPerson(auth()?.currentUser?.uid, props.route.params.data.id)
              }>
              <View style={styles.userProfileChatContainer}>
                <ImageView
                  src={Images.chat}
                  imageStyle={styles.userProfileChatIcon}
                />
                <Text style={styles.userProfileChatText}>Direct Message</Text>
              </View>
            </TouchableOpacity>
          )}
          <TextInputWithHeading
            profileTextInputContainer={[styles.profileTextInputContainer]}
            ProfileTextInputText={[styles.ProfileTextInputText]}
            textHeading=" Bio"
            textPlaceHolder="Jesus stole my wheel... just saying"
            handleValidUser={val => handleValidUser(val)}
            data={data}
            textInputChange={txt => changeText(txt)}
            editable={false}
            val={props.route.params.data.bio}
          />
          <View style={styles.userProfileCommunityContainer}>
            <Text style={styles.userProfileCommunityHeaderText}>
              5 communities
            </Text>
            <View>
              <View style={styles.userProfileCommunityList}>
                {CommunityArray.map(item => (
                  <View style={styles.userProfileCommunityListContainer}>
                    <Text style={styles.userProfileCommunityListText}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.userProfileCommunityButton}
            onPress={() => reportMember.open()}>
            <Text style={styles.userProfileCommunityButtonText}>
              Report this member
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <RBSheet
        ref={ref => {
          reportMember = ref;
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
            borderTopRightRadius: 60,
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
            <ScrollView>
              <TouchableOpacity
                style={styles.reportMemberBackButton}
                onPress={() => reportMember.close()}>
                <ImageView
                  src={Images.cross}
                  imageStyle={styles.reportMemberBackImage}
                />
              </TouchableOpacity>
              <View style={styles.reportMemberInnerContainer}>
                <View style={styles.reportMemberHeader}>
                  <Text style={styles.reportMemberHeaderText}>
                    Report Member
                  </Text>
                  <View style={styles.reportMemberCheckboxContainer}>
                    <CheckBox
                      containerStyle={{backgroundColor: 'transparent'}}
                      checkedIcon={
                        <View
                          style={{backgroundColor: '#b7b7b7', borderRadius: 4}}>
                          <Icon
                            name="checkbox-marked"
                            size={25}
                            color={'#Efefef'}
                            style={{margin: -2, padding: -2}}
                          />
                        </View>
                      }
                      uncheckedIcon={
                        <View
                          style={{backgroundColor: '#b7b7b7', borderRadius: 4}}>
                          <Icon
                            name="checkbox-blank"
                            size={25}
                            color={'#Efefef'}
                            style={{margin: -2, padding: -2}}
                          />
                        </View>
                      }
                      checked={false}
                      //   onPress={(()=>handleChange(item.id))}
                    />
                    <Text style={styles.reportMembetCheckboxText}>
                      Report anonymously
                    </Text>
                  </View>
                  <View style={styles.reportMemberCheckboxContainerTwo}>
                    <CheckBox
                      containerStyle={{backgroundColor: 'transparent'}}
                      checkedIcon={
                        <View
                          style={{backgroundColor: '#b7b7b7', borderRadius: 4}}>
                          <Icon
                            name="checkbox-marked"
                            size={25}
                            color={'#Efefef'}
                            style={{margin: -2, padding: -2}}
                          />
                        </View>
                      }
                      uncheckedIcon={
                        <View
                          style={{backgroundColor: '#b7b7b7', borderRadius: 4}}>
                          <Icon
                            name="checkbox-blank"
                            size={25}
                            color={'#Efefef'}
                            style={{margin: -2, padding: -2}}
                          />
                        </View>
                      }
                      checked={false}
                      //   onPress={(()=>handleChange(item.id))}
                    />
                    <Text style={styles.reportMembetCheckboxText}>
                      It’s okay to contact me
                    </Text>
                  </View>

                  <View style={{paddingTop: 5}}>
                    <SimpleTextInput
                      inputStyle={styles.settingTextInputContainerTop}
                      placeholder={'Reason'}
                      handleValidUser={(val, data) =>
                        console.log('Ddd', val, data)
                      }
                      data={'lastName'}
                      textInputChange={txt => console.log('Ddd', txt)}
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.reportMemberUploadImageContainer}>
                    <View style={styles.reportMemberImageInnerContainer}>
                      <View>
                        <ImageView
                          src={Images.gallery}
                          imageStyle={{width: 45, height: 45}}
                        />
                      </View>
                      <View style={styles.reportMemberUploadTextContainer}>
                        <Text style={styles.reportMemberUploadTextOne}>
                          Upload an image (.jpg .png)
                        </Text>
                        <Text style={styles.reportMemberUploadTextTwo}>
                          828 x 628 px (Recommended)
                        </Text>
                      </View>
                    </View>
                    <View>
                      <ImageView
                        src={Images.upload}
                        imageStyle={styles.reportMemberUploadIcon}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.reportMemberMessageInputContainer}>
                    <Text style={styles.reportMemberMessageText}>
                      Your message
                    </Text>
                    <TextInput
                      placeholder="Please mention when and where did this occur?
                Was it in a direct message or a community chat? 
                please mention the community chat name."
                      placeholderTextColor={'#00035c'}
                      style={styles.reportMemberMessageInput}
                      selectionColor={'black'}
                      multiline={true}
                      numberOfLines={5}
                      // autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                      // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />
                  </View>
                  <View style={styles.reportMemberSendContainer}>
                    <View style={styles.reportMemberSendInnerContainer}>
                      <Text style={styles.reportMemberSendText}>Send</Text>
                      <View
                        style={{
                          borderLeftWidth: 1,
                          borderLeftColor: '#8b86ba',
                          marginLeft: 10,
                        }}
                      />
                      <ImageView
                        src={Images.short_right2x}
                        imageStyle={styles.reportMemberRightArrow}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </RBSheet>
    </View>
  );
}
function mapStateToProp(state) {
  return {
    users: state.users,
    getCommunity: state.getCommunity,
    allRooms: state.allRooms,
    getAllJoinedCommunity: state.getAllJoinedCommunity,
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(index);
