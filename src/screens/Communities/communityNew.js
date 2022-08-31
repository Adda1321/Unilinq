/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
  Alert,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';
import {Images} from '../../utils';
import ImageView from '../../components/Image';
import {appStyles} from '../../style';
import {useNavigation} from '@react-navigation/native';
import CategorySelectBottomSheet from '../Home/CategorySelectBottomSheet';
import {Icon} from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';
import TagInput from 'react-native-tags-input';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import ButtonText from '../../components/Button';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import {addCommunity} from '../../Core/Communities/addCommunity';
import {imageSettings} from '../../constants';
import {getAllUsers} from '../../Core/Profile/allProfiles';
import storage from '@react-native-firebase/storage'; 
import ImagePicker from 'react-native-image-crop-picker';
import functions from '@react-native-firebase/functions';
const mainColor = '#000';
let imageOptionsSelect;
let CompleteOptionsSelect
var notiee;
var unique = [];
const {width, height} = Dimensions.get('window');
class communityNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: [],
      },
      tagsColor: mainColor,
      tagsText: '#000',
      capturedImage: '',
      uploading: false,
      transfered: 0,
      privateSwitch: false,
      communityType: 'Social',
      communityName: '',
      categoryId: '',
      communityDescription: '',
      data: {
        message: 'Maximum characters:20',
        required: false,
        isValidUser: false,
      },
      tagslimit: {
        message: 'Please add upto 5 tags',
        required: false,
        isValidUser: false,
      },
      groupdescription: {
        message: 'Maximum characters:200',
        required: false,
        isValidUser: false,
      },
      categoryCheck: {
        message: 'Please select a category',
        required: false,
        isValidUser: false,
      },
    };
  }
  updateTagState = state => {
    if (state.tagsArray.length < 6) {
      // if (state.tag.tag.include(' ')) {
      // } else {
        this.setState({
          tags: state,
          tagslimit: {
            ...this.state.tagslimit,
            required: false,
            isValidUser: false,
          },
        });
      // }
    } else {
      this.setState({
        tagslimit: {
          ...this.state.tagslimit,
          required: true,
          isValidUser: true,
        },
      });
    }
  };
  async componentDidMount() {
    getAllUsers(res => {
      let notifications = [];
      res.map(item => {
        notifications.push(item.NotificationToken);
      });
      unique = [...new Set(notifications)];
    });
  }
  communityAdd = async () => {
    // CompleteOptionsSelect.open()
    // this.props.navigation.navigate('CommunityComplete')
   
    //   this.props.navigation.navigate('CommunityComplete')
      if(this.state.data.isValidUser == false && this.state.groupdescription.isValidUser ==false && this.state.categoryId !='' && this.state.tags.tagsArray.length < 6 && this.state.communityDescription !='' && this.state.communityName !=''){
          
        if(this.state.capturedImage !='') {
          const filename = this.state.capturedImage[0].path.substring(this.state.capturedImage[0].path.lastIndexOf('/') + 1);
          const uploadUri = Platform.OS === 'ios' ? this.state.capturedImage[0].path.replace('file://', '') : this.state.capturedImage[0].path;
          console.log("Generic File Name ---------------------->>>>", this.state.capturedImage[0].path);
          console.log("FileName ---------------------->>>>",filename);
          console.log("UploadURI---------------------->>>>",uploadUri)
          this.setState({uploading:true})
          // setUploading(true);
        // setTransferred(0);
        const task = storage()
          .ref(filename)
          .putFile(uploadUri);
        // set progress state
        task.on('state_changed', snapshot => {
          // setTransferred(
          //   Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
          // );
        });
        try {
       
          await task;
        } catch (e) {
          console.error(e);
        }
        await task.snapshot.ref.getDownloadURL().then((downloadURL) => {
         
          let checkPrivate = this.state.privateSwitch == false ? 'Public' :'Private'
          addCommunity(this.props.users.id,this.state.communityName,this.state.communityType,checkPrivate,this.state.categoryId,this.state.communityDescription,downloadURL,'Pending',this.state.tags,this.props.dispatch)
          
          this.setState({uploading:false})
          // this.props.navigation.navigate('CommunityComplete',{check:false})
          CompleteOptionsSelect.open()
          // Alert.alert(
          //   'Community Created!',
            
          // );
       })
       
       
        }
        else {
          this.setState({uploading:true})
          let checkPrivate = this.state.privateSwitch == false ? 'Public' :'Private'
         
          addCommunity(this.props.users.id,this.state.communityName,this.state.communityType,checkPrivate,this.state.categoryId,this.state.communityDescription,'https://s19525.pcdn.co/wp-content/uploads/2019/09/community.jpg', 'Pending',this.state.tags,this.props.dispatch)
          // if(notiee !=undefined){
            // console.log("Biti====================>",notiee)
           
          // }
          // Alert.alert(
          //   'Community Created!',
            
          // );
          this.setState({uploading:false})
          CompleteOptionsSelect.open()
        }
        var my_array = unique.filter((item) => item);
     
        notiee ={
          tokens:my_array,
          body: 'New community Created',
          title:this.state.communityName,
       
      }
        
        if(notiee !=undefined){
          // console.log("obj==============================>",notiee)
          const call = functions().httpsCallable('sendMultiNotifications');
          call(notiee)
          .then(({ data }) => {
              console.log('success call to email cloud function'); // hello world
          })
          .catch(httpsError => {
            alert(httpsError.message)
              console.log(httpsError.code); // invalid-argument
              console.log(httpsError.message); // Your error message goes here
          })
        }

        
      
       
      }
     if(this.state.categoryId ==''){
        this.setState({
          categoryCheck: {
            ...this.state.categoryCheck,
            isValidUser: true,
          },
        });
      }
      if(this.state.communityName ==''){
        this.setState({
          data: {
            ...this.state.data,
            required:true,
            isValidUser: true,
          },
        });
      }
      if(this.state.communityDescription == ''){
        this.setState({
          groupdescription: {
            ...this.state.groupdescription,
            required:true,
            isValidUser: true,
          },
        });
      }
  };
  CategoryList = data => {
    let obj = data.find(o => o.isChecked === true);

    if (obj != undefined) {
      this.setState({
        categoryId: obj.txt,
        categoryCheck: {
          ...this.state.categoryCheck,
          isValidUser: false,
        },
      });
    }
  };
  handleValidUser = val => {
    if (val.trim().length >= 20) {
      this.setState({
        data: {
          ...this.state.data,
          required: false,
          isValidUser: true,
        },
      });
    } else {
      this.setState({
        data: {
          ...this.state.data,
          required: false,
          isValidUser: false,
        },
      });
    }
  };
  handleGroupDesctiption = val => {
    if (val.trim().length >= 200) {
      this.setState({
        groupdescription: {
          ...this.state.groupdescription,
          required: false,
          isValidUser: true,
        },
      });
    } else {
      this.setState({
        groupdescription: {
          ...this.state.groupdescription,
          required: false,
          isValidUser: false,
        },
      });
    }
  };

  requestPermissionForAndroid = async () => {
    const permisssion = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    return permisssion;
  };
  onPictureCapture = async () => {
    if (Platform.OS === 'android') {
      let permisssion = await this.requestPermissionForAndroid();
      if (permisssion == PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.openPicker(imageSettings)
          .then(image => {
            imageOptionsSelect.close();

            this.setState({capturedImage: image});
            // setCapturedImage('Capture Image', image);
          })
          .catch(err => {
            console.log('Err====>', err);
            imageOptionsSelect.close();
          });
      }
    } else {
      ImagePicker.openPicker(imageSettings)
        .then(image => {
          imageOptionsSelect.close();

          this.setState({capturedImage: image});
          // setCapturedImage('Capture Image', image);
        })
        .catch(err => {
          console.log('Err====>', err);
          imageOptionsSelect.close();
        });
    }
  };
  onPictureGalleryCapture = async () => {
    if (Platform.OS === 'android') {
      let permisssion = await this.requestPermissionForAndroid();
      if (permisssion == PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(async image => {
          var arr = [];
          arr.push(image);
          this.setState({capturedImage: arr});
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
        this.setState({capturedImage: arr});
        imageOptionsSelect.close();
        console.log(image);
      });
    }
  };
  goBack = () => {
    CompleteOptionsSelect.close()
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView>
          <ImageBackground
            source={Images.backgroundtwo}
            style={styles.createCommunityImageContainer}
            resizeMode="cover">
            <View style={styles.communityCreateTopButtonsContainer}>
              <View style={styles.createCommunityTopButtonsContainer}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <ImageView
                    src={Images.left_arrow}
                    imageStyle={styles.profileTopBackImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.createCommunityTextHeader}>New Community</Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'rgba(139, 134, 186,0.1)',
                justifyContent: 'space-around',
                paddingHorizontal: widthPercentageToDP('2%'),
                marginTop: 10,
                paddingVertical: heightPercentageToDP('1.2%'),
                borderRadius: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    this.state.communityType == 'Social'
                      ? 'rgba(99, 240, 164,0.8)'
                      : '#ECECEC',
                  width: '47%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  padding: heightPercentageToDP('1.8%'),
                }}
                onPress={() => this.setState({communityType: 'Social'})}>
                <Text style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.createCommunityTextSocial}>Social</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    this.state.communityType == 'Study'
                      ? 'rgba(99, 240, 164,0.8)'
                      : '#ECECEC',
                  width: '47%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}
                onPress={() => this.setState({communityType: 'Study'})}>
                <Text style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.createCommunityTextStudy}>Study</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#EFEFEF',
              borderBottomWidth: 1,
              marginTop: 30,
            }}
          />
          <View style={{padding: 20}}>
            <View>
              <Text style={styles.createCommunityInfoHeader}>Info</Text>
            </View>
            <View>
              <Text style={styles.settingTextInputText}>Group Name</Text>
              <View style={styles.communityNewTextInputContainerTop}>
                {/* <View style={styles.action}>
        <FontAwesome 
            name="user-o"
            color={colors.text}
            size={20}
        /> */}
                <TextInput
                  placeholder={'Mountain Biking Crew'}
                  placeholderTextColor={'#8b86ba'}
                  style={styles.createCommunityTextInput}
                
                  value={this.state.communityName}
                  // autoCapitalize="none"
                  onChangeText={val => this.setState({communityName: val})}
                  onEndEditing={e => this.handleValidUser(e.nativeEvent.text)}
                />
              </View>
              {this.state.data.isValidUser && (
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
                    {this.state.data.required
                      ? 'Please write community name'
                      : this.state.data.message}
                  </Text>
                </Animatable.View>
              )}
            </View>
            <View style={{marginTop: 15}}>
              <CategorySelectBottomSheet
                inputStyle={{marginVertical: 10}}
                first={false}
                categoryName={
                  this.state.categoryId != ''
                    ? this.state.categoryId
                    : 'Select category'
                }
                categoryColor={{color: '#8b86ba'}}
                multipleSelect={false}
                Closed={data => this.CategoryList(data)}
              />
              {this.state.categoryCheck.isValidUser && (
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
                    {this.state.categoryCheck.message}
                  </Text>
                </Animatable.View>
              )}
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 5,
                marginTop: 15,
                borderRadius: 10,
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.29,
                shadowRadius: 4.65,

                elevation: 7,
                shadowColor: '#000',
                height: 250,
              }}>
              <Text
                style={{
                  //    backgroundColor: '#fff',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  //    paddingHorizontal: 20,
                  color: '#8b86ba',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  marginBottom: Platform.OS === 'ios' ? 0 : -10,
                  paddingTop: 5,
                }}>
                Group Description
              </Text>
              {/* <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                /> */}
              <TextInput
                placeholder="Hi..."
                placeholderTextColor={'#00035c'}
                multiline
                style={[
                  styles.feedbackTextInput,
                  {
                    height: '90%',
                    backgroundColor: 'transparent',
                    textAlign: 'left',
                    textAlignVertical: 'top',
                  },
                ]}
                value={this.state.communityDescription}
                // autoCapitalize="none"
                onChangeText={val => this.setState({communityDescription: val})}
                onEndEditing={e =>
                  this.handleGroupDesctiption(e.nativeEvent.text)
                }
              />
            </View>
            {this.state.groupdescription.isValidUser && (
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
                  {this.state.groupdescription.required
                    ? 'Please write group description'
                    : this.state.groupdescription.message}
                </Text>
              </Animatable.View>
            )}
            {this.state.capturedImage != '' &&
            this.state.capturedImage != undefined ? (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  paddingLeft: 20,
                  paddingVertical: 5,
                  marginTop: 15,
                  borderRadius: 10,
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.29,
                  shadowRadius: 4.65,

                  elevation: 7,
                  shadowColor: '#000',
                  justifyContent: 'space-between',
                }}
                onPress={() => imageOptionsSelect.open()}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <ImageView
                      src={{
                        uri:
                          this.state.capturedImage[0]?.path == undefined
                            ? this.state.capturedImage.path
                            : this.state.capturedImage[0]?.path,
                      }}
                      imageStyle={{width: 45, height: 45}}
                    />
                  </View>
                  <View style={{marginLeft: 15, justifyContent: 'center'}}>
                    <Text style={styles.createCommunityUploadText}>
                      Upload an image (.jpg .png)
                    </Text>
                    <Text style={styles.createCommunityUploadInnerText}>
                      828 x 628 px (Recommended)
                    </Text>
                  </View>
                </View>
                <View>
                  <ImageView
                    src={Images.upload}
                    imageStyle={{width: 60, height: 60}}
                  />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  paddingLeft: 20,
                  paddingVertical: 5,
                  marginTop: 15,
                  borderRadius: 10,
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.29,
                  shadowRadius: 4.65,

                  elevation: 7,
                  shadowColor: '#000',
                  justifyContent: 'space-between',
                }}
                onPress={() => imageOptionsSelect.open()}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <ImageView
                      src={Images.gallery}
                      imageStyle={{width: 45, height: 45}}
                    />
                  </View>
                  <View style={{marginLeft: 15, justifyContent: 'center'}}>
                    <Text style={styles.createCommunityUploadText}>
                      Upload an image (.jpg .png)
                    </Text>
                    <Text style={styles.createCommunityUploadInnerText}>
                      828 x 628 px (Recommended)
                    </Text>
                  </View>
                </View>
                <View>
                  <ImageView
                    src={Images.upload}
                    imageStyle={{width: 60, height: 60}}
                  />
                </View>
              </TouchableOpacity>
            )}

            <View
              style={{
                backgroundColor: '#fff',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.29,
                shadowRadius: 4.65,

                elevation: 7,
                shadowColor: '#000',
                marginTop: 15,
                borderRadius: 10,
                height: 200,
              }}>
              <TagInput
                // onKeyPress={(e) => e.key === 'Space'}
                updateState={this.updateTagState}
                tags={this.state.tags}
                placeholder="#text goes here"
                placeholderTextColor={'#00035c'}
                label="Tags (please add upto 5 tags)"
                style={{
                  fontFamily: 'Poppins-Medium',
                  width: '100%',
                  fontSize: 14,
                  paddingHorizontal: 8,
                  color: '#000',
                }}
                labelStyle={styles.createCommunityLableStyle}
                //   leftElement={<Icon name={'tag-multiple'} type={'material-community'} color={this.state.tagsText}/>}
                //   leftElementContainerStyle={{marginLeft: 3}}
                containerStyle={{width: Dimensions.get('window').width - 40}}
                inputContainerStyle={
                  ([styles.tagsTextInput],
                  {
                    color: 'blue',
                    marginTop: Platform.OS === 'ios' ? 7 : -7,
                    marginBottom: Platform.OS === 'ios' ? 0 : -18,
                  })
                }
                inputStyle={{color: '#00035c'}}
                onFocus={() =>
                  this.setState({tagsColor: '#000', tagsText: mainColor})
                }
                onBlur={() =>
                  this.setState({tagsColor: mainColor, tagsText: '#fff'})
                }
                autoCorrect={false}
                tagStyle={styles.Tag}
                deleteIconStyles={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                deleteElement={
                  <ImageView
                    src={require('../../images/closetag.png')}
                    imageStyle={{
                      width: widthPercentageToDP('2.9%'),
                      height: heightPercentageToDP('1.5%'),
                      marginRight: 10,
                    }}
                  />
                }
                tagTextStyle={styles.tagText}
                keysForTag={' '}
              />
            </View>
            <View>
              {this.state.tagslimit.isValidUser && (
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
                    {this.state.tagslimit.message}
                  </Text>
                </Animatable.View>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text style={styles.createCommunityPrivate}>Private group?</Text>
              <ToggleSwitch
                isOn={this.state.privateSwitch}
                onColor="#63f0a4"
                offColor="grey"
                label=""
                labelStyle={{color: 'black', fontWeight: '900'}}
                size="medium"
                onToggle={isOn => this.setState({privateSwitch: isOn})}
              />
            </View>
            <View>
              <Text style={styles.createCommunityMembers}>
                Members will need to request to join
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#EFEFEF',
                borderBottomWidth: 1,
                marginTop: 10,
              }}
            />
            <View style={styles.createCommunityfeedbackBottomButtonContainer}>
              <TouchableOpacity
                style={[
                  styles.feedbackBottomSendContainer,
                  {backgroundColor: '#00035c'},
                ]}
                onPress={() => this.communityAdd()}>
                <View
                  style={{
                    justifyContent: 'center',
                    paddingHorizontal: widthPercentageToDP('2%'),
                  }}>
                  <Text style={styles.settingButtonTextStyle}>{'Next'}</Text>
                </View>
                <View style={styles.feedbackImageVerticalLine} />
                {this.state.uploading == true ? (
                  <ActivityIndicator
                    size="small"
                    color="#0000ff"
                    style={styles.feedbackImageLeftArrow}
                  />
                ) : (
                  <ImageView
                    src={Images.short_right2x}
                    imageStyle={styles.feedbackImageLeftArrow}
                  />
                )}
              </TouchableOpacity>
              {/* <ButtonText text="Next" inputStyle={[styles.feedbackBottomSendContainer,this.state.uploading ==true ?{ backgroundColor:'grey'} : {backgroundColor:'#00035c'}]} GoNext={()=>this.communityAdd()} disabled={this.state.uploading ==true ? true :false}/> */}
              <View style={[styles.feedbackBottomButtonInner]}>
                <Text style={styles.feedbackBottomCancelText}>Cancel</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
         <SafeAreaView style={[styles.feedbackContainer,{padding:10}]}>
            <View style={{flex:1,backgroundColor:'#fff',shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:Platform.OS === 'ios' ? 0.10: 0.29,
    shadowRadius: 4.65,

    elevation: 7,borderTopRightRadius:40}}>
            <TouchableOpacity style={styles.feedbackCrossButton} onPress={()=>this.goBack()}>
            <ImageView src={Images.cross} imageStyle={styles.feedbackCrossImageView}/>
            </TouchableOpacity>
            <View style={styles.feedbackCourseContainer}>
            <View style={styles.feedbackInnerCourseContainer}>
            <Text style={[styles.feedbackHeaderText]}>Bravo!</Text>
            {/* {this.props.props.route.params.check == true ?  */}
            {/* <Text style={[styles.feedbackInnerHeaderText,{marginTop:18}]}>Your community is almost edited.</Text> : */}
            <Text style={[styles.feedbackInnerHeaderText,{marginTop:18}]}>Your community is almost ready.</Text>
            
            <Text style={[styles.feedbackInnerHeaderText,{marginTop:20}]}>Please wait for an approval from admin.</Text>
            <Text style={[styles.feedbackInnerHeaderText,{marginTop:20}]}>This can take upto 5 working days.</Text>
           
           
           
            </View>
           
            </View>
            <TouchableOpacity style={{alignItems:'flex-end',margin:20}} onPress={()=>this.goBack()}>
              
                <Text style={{backgroundColor:'#f3f3f4',paddingVertical:5,paddingHorizontal:25,color:'#00035c',fontFamily:'Poppins-Bold',fontSize:16,lineHeight:40,textAlign:'left',textAlignVertical:'top',borderRadius:8}}>Got it</Text>
           </TouchableOpacity>
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
          <View
            style={{marginHorizontal: 15, marginTop: 10, marginBottom: -10}}>
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
            <TouchableOpacity onPress={() => this.onPictureCapture()}>
              <ImageView
                src={Images.gallery}
                imageStyle={{width: 40, height: 40}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPictureGalleryCapture()}>
              {/* <ImageView src={Images.camera} imageStyle={{width:50,height:50,marginLeft:10}} /> */}
              <Icons
                name="camera"
                size={40}
                color="#00035c"
                style={{marginLeft: 20}}
              />
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    );
  }
}
function mapStateToProp(state) {
  return {
    users: state.users,
  };
}

const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(communityNew);
