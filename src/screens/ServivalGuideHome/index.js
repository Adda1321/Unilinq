import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  PixelRatio,
  BackHandler,
  Alert,
  TextInput,
  Platform,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {appStyles} from '../../style';
import ImageView from '../../components/Image';
import {FontFamilies, Images} from '../../utils';
import * as _ from 'lodash';
import {Card} from 'react-native-shadow-cards';
const {height, width} = Dimensions.get('window');
const halfWidth = width / 2;
import { auth , firestore } from '../../Core/config/config';
import {connect} from 'react-redux';
import CommunitesTemp from '../../components/Communitestemp'; //delete later
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import Carousel from '../../components/Carousel/index';
import moment from 'moment';
import {getCommunity} from '../../Core/Communities/getCommunity';
import {getEvents} from '../../Core/Events/getEvents';
import {getRooms} from '../../Core/ChatQuery/getRooms';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 1,
      count:'' ,
      loading: false,
     
      communites: [],
      
    };
  }

  backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to EXIT?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  // componentWillUnmount() {
  //   this.backHandler.remove();
  // }
  // componentDidUpdate(){

  //       // console.warn("USEr---------------------------->>>",this.props.users);
  //       // console.log("USEr---------------------------->>>",this.props.users);

  //   firestore()
  //   .collection('Users')
  //   .doc(this.props.users.id) 
  //   .onSnapshot(documentSnapshot => {
  //     // return documentSnapshot.data().active_count ;
  //     // console.log('User data ------------------------------------COUNT1---------------------------------------------: ', documentSnapshot.data());
  //     console.log('User data ------------------------------------COUNT1---------------------------------------------: ', documentSnapshot.data().active_count);
  //     //  this.setState( {count : documentSnapshot.data().active_count } )
  //   });

    // console.log("COUNT---------------------------COUNT------------->>>>",count )

    // firestore()
    // .collection('Users')
    // .doc(this.props.users.id)
    // .update({
    //   active_count: count+1;
    // })


  // }
  async componentDidMount() {


    getRooms(this.props.dispatch);
    
    if (this.props.route.params.login == false) {
      await getCommunity(this.props.dispatch);
      await getNotifications(this.props.dispatch);
      await getEvents(this.props.dispatch);
    }
    this.setState({loading: true});
    let pixels = 32;
    let response = (pixels * 100) / height;
   

  

   

  }
  checkNotification = () => {};
  navigateApp = index => {};
  onTabClick = currentTab => {
    this.setState({
      currentTab: currentTab,
    });
  };

  render() {
    // console.log('ROOM GET  =======================>', this.props.allRooms);
    
    
    return (
      <View style={[styles.homeScreenMainContainer]}>
        <ScrollView
          contentContainerStyle={[
            styles.homeScreenScrollContainer,
            {backgroundColor: '#fff'},
          ]}>
          {/* <ImageView  src={Images.homeTop}  imageStyle={styles.blackBack}  /> */}
          <ImageBackground
            source={Images.explor}
            style={styles.homeScreenImageContainer}
            resizeMode="cover"
            imageStyle={{borderBottomRightRadius: 60}}>
            <View style={styles.joinCommunityTextTwo}>
              <View style={styles.profilebarMainContainer}>
                <View style={styles.profilebarInnerContainer}>
                  <View style={styles.profilebarButtonContainer}>
                    {!this.props.users?.loading ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                        }}>
                        <View>
                          <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={{width: 40, height: 40, borderRadius: 25}}
                          />
                        </View>
                        <ShimmerPlaceHolder
                          LinearGradient={LinearGradient}
                          style={{width: '50%'}}
                        />
                      </View>
                    ) : (
                      <>
                        <TouchableOpacity
                          style={styles.profilebarButton}
                          onPress={() =>
                            this.props.navigation.navigate('Profile')
                          }>
                          <Text
                            style={[
                              styles.profilebarButtonText,
                              {lineHeight: 28},
                            ]}>
                            {this.props.users?.first_name?.charAt(0)}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{flexDirection: 'row'}}
                          onPress={() =>
                            this.props.navigation.navigate('Profile')
                          }>
                          <Text
                            style={{
                              textAlign: 'center',
                              alignSelf: 'center',
                              paddingLeft: 7,
                              paddingTop: Platform.OS === 'ios' ? 0 : 2,
                            }}>
                            <Text style={styles.profilebarText}>Hi, </Text>
                            <Text style={[styles.profilebarTextT]}>
                              {this.props.users.first_name}
                            </Text>
                          </Text>
                        </TouchableOpacity>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate('Search')
                            }>
                            <ImageView
                              src={require('../../images/search.png')}
                              imageStyle={styles.profilebarSearchImage}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            // disabled={true}
                            onPress={() =>
                              this.props.navigation.navigate('CommunityCreate')
                            }>
                            <ImageView
                              src={Images.plus}
                              imageStyle={styles.profilebarPlusImage}
                            />
                          </TouchableOpacity>
                        </View>
                      </>
                    )}
                  </View>
                </View>

                {!this.props.users?.loading ? (
                  <ShimmerPlaceHolder
                    LinearGradient={LinearGradient}
                    style={styles.profilebarMessageImageContainer}
                  />
                ) : (
                  <TouchableOpacity
                    disabled={
                      this.props.getAllJoinedCommunity?.data == undefined
                        ? true
                        : this.props.getAllJoinedCommunity?.data?.length == 0
                        ? true
                        : false
                    }
                    style={styles.profilebarMessageImageContainer}
                    onPress={() =>
                      this.props.navigation.navigate('Chat', {
                        data: this.props.getAllJoinedCommunity?.data,
                      })
                    }>
                    <View
                      style={{
                        backgroundColor: 'red',
                        alignItems: 'flex-end',
                        width: width * 0.038,
                        height: width * 0.028,
                        alignSelf: 'flex-end',
                        position: 'absolute',
                        bottom: width * 0.095,
                        borderRadius: 6,
                        right: 1,
                        padding: 1,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Bold',
                          fontSize: 6,
                          color: '#fff',
                          textAlign: 'center',
                          alignItems: 'center',
                          alignSelf: 'center',
                        }}>
                        25
                      </Text>
                    </View>
                    <ImageView
                      src={require('../../images/message.png')}
                      imageStyle={{
                        width: width * 0.057,
                        height: width * 0.048,
                        alignSelf: 'center',
                        marginTop: 1.5,
                        borderRadius: 2,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={{position: 'absolute', bottom: -28}}>
              <Text
                style={[
                  styles.joinCommunityText,
                  {marginBottom: 0, marginVertical: 0, fontSize: 20},
                ]}>
                let's start to
              </Text>
              <Text style={[styles.joinCommunityText]}>
                Explore Your Uni-life
              </Text>

              <TouchableOpacity
                // disabled={true}
                style={[styles.topContainer]}
                onPress={() => this.props.navigation.navigate('survivalList')}>
                <View style={{flexDirection: 'row', paddingVertical: 16}}>
                  <Text style={styles.dayText}>
                    {'Semester survival guide'}
                  </Text>
                </View>
                <View style={styles.feedbackImageVerticalLine} />
                <ImageView
                  src={Images.short_right2x}
                  imageStyle={styles.feedbackImageLeftArrow}
                />
              </TouchableOpacity>
            </View>
            {/* </View> */}
          </ImageBackground>
          <View>
            {/* <View style={{backgroundColor:"#fff"}}> */}
            <Carousel navigation={this.props.navigation} />

            {/* ///////////////////////////// COMMUNITY CAROUSAL ///////////////////////// */}
            <View style={{}}>
              <Text
                style={{
                  color: '#E0E0E0',
                  fontFamily: FontFamilies.poppins_bold,
                  fontSize: 24,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                Join a community
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginBottom: 15}}>
                {/* {!this.props.users?.loading && (
                  <ShimmerPlaceHolder
                    LinearGradient={LinearGradient}
                    style={[styles.homeScreenCardSurvival,{position:'absolute'}]}
                  />
                )}  */}
                {/* {console.log("DATA---->",this.props.getCommunity?.data)} */}
                <CommunitesTemp
                  ProfilesData={this.props.getCommunity?.data}
                  SurvivalShow={true}
                  categoryEnable={true}
                  navigation={this.props.navigation}
                  homeStyle={styles.homeScreenCardSurvival}
                  cardStyle={styles.homeScreenCardImageSurvival}
                  colorText={{color: '#00035c', paddingLeft: 10, paddingTop: 5}}
                  topContainer={styles.searchScreenCardContainerTwo}
                />
              </ScrollView>

              {/* ///////////////////////////// COMMUNITY CAROUSAL END ///////////////////////// */}

              {/* ///////////////////////////// EVENT  CAROUSAL START ///////////////////////// */}
              <Text
                style={{
                  color: '#E0E0E0',
                  fontFamily: FontFamilies.poppins_bold,
                  fontSize: 24,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                Upcoming events
              </Text>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 20}}>
                {!this.props.users?.loading ? (
                  <ShimmerPlaceHolder
                    LinearGradient={LinearGradient}
                    style={styles.communityDetailshomeScreenCardEvent}
                  />
                ) : (
                  this.props?.getEvents?.data?.map((product, index) => {
                    if (Platform.OS === 'android') {
                      var dataformat1 =
                        this.props.getEvents.data[index]?.event_start_date;
                      var dataformat = moment(dataformat1, 'MM-DD-YYYY').format(
                        'MMM ddd DD',
                      );
                      // console.log("DataFormat ------------------------------------>",dataformat);

                      if (dataformat != 'Invalid date') {
                        var myArray = dataformat.split(' ');
                        var weekday = myArray[0];
                        // console.log("myArray------------------------------------->",myArray);
                        // // var secondArray = myArray[1].split(' ');
                        var day = myArray[2];
                        var month = myArray[1];
                      } else if (dataformat == 'Invalid date') {
                        var dataformat = moment(
                          dataformat1,
                          'YYYY-MM-DD',
                        ).format('MMM ddd DD');
                        var myArray = dataformat.split(' ');
                        var weekday = myArray[0];
                        // console.log("myArray------------------------------------->",myArray);
                        // // var secondArray = myArray[1].split(' ');
                        var day = myArray[2];
                        var month = myArray[1];
                      } else {
                        var weekday = '';
                        var day = '';
                        var month = '';
                      }
                    } else {
                      var dataformat = moment(
                        this.props.getEvents.data[index]?.event_start_date,
                      ).format('llll');

                      var myArray = dataformat.split(',');
                      var weekday = myArray[0];
                      var secondArray = myArray[1].split(' ');
                      var day = secondArray[2];
                      var month = secondArray[1];
                    }

                    return (
                      !product.community_id && (
                        <View>
                          <TouchableOpacity
                            // disabled
                            onPress={() => {
                              this.props.navigation.navigate('eventDetails', {
                                data: product,
                              });
                            }}>
                            <Card
                              style={[
                                styles.communityDetailshomeScreenCardEvent,
                                {margin: 0},
                              ]}>
                              <ImageBackground
                                style={
                                  styles.communityDetailshomeScreenCardImageEvent
                                }
                                source={{uri: product?.event_image}}
                                resizeMode="stretch">
                                {product.number > 1 && (
                                  <View
                                    style={
                                      styles.communityDetailshomeScreenCardView
                                    }>
                                    {/* <ImageView  src={Images.public}  imageStyle={{width:15,height:15}}  /> */}
                                    <Text
                                      style={
                                        styles.communityDetailsCardImageText
                                      }>
                                      {product.number - 1}
                                    </Text>
                                    <Text
                                      style={
                                        styles.communityDetailsCardImageTextTwo
                                      }>
                                      attendees
                                    </Text>
                                  </View>
                                )}

                                <View style={styles.comhomeScreenCardView}>
                                  <Text
                                    style={styles.sportscommunityPublicText}>
                                    {product.event_category}
                                  </Text>
                                </View>
                              </ImageBackground>
                            </Card>
                            <View style={{width: widthPercentageToDP('75%')}}>
                              <Text
                                style={[
                                  styles.communityDetailsCardImageDateText,
                                  {marginTop: 10, marginHorizontal: 7},
                                ]}>
                                {weekday}
                                {','} {month} {day} {product.event_start_time}
                              </Text>
                              <Text
                                style={[
                                  styles.communityDetailsCardDetailsText,
                                  {marginHorizontal: 7, marginBottom: 15},
                                ]}>
                                {product.event_name}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      )
                    );
                  })
                )}
              </ScrollView>
              {/* </View> */}
            </View>
          </View>
          {/* ///////////////////////////// EVENT CAROUSAL END ///////////////////////// */}

          {/* ///////////////////////////// BOTTOM QUESTION //////////////////////////////////// */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginVertical: 20,
              alignItems: 'center',

              backgroundColor: '#F3F3F4',
              // backgroundColor:"red",

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.1,
              shadowRadius: 4.65,

              elevation: 6,
            }}>
            <TouchableOpacity
              style={[
                styles.communityDetailsjoinCommunitytopContainer,
                {
                  backgroundColor: '#fff',
                  marginVertical: -15,
                  width: widthPercentageToDP('70%'),
                  // paddingTop:10,
                  marginTop: 0,
                },
              ]}
              onPress={() => this.props.navigation.navigate('stafRef')}
              // onPress={() => communityJoin()}
            >
              <View
                style={[
                  styles.survivalcommunityButtonlandingScreenContainer,
                  {
                    width: '100%',
                  },
                ]}>
                <Text
                  style={[
                    styles.communityDetailsdayText,
                    {
                      color: '#00035c',

                      width: widthPercentageToDP('45%'),
                      marginLeft: 15,
                      // fontSize:14,
                    },
                  ]}>
                  Talk to your staff reps
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '25%',
                    justifyContent: 'space-evenly',
                  }}>
                  <View
                    style={{height: 60, width: 1, backgroundColor: '#efefef'}}
                  />
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <ImageView
                      src={Images.short_right}
                      imageStyle={[
                        styles.homeScreenImage,
                        {
                          alignSelf: 'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                      ]}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <ImageView
              src={Images.question}
              imageStyle={[
                styles.survivalcommunityDetailshomeScreenImage,
                {marginTop: 20, marginVertical: 10},
              ]}
            />
          </View>
          {/* ///////////////////////////// BOTTOM QUESTION //////////////////////////////////// */}
        </ScrollView>
        {/* ) : (
          <View style={{justifyContent: 'center', flex: 1}}>
            <Dialog.Loading />
           
          </View>
        )} */}
      </View>
    );
  }
}
function mapStateToProp(state) {
  return {
    allRooms: state.allRooms,
    users: state.users,
    getCommunity: state.getCommunity,
    getEvents: state.getEvents,
    getAllJoinedCommunity: state.getAllJoinedCommunity,
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(index);
