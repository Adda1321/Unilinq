import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  PixelRatio,
  TextInput,
  Platform,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {appStyles} from '../../style';
import ImageView from '../../components/Image';
import {FontFamilies, Images} from '../../utils';
import * as _ from 'lodash';
import {Card} from 'react-native-shadow-cards';
import CategorySelectBottomSheet from '../Home/CategorySelectBottomSheet';
const {height, width} = Dimensions.get('window');
const halfWidth = width / 2;
import {connect} from 'react-redux';
import {signUp, signIn} from '../../Core/Auth/auth';
import {getCommunity} from '../../Core/Communities/getCommunity';
import {getAllJoinedCommunity} from '../../Core/Communities/getAllJoinedCommunities';
import Communites from '../../components/Communites';
import {Dialog} from 'react-native-elements';
import CommunitesTemp from '../../components/Communitestemp'; //delete later
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {cond} from 'lodash';
import Carousel from '../../components/Carousel/index';
import Events from '../../components/Events';
import EventsTemp from '../../components/EventsTemp'
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 1,
      loading: false,
      events: [
        {name: "Marni O'Connell", img: Images.ground, category: 'Activities'},
        {name: 'Josh Pelach', img: Images.boys, category: 'Secretary'},
        {name: 'Bailey Webb', img: Images.robot, category: 'Treasurer'},
        {name: 'Georgia', img: Images.lights, category: 'Creative & Live Arts'},
        {name: 'Bailey Webb', img: Images.ground, category: 'Activities'},
        {name: 'Georgia', img: Images.boys, category: 'Creative & Live Arts'},
      ],
      employee: [
        {
          community_name: "Marni O'Connell",
          img: Images.firstPerson,
          category: 'Activities',
        },

        {
          community_name: 'Georgia',
          img: Images.firstPerson,
          category: 'Creative & Live Arts',
        },
        {
          community_name: 'Bailey Webb',
          img: Images.firstPerson,
          category: 'Activities',
        },
      ],
      communites: [],
      studyproducts: [
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
      ],
      products: [
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
      ],
    };
  }

  async componentDidMount() {
    // const chunkedElements = _.chunk(this.state.products, 10)
    // screenHeight * elemHeight / 100
    // await signUp('squaredlogics@gmail.com','password','Anders','Chow','https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg','Bacholer Student','BBA','Fast Lahore',this.props.dispatch)
    // await  getAllJoinedCommunity(auth().currentUser.uid,this.props.dispatch)
    await getCommunity(this.props.dispatch);
    //  console.log("id===============",this.props.getAllJoinedCommunity)

    this.setState({loading: true});
    let pixels = 32;
    let response = (pixels * 100) / height;

    //  let pixels =205
    //  let response = (pixels*100)/width
    //  console.log("DataFontwidth=====>",response)
  }
  checkNotification = () => {};
  navigateApp = index => {};
  onTabClick = currentTab => {
    this.setState({
      currentTab: currentTab,
    });
  };

  render() {
    // console.log('pppp=======================>', this.props.users);
    return (
      <View style={styles.homeScreenMainContainer}>
        <ScrollView
          contentContainerStyle={[
            styles.homeScreenScrollContainer,
            {backgroundColor: '#F3F3F4'},
          ]}>
          {/* <ImageView  src={Images.homeTop}  imageStyle={styles.blackBack}  /> */}
          <ImageBackground
            source={Images.Oweek}
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
                        <View style={{flexDirection: 'row'}}>
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
                        </View>
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
                            disabled={true}
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
            <View style={styles.joinCommunityTextTwoThree}>
             <View style={styles.communitybarMainContainer}>
              <TouchableOpacity style={styles.communitybarInnerContainer} onPress={()=>this.props.navigation.goBack()}>
              <ImageView src={require('../../images/short_left.png')} imageStyle={styles.communityDetailsShortLeft}  />       
                </TouchableOpacity>
               </View>
             </View>
            <View style={{position: 'absolute', bottom: -28}}>
              <Text style={[styles.joinCommunityText, {marginBottom: 60}]}>
                O Week
              </Text>
            </View>
            {/* </View> */}
          </ImageBackground>
          {/* <View style={{backgroundColor:"#fff"}}> */}

          {/* ---------------------- TEXT---------------------- */}

          <View style={{marginHorizontal: 15}}>
            <Text
              style={{
                color: '#00035C',
                fontFamily: FontFamilies.poppins_bold,
                lineHeight: 28,
                fontSize: 20,
                marginVertical: 20,
              }}>
              The best way to get to know your new community and get ready to
              start classes
            </Text>
          </View>
          {/* ///////////////////////////// CAROUSEL TAGS START /////////////////////////// */}
          <View
            style={{
              marginHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#F2F3FF',
                // backgroundColor: 'red',
                // marginRight: 15,
                width: wp('44%'),
                height:145,
                // height: hp('16%'),
                borderRadius: 20,
               marginVertical:23,
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity:Platform.OS ==='android' ? 0.29 : 0.10,
                shadowRadius: 4.65,
                paddingHorizontal:5
              }}>
              {/* <View> */}
              <Text
                style={{
                  // flex:1,
                  position: 'relative',
                  color: '#00035C',
                  paddingLeft: 20,
                  paddingTop: 15,
                  fontSize: 14,
                  
                  fontFamily: FontFamilies.poppins_semiBold,
                  
                }}>
                Find Your Course Mates
              </Text>
              <ImageView
                src={Images.CupCard}
                imageStyle={{
                  // backgroundColor:"yellow",
                //   position: 'absolute',
                  marginTop: 30,
                  alignItems:'flex-end',
                  alignSelf:'flex-end'
                //   marginLeft: 95,
                }}
              />
              
            </View>

            <View
              style={{
                backgroundColor: '#F2F3FF',
                // backgroundColor: 'red',
                // marginRight: 15,
                width: wp('44%'),
                height:145,
                borderRadius: 20,
               marginVertical:23,
                paddingHorizontal:5,
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: Platform.OS ==='android' ? 0.29 : 0.10,
                shadowRadius: 4.65,
              }}>
              {/* <View> */}
              <Text
                style={{
                  // flex:1,
                  position: 'relative',
                  color: '#00035C',
                  paddingLeft: 20,
                  paddingTop: 15,
                  fontSize: 14,
                  fontFamily: FontFamilies.poppins_semiBold,
                  // fontWeight: '600',
                }}>
                Explore Communitites
              </Text>

              <ImageView
                src={Images.MsgCard}
                imageStyle={{
                  // backgroundColor:"yellow",
                //   position: 'absolute',
                  marginTop: 35,
                  alignSelf:'flex-end'
                }}
              />
            </View>
          </View>
          {/* ///////////////////////////// CAROUSEL TAGS END /////////////////////////// */}

          {/* ///////////////////////////// COMMUNITY CAROUSAL ///////////////////////// */}
          <View style={{marginLeft: 15}}>
            <Text
              style={{
                color: '#E0E0E0',
                fontFamily: FontFamilies.poppins_bold,
                fontSize: 24,
                marginTop: 40,
              }}>
              Upcoming events
            </Text>
          </View>
          <EventsTemp ProfilesData={ this.props.getEvents?.data} searchEventsDetailshomeScreenCard={[styles.eventScreenDetailshomeScreenCard]} searchDetailshomeScreenCardImage={[styles.eventScreenDetailshomeScreenCardImage]}  navigation={this.props.navigation}  date={false} all={true}/>

          {/* ---------------------------- Coordinator ------------------------- */}
          <View style={{marginHorizontal: 15, marginTop: 90}}>
            <Text
              style={{
                color: '#00035C',
                fontFamily: FontFamilies.poppins_bold,
                lineHeight: 28,
                fontSize: 28,
                paddingTop: 20,

                marginVertical: 15,
              }}>
              O Week Coordinators
            </Text>
          </View>

          {/* --------------- Pofile Tag ---------------- */}
          {this.state.employee.map((item, index) => (
            <View
              style={{
                backgroundColor: '#fff',
                marginTop: 20,
                marginHorizontal: 15,

                borderRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: '#000',
                justifyContent: 'space-between',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: Platform.OS === 'ios' ? 0.05 : 0.1,
                shadowRadius: 5,
                elevation: 5,
              }}>
              <View style={styles.communityDetailsInfoInnerContainer}>
                <TouchableOpacity
                // onPress={() =>
                //   navigation.navigate('UserScreen', {data: userdata})
                // }
                >
                  {!this.state.imageLoad && !this.state.loading && (
                    <ShimmerPlaceHolder
                      LinearGradient={LinearGradient}
                      style={[
                        styles.communityDetailsCircularImage,
                        {position: 'absolute'},
                      ]}
                    />
                  )}
                  <ImageView
                    src={item.img}
                    imageStyle={styles.communityDetailsCircularImage}
                    // onLoadStart={() => setImageLoad(false)}
                    // onLoadEnd={() => setImageLoad(true)}
                  />
                </TouchableOpacity>
                <View style={{marginLeft: 10}}>
                  {!this.state.loading && (
                    <ShimmerPlaceHolder
                      LinearGradient={LinearGradient}
                      style={[
                        styles.communityDetailsAdminInfoTextOne,
                        {position: 'absolute'},
                      ]}
                    />
                  )}
                  <Text style={[styles.communityDetailsAdminInfoTextOne, {width:"100%"}]}>
                    {/* {userdata?.first_name} {userdata?.last_name} */}
                    {item.community_name}
                  </Text>
                  <Text style={styles.communityDetailsAdminInfoTextTwo}>
                    {item.category}
                  </Text>
                </View>
              </View>
              {/* <ImageView src={Images.email} imageStyle={styles.communityDetailsEmailImage} /> */}
              <ImageView
                src={Images.email}
                imageStyle={styles.profileEmailImage}
              />
            </View>
          ))}
          <View style={{marginVertical: 15}} />
          {/* -------------- Profile tag ends here ---------------- */}
        
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
                  marginTop:0,
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
              imageStyle={[styles.survivalcommunityDetailshomeScreenImage,{marginTop:20,marginVertical:10}]}
            />
          </View>
          {/* ///////////////////////////// BOTTOM QUESTION //////////////////////////////////// */}
        </ScrollView>
      </View>
    );
  }
}
function mapStateToProp(state) {
  return {
    users: state.users,
    getCommunity: state.getCommunity,
    getEvents: state.getEvents,
    getAllJoinedCommunity: state.getAllJoinedCommunity,
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(index);
