
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

import Icons from 'react-native-vector-icons/FontAwesome';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import {editEvent} from '../../Core/Events/editEvent';
import {imageSettings} from '../../constants';
import {getAllUsers} from '../../Core/Profile/allProfiles';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import functions from '@react-native-firebase/functions';
import TimeLoc from '../../components/EditEvents/TimeLocations';
import { auth } from '../../Core/config/config';
import moment from 'moment';
const mainColor = '#000';
let imageOptionsSelect;
let eventCompleteRef;
var notiee;
var unique = [];
const {width, height} = Dimensions.get('window');
class index extends React.Component {
  constructor(props) {
    super(props);
    console.log("Ds===d========>",props.route.params.data.event_repeat_status)
    this.state = {
      tags: {
        tag: '',
        tagsArray: [],
      },
      arr:['View All'],
      value:props.route.params.data.event_type == 'In-person' ? props.route.params.data.event_location : props.route.params.data.event_link,
      tagsColor: mainColor,
      tagsText: '#000',
      capturedImage:'',
      community_id:props.route.params.id,
      uploading: false,
      transfered: 0,
      privateSwitch: false,
      communityType: props.route.params.data.event_type,
      communityName: props.route.params.data.event_name,
      participant_number:props.route.params.data.participant_number,
      unlimited_participant:props.route.params.data.unlimited_participant,
      categoryId: props.route.params.data.event_category,
      monthId:props.route.params.data.event_repeat_status,
      communityDescription: props.route.params.data.event_description,
      timerequired: {
        message: 'Please add start and end time/date',
        required: false,
        isValidUser: false,
      },
      timecheck: {
        message: 'Maximum characters:20',
        required: false,
        isValidUser: false,
      },
      participantsrequired: {
        message: 'Please select checkbox or participants limit',
        required: false,
        isValidUser: false,
      },
      timecheckend: {
        message: 'Maximum characters:20',
        required: false,
        isValidUser: false,
      },
      timestart:props.route.params.data.event_start_time,
      timeend:props.route.params.data.event_end_time,
      datestart:props.route.params.data.event_start_date,
      dateend:props.route.params.data.event_end_date,
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
      addressCheck: {
        message: 'Please fill address field',
        required: false,
        isValidUser: false,
      },
    };
  }
  updateTagState = state => {
    if (state.tagsArray.length < 6) {
      this.setState({
        tags: state,
        tagslimit: {
          ...this.state.tagslimit,
          required: false,
          isValidUser: false,
        },
      });
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
    // this.props.navigation.navigate('CommunityComplete')
    var event_location = ''
    var event_link = ''
    var part = this.state.participant_number
    console.log("Ddddddddd===========?",this.state.participant_number)
    console.log("Dssaaaaa============>",this.state.unlimited_participant)
    if(this.state.participant_number == '0'){
      part = '0'
    }
    if(this.state.participant_number == ''){
      part = '0'
    }
    // this.props.navigation.navigate('CommunityComplete')
    var checkParticipants ='false'
    console.log("Rrrrrrrrokok======>",part,this.state.unlimited_participant)
    if(part == '0' && this.state.unlimited_participant == false ){
      checkParticipants = 'true'
      
    }
    if(this.state.unlimited_participant == false && this.state.participant_number == null){
      checkParticipants = 'true'
      
    }
    if (
      this.state.data.isValidUser == false &&
      this.state.groupdescription.isValidUser == false &&
      this.state.categoryId != '' &&
      // this.state.tags.tagsArray.length < 6 &&
      this.state.communityDescription != '' &&
      this.state.communityName != '' &&
      this.state.timestart !='' && this.state.timeend != '' && this.state.datestart !='' && this.state.dateend !='' && this.state.value !=''&&  this.state.timecheck.required ==false && this.state.timecheckend.required ==false && checkParticipants == 'false'
    ) {
      if (this.state.capturedImage != '') {
        const filename = this.state.capturedImage[0].path.substring(
          this.state.capturedImage[0].path.lastIndexOf('/') + 1,
        );
        const uploadUri =
          Platform.OS === 'ios'
            ? this.state.capturedImage[0].path.replace('file://', '')
            : this.state.capturedImage[0].path;

        this.setState({uploading: true});
        // setUploading(true);
        // setTransferred(0);
        const task = storage().ref(filename).putFile(uploadUri);
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
        await task.snapshot.ref.getDownloadURL().then(downloadURL => {
          let checkPrivate =
            this.state.privateSwitch == false ? 'In-person' : 'Online';
            if(this.state.communityType == 'In-person'){
                event_location = this.state.value,
                event_link = ''
              }
              else {
                  event_location = null,
                event_link = this.state.value
              }
              var participant = this.state.participant_number == '0' ? null : this.state.participant_number
              if(this.state.unlimited_participant == true){
                participant = null
              }
              var pend = ''
            console.log("Ewewewewewewewww=======>",auth()?.currentUser?.uid == this.props.route.params.data )
              if(auth()?.currentUser?.uid == this.props.route.params.data ) {
                pend = 'Approved'
              }
              else {
                pend = 'Pending'
              }
            editEvent(
            this.props.users.id,
            this.state.communityName,
            this.state.communityType,
            checkPrivate,
            this.state.categoryId,
            this.state.communityDescription,
            downloadURL,
            'Approved',
            this.state.timestart,
            this.state.timeend,
            this.state.datestart,
            this.state.dateend,
            participant,
            this.state.unlimited_participant,
            this.state.monthId,
            this.state.community_id,
            this.props.route.params.event_id,
            event_location,
            event_link,
            this.props.dispatch,(res)=>{
                this.setState({uploading: false});
                // this.props.navigation.navigate('CommunityComplete', {check: false});
                eventCompleteRef.open()
            }
          );

          
          // Alert.alert(
          //   'Community Created!',

          // );
        });
      } else {
        this.setState({uploading: true});
        let checkPrivate =
          this.state.privateSwitch == false ? 'In-person' : 'Online';
          if(this.state.communityType == 'In-person'){
            event_location = this.state.value,
             event_link = ''
          }
          else {
             event_location = null,
             event_link = this.state.value
          }
          var participant = this.state.participant_number == '0' ? null : this.state.participant_number
          if(this.state.unlimited_participant == true){
            participant = null
          }
          var pend = ''
          console.log("Ewewewewewewewww=======>",auth()?.currentUser?.uid == this.props.route.params.data )
            if(auth()?.currentUser?.uid == this.props.route.params.data ) {
              pend = 'Approved'
            }
            else {
              pend = 'Pending'
            }
        editEvent(
          this.props.users.id,
          this.state.communityName,
          this.state.communityType,
          checkPrivate,
          this.state.categoryId,
          this.state.communityDescription,
          'https://upload.wikimedia.org/wikipedia/commons/f/f8/01_Icon-Community%402x.png',
          'Approved',
            this.state.timestart,
            this.state.timeend,
            this.state.datestart,
            this.state.dateend,
            participant,
            this.state.unlimited_participant,
            this.state.monthId,
            this.state.community_id,
            this.props.route.params.event_id,
            event_location,
            event_link,
            this.props.dispatch,
            (res)=>{
                this.setState({uploading: false});
                // this.props.navigation.navigate('CommunityComplete', {check: false});
                eventCompleteRef.open()
            }
        );
        // if(notiee !=undefined){
        console.log('Biti====================>', notiee);

        // }
        // Alert.alert(
        //   'Community Created!',

        // );
        // this.setState({uploading: false});
        // this.props.navigation.navigate('CommunityComplete', {check: false});
      }
      var my_array = unique.filter(item => item);

      notiee = {
        tokens: my_array,
        body: 'New Event Created',
        title: this.state.communityName,
      };

      if (notiee != undefined) {
        console.log('obj==============================>', notiee);
        const call = functions().httpsCallable('sendMultiNotifications');
        call(notiee)
          .then(({data}) => {
            console.log('success call to email cloud function'); // hello world
          })
          .catch(httpsError => {
            alert(httpsError.message);
            console.log(httpsError.code); // invalid-argument
            console.log(httpsError.message); // Your error message goes here
          });
      }
    }
    if (this.state.categoryId == '') {
      this.setState({
        categoryCheck: {
          ...this.state.categoryCheck,
          isValidUser: true,
        },
      });
    }

    if (this.state.communityName == '') {
      this.setState({
        data: {
          ...this.state.data,
          required: true,
          isValidUser: true,
        },
      });
    }
    if (this.state.communityDescription == '') {
      this.setState({
        groupdescription: {
          ...this.state.groupdescription,
          required: true,
          isValidUser: true,
        },
      });
    }
    if(this.state.value ==''){
        this.setState({
          addressCheck: {
            ...this.state.addressCheck,
            required: true,
            isValidUser: true,
          },
        });
      }
      if(checkParticipants == 'true'){
        this.setState({
          participantsrequired: {
            ...this.state.participantsrequired,
            required: true,
            isValidUser: true,
          },
        });
      }
      if(checkParticipants == 'false'){
        this.setState({
          participantsrequired: {
            ...this.state.participantsrequired,
            required: false,
            isValidUser: false,
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
  monthList = data => {
    let obj = data.find(o => o.isChecked === true);

    if (obj != undefined) {
      this.setState({
        monthId: obj.txt,
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
  compareTime = (val,res,st)=> {
    console.log("Calll======>",val,res)
    var dd =''
    if(st == 'start'){
      var now = new Date();
      var d = new Date(val); // pass all the parameters you need to create the time
      var date1 =  moment(now).format('L')
     
      // console.log("fdd==========?llllllllllllllll",dd,now)
      console.log("Caldd========>",now.getTime())
      console.log("Caldd========>",d.getTime())
      console.log("Caldd========>",this.state.datestart )
      console.log("Caldd========>",date1 )
      if (now.getTime() > d.getTime() && this.state.datestart == date1) {
          // the date stored in `d` is in the past.
          this.setState({
            timecheck: {
              ...this.state.timecheck,
              required: true,
              isValidUser: true,
            },
          });
  
      }
      else {
        this.setState({
          timecheck: {
            ...this.state.timecheck,
            required: false,
            isValidUser: false,
          },
          timestart:res
        });
      }
    }
    else {
      var now = new Date();
      var d = new Date(val); // pass all the parameters you need to create the time
      var date1 =  moment(now).format('L')
     
      // var dd = new Date(this.state.datestart)
      // console.log("fdd==========?",this.state.datestart)
      
      // console.log("Caldd========>",this.state.timeend)
      if (now.getTime() > d.getTime() && this.state.dateend == date1) {
        var now = new Date();
       var date1 = now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate();
       var d = new Date(this.state.dateend);
    var date2 = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate(); 
          // the date stored in `d` is in the past.
          if(date1 == date2){
            this.setState({
              timecheckend: {
                ...this.state.timecheckend,
                required: true,
                isValidUser: true,
              },
            });
          }
         
  
      }
      else {
        this.setState({
          timecheckend: {
            ...this.state.timecheckend,
            required: false,
            isValidUser: false,
          },
          timeend:res
        });
      }
    }
   
  }
  compareDate = (val,res,st) => {
    var now = new Date();
    var date1 = now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate();
    var d = new Date(val);
    var date2 = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
    // console.log("Caldd========>",date1)
    // console.log("Caldd========>",date2)
    if(st == 'start'){
      this.setState({
       
        datestart:res
      });
    }
    else {
      this.setState({
       
        dateend:res
      });
    }
    if(date1 == date2 && st == 'start' &&  this.state.timestart !='' ){
      // if (now.getTime() > d.getTime(){
        
      // }
      this.setState({
        timecheck: {
          ...this.state.timecheck,
          required: true,
          isValidUser: true,
        },
      });
    }
    else {
      this.setState({
        timecheck: {
          ...this.state.timecheck,
          required: false,
          isValidUser: false,
        },
      });
    }
    // console.log("Caldd========>",date1)
    // console.log("Caldd========>",date2)
    // console.log("Caldd========>",st )
    // console.log("Caldd========>",this.state.timestart)
    if(date1 == date2 && st == 'end' &&  this.state.timeend !='' ){
      this.setState({
        timecheckend: {
          ...this.state.timecheckend,
          required: true,
          isValidUser: true,
        },
      });
    }
    else {
      this.setState({
        timecheckend: {
          ...this.state.timecheckend,
          required: false,
          isValidUser: false,
        },
      });
    }
  }
  
  dropdownCheck =(id,val)=>{
  console.log("CheckValue=====>",id,val)
  this.setState({participant_number:val,
 })
  }
   unlimitedCheck= (val)=> {
    console.log("CheckValue=d====>",val)
    this.setState({unlimited_participant:val,
    })
    
   }
   changeText = (val) => {
     this.setState({value:val})
   }
  render() {
      console.log("fddddddd",this.state.monthId)
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
            <Text style={styles.createCommunityTextHeader}>Edit Event</Text>
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
                // disabled={true}
                style={{
                  backgroundColor:
                    this.state.communityType == 'In-person'
                      ? 'rgba(99, 240, 164,0.8)'
                      : '#ECECEC',
                  width: '47%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  padding: heightPercentageToDP('1.8%'),
                }}
                onPress={() => this.setState({communityType: 'In-person',value:''})}>
                <Text style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.createCommunityTextSocial}>
                    In-Person
                  </Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                // disabled={true}
                style={{
                  backgroundColor:
                    this.state.communityType == 'Online'
                      ? 'rgba(99, 240, 164,0.8)'
                      : '#ECECEC',
                  width: '47%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}
                onPress={() => this.setState({communityType: 'Online',value:''})}>
                <Text style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.createCommunityTextStudy}>Online</Text>
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
              <Text style={styles.settingTextInputText}>Event Name</Text>
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
                  selectionColor={'black'}
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
                      ? 'Please write event name'
                      : this.state.data.message}
                  </Text>
                </Animatable.View>
              )}
            </View>
            {/* <View style={{marginTop:15}}>
   <CategorySelectBottomSheet inputStyle={{marginVertical: 10,}} first={false} categoryName={this.state.categoryId !='' ?this.state.categoryId :'Select category'} categoryColor={{color:'#8b86ba'}} multipleSelect={false} Closed={(data)=>this.CategoryList(data)}/>
   { this.state.categoryCheck.isValidUser && (
    <Animatable.View animation="fadeInLeft" duration={500} style={{alignItems:'flex-start',width:'85%',marginTop:10}}>
    <Text style={{color:'#E4434E',fontFamily:'Poppins-Bold',fontSize:12}}>{this.state.categoryCheck.message}</Text>
    </Animatable.View>
           )
              
               }
   </View> */}
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
                Event Description
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
                style={[styles.feedbackTextInput,  {
                  height: '90%',
                  backgroundColor: 'transparent',
                  textAlign: 'left',
                  textAlignVertical: 'top',
                },]}
                value={this.state.communityDescription}
                // autoCapitalize="none"
                onChangeText={val => this.setState({communityDescription: val})}
                onEndEditing={e =>
                  this.handleGroupDesctiption(e.nativeEvent.text)
                }
              />
            </View>
            {/* //ERROR MSG  */}
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
                    ? 'Please write event description'
                    : this.state.groupdescription.message}
                </Text>
              </Animatable.View>
            )}
            {this.state.capturedImage != '' &&
            this.state.capturedImage != undefined ? (
              <View
              style={{
                
                backgroundColor: '#fff',
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
              }}
              >

              <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
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
                      Upload an image (.jpg .png)+++
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

              <View stye={{backgroundColor:"red" ,  }}>
              <ImageView
                      src={{
                        uri:
                          this.state.capturedImage[0]?.path == undefined
                            ? this.state.capturedImage.path
                            : this.state.capturedImage[0]?.path,
                      }}
                      imageStyle={{width: "94%", height: 270, marginBottom:15}}
                    />
              </View>
  </View>

            ) : (
                <>
                 <View
              style={{
                
                backgroundColor: '#fff',
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
              }}
              >

              <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
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
                      Upload an image (.jpg .png)+++
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

              <View stye={{backgroundColor:"red" ,  }}>
              <ImageView
                      src={{
                        uri:this.props.route.params.data.event_image,
                      }}
                      imageStyle={{width: "94%", height: 270, marginBottom:15}}
                    />
              </View>
  </View>
               </>
            )}
            <View style={styles.BorderLine} />
            {/* ////////////////////////////TIME LOCATION  /////////////////////////////// */}
            <View style={{marginTop: 40}}>
              <TimeLoc  timecheck ={(val,res,st)=>this.compareTime(val,res,st)} time={this.state.timecheck} timend={this.state.timecheckend} datecheck ={(val,res,st)=>this.compareDate(val,res,st)} category={(data)=>this.monthList(data)} dropdownCheck={(id,val)=>this.dropdownCheck(id,val)} unlimitedCheck={(val)=>this.unlimitedCheck(val)} val = {this.state.value}  changetext={(val)=>this.changeText(val)} communityType={this.state.communityType} timestart1 = {this.state.timestart}
      timeend1 ={this.state.timeend}
      datestart1 ={this.state.datestart}
      dateend1 ={this.state.dateend} monthsId={this.state.monthId}  addresscheck={this.state.addressCheck} participantsRequired={this.state.participantsrequired} participantsNumber={this.state.participant_number} unlimitedParticipants = {this.state.unlimited_participant}/>
            </View>
            {/* ///////////////////////////////////////// TIME LOCATION END//////////////////////////// */}

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
                    
                  <Text style={styles.settingButtonTextStyle}>{'Update'}</Text>
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
            eventCompleteRef = ref;
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
           <SafeAreaView style={[styles.feedbackContainer,{padding:10}]}>
            <View style={{flex:1,backgroundColor:'#fff',shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:Platform.OS === 'ios' ? 0.10: 0.29,
    shadowRadius: 4.65,

    elevation: 7,borderTopRightRadius:40}}>
            <TouchableOpacity style={styles.feedbackCrossButton} onPress={()=>this.props.navigation.navigate('Home')}>
            <ImageView src={Images.cross} imageStyle={styles.feedbackCrossImageView}/>
            </TouchableOpacity>
            <View style={styles.feedbackCourseContainer}>
            <View style={styles.feedbackInnerCourseContainer}>
            <Text style={[styles.feedbackHeaderText]}>Event Edited</Text>
           
            <Text style={[styles.feedbackInnerHeaderText,{marginTop:18}]}>Your event is almost ready.</Text> 
            
            <Text style={[styles.feedbackInnerHeaderText,{marginTop:20}]}>Please wait for an approval from admin.</Text>
            <Text style={[styles.feedbackInnerHeaderText,{marginTop:20}]}>This can take upto 5 working days.</Text>
           
           
           
            </View>
           
            </View>
            <TouchableOpacity style={{alignItems:'flex-end',margin:20}} onPress={()=>this.props.navigation.navigate('Home')}>
              
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
export default connect(mapStateToProp)(index);
