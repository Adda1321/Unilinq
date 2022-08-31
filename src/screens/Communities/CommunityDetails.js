import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  Platform,
} from 'react-native';
import ImageView from '../../components/Image';
import {appStyles} from '../../style';
import {Images} from '../../utils';
import {Card} from 'react-native-shadow-cards';

import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {getProfile} from '../../Core/Profile/getProfile';
import {joinCommunity} from '../../Core/Communities/joinCommunity';
import {singleCOmmunity} from '../../Core/Communities/getSingleCommunity';

import {auth} from '../../Core/config/config';
import {deleteJoinedCOmmunity} from '../../Core/Communities/deletejoined';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {getAllJoinedMembers} from '../../Core/Communities/getAllJoinedMembers';
import {AllJoinedGetCommunity} from '../../components/actions/index';
import moment from 'moment';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
const {width, height} = Dimensions.get('window');

var ad = [];
function CommunityDetails(props) {
  const navigation = useNavigation();
  const [userdata, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [communityMembers, setCommunityMembers] = useState(0);
  const [imageLoad, setImageLoad] = useState(false);
  const [checkJoin, setCheckJoin] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData = async () => {
      ad = props?.getEvents?.data.filter(
        a =>
          a.community_id != undefined &&
          a.community_id == props.route.params.data.id,
      );
      //  console.log("USER ID -------=========?",props.route.params.data.user_id)
      getProfile(props.route.params.data.user_id, res => {
        singleCOmmunity(
          auth().currentUser.uid,
          props.route.params.data.id,
          res2 => {
            setCheckJoin(res2);

            setUserData(res);
            setLoading(true);
          },
        );
      });
      await getAllJoinedMembers(props.route.params.data.id, res3 => {
        setCommunityMembers(res3);
      });
    };
    fetchData();
  }, []);

  const products = [
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
  ];
  const deletejoinCommunity = () => {
    deleteJoinedCOmmunity(
      auth().currentUser.uid,
      props.route.params.data.id,
      res2 => {
        setCheckJoin(null);
      },
    );
  };
  const communityJoin = () => {
    if (props.route.params.data.community_status == 'Public') {
      joinCommunity(
        auth()?.currentUser.uid,
        props.route.params.data.id,
        'Joined',
        res => {
          var join = {
            status: 'Joined',
          };
          setCheckJoin(join);
          dispatch(
            AllJoinedGetCommunity(
              props.getAllJoinedCommunity?.data.push(props.route.params.data),
            ),
          );
          props.navigation.navigate('Chat', {
            data: props.getAllJoinedCommunity?.data,
          });
        },
      );
    } else {
      joinCommunity(
        auth().currentUser.uid,
        props.route.params.data.id,
        'Pending',
        res => {
          var join = {
            status: 'Pending',
          };
          setCheckJoin(join);
        },
      );
    }
  };
  // if(membersCount == 0) {
  // count = communityMembers?.length
  //   membersCount = membersCount+1
  // }

  // console.log('dssss=============>', props.getEvents);
  return (
    <View style={{flex: 1, backgroundColor: '#f3f3f4'}}>
      <ScrollView>
        <ImageBackground
          source={{uri: props.route.params.data.community_image}}
          style={styles.homeScreenImageContainer}
          resizeMode="cover"
          imageStyle={{borderBottomRightRadius: 60}}>
          <View style={styles.joinCommunityTextTwo}>
            <View style={styles.profilebarMainContainer}>
              {!loading ? (
                <View
                  style={[
                    styles.profilebarInnerContainer,
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    },
                  ]}>
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
                  <View style={styles.profilebarInnerContainer}>
                    <View style={styles.profilebarButtonContainer}>
                      <TouchableOpacity
                        style={styles.profilebarButton}
                        onPress={() => props.navigation.navigate('Profile')}>
                        <Text
                          style={[
                            styles.profilebarButtonText,
                            {lineHeight: 28},
                          ]}>
                          {props.users?.first_name?.charAt(0)}
                        </Text>
                      </TouchableOpacity>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            alignSelf: 'center',
                            paddingLeft: 7,
                            paddingTop: 2,
                          }}>
                          <Text style={styles.profilebarText}>Hi, </Text>
                          <Text style={[styles.profilebarTextT]}>
                            {props.users?.first_name}
                          </Text>
                        </Text>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                          onPress={() => props.navigation.navigate('Search')}>
                          <ImageView
                            src={require('../../images/search.png')}
                            imageStyle={styles.profilebarSearchImage}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          // disabled
                          onPress={() =>
                            props.navigation.navigate('CommunityCreate')
                          }>
                          <ImageView
                            src={Images.plus}
                            imageStyle={styles.profilebarPlusImage}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </>
              )}
              {!loading ? (
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  style={styles.profilebarMessageImageContainer}
                />
              ) : (
                <TouchableOpacity
                  style={styles.profilebarMessageImageContainer}
                  onPress={() =>
                    props.navigation.navigate('Chat', {
                      data: props.getAllJoinedCommunity?.data,
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
              <TouchableOpacity
                style={styles.communitybarInnerContainer}
                onPress={() => navigation.goBack()}>
                <ImageView
                  src={require('../../images/short_left.png')}
                  imageStyle={styles.communityDetailsShortLeft}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* MCU Gaming Union */}
          <View style={{position: 'absolute', bottom: communityMembers.length > 1 ? -20:5}}>
            <Text style={styles.joinCommunityText}>
              {props.route.params.data.community_name}
            </Text>
            {communityMembers.length > 1 && (
              <TouchableOpacity
                disabled={communityMembers?.length == undefined ? true : false}
                style={styles.communitytopContainer}
                onPress={() =>
                  props.navigation.navigate('CommunityMembers', {
                    data: props.route.params.data,
                    community: communityMembers,
                    check: false,
                  })
                }>
                <View
                  style={[
                    styles.communitylandingScreenContainer,
                    {paddingLeft: 30},
                  ]}>
                  {communityMembers.length > 0 &&
                    communityMembers?.map(
                      (eiii, index) =>
                        index < 3 &&
                        communityMembers[index].id !=
                          props.route.params.data.user_id && (
                          <View
                            style={[
                              styles.communityprofileImageLayoutSecond,

                              {marginLeft: -14},
                            ]}>
                            {communityMembers[index] == undefined ? null : (
                              <ImageView
                                src={{uri: communityMembers[index]?.image}}
                                imageStyle={styles.communityprofileImageLayout}
                              />
                            )}
                          </View>
                        ),
                    )}
                  {/* <View style={styles.communityprofileImageLayout}>
                  <ImageView
                    src={{uri: communityMembers[0]?.image}}
                    imageStyle={styles.communityprofileImageLayout}
                  />
                </View>
                <View style={styles.communityprofileImageLayoutSecond}>
                  <ImageView
                    src={{uri: communityMembers[1]?.image}}
                    imageStyle={styles.communityprofileImageLayout}
                  />
                </View>
                <View style={styles.communityprofileImageLayoutThird}>
                  <ImageView
                    src={{uri: communityMembers[2]?.image}}
                    imageStyle={styles.communityprofileImageLayout}
                  />
                </View> */}
                  {!loading ? (
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <ShimmerPlaceHolder
                        LinearGradient={LinearGradient}
                        style={{width: 100}}
                      />
                    </View>
                  ) : (
                    <View
                      style={[
                        styles.communityDetailsMembersContainer,
                        {marginLeft: -5},
                      ]}>
                      <Text>
                        <Text style={styles.communityDetailsMembersTextOne}>
                          {communityMembers?.length == undefined
                            ? '0'
                            : communityMembers?.length - 1}
                        </Text>
                        <Text style={styles.communityDetailsMembersTextTwo}>
                          {communityMembers?.length <= 2
                            ? ' Member'
                            : ' Members'}{' '}
                        </Text>
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>

        {/* <TouchableOpacity style={styles.joinCommunitytopContainer}>
             
             <View style={styles.communityButtonlandingScreenContainer}>
            
               <Text style={styles.dayText}>Join this community</Text>
               <View style={styles.communityDetailsShortRightContainer} />
               <ImageView  src={Images.short_right}  imageStyle={styles.homeScreenImage} />
             </View>
           </TouchableOpacity> */}

        {checkJoin?.status == 'Joined' ? (
          <TouchableOpacity
            disabled={userdata?.id == auth().currentUser.uid ? true : false}
            style={[styles.joinedcommunityDetailsNewTopContainer]}
            onPress={() => deletejoinCommunity()}>
            <View style={{paddingVertical: 17}}>
              <Text style={styles.dayText}>{'Community Joined'}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.joinedfeedbackImageVerticalLine} />
              <View
                style={{
                  paddingVertical: 17,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <ImageView
                  src={require('../../images/tick.png')}
                  imageStyle={styles.joinedfeedbackImageLeftArrow}
                />
              </View>
            </View>
          </TouchableOpacity>
        ) : checkJoin?.status == 'Pending' ? (
          <TouchableOpacity
            style={[styles.pendingcommunityDetailsNewTopContainer]}
            onPress={() => deletejoinCommunity()}>
            <View
              style={{
                paddingVertical: 17,
                paddingHorizontal: widthPercentageToDP('2%'),
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text style={styles.dayText}>Awaiting approval</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.feedbackImageVerticalLine} />
              <View
                style={{
                  paddingVertical: 17,
                  paddingHorizontal: widthPercentageToDP('2%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <ImageView
                  src={Images.short_right2x}
                  imageStyle={styles.feedbackImageLeftArrow}
                />
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.communityDetailsNewTopContainer]}
            onPress={() => communityJoin()}>
            <View style={{paddingVertical: '5.0%'}}>
              <Text style={[styles.dayText]}>Join this community</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.feedbackImageVerticalLine} />
              <View
                style={{
                  paddingVertical: '5.0%',
                  paddingHorizontal: widthPercentageToDP('2%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <ImageView
                  src={Images.short_right2x}
                  imageStyle={styles.feedbackImageLeftArrow}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.communityDetailsAdminInfoContainer}>
          <View style={styles.communityDetailsInfoInnerContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UserScreen', {data: userdata})
              }>
              {imageLoad == false && !loading && (
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  style={[
                    styles.communityDetailsCircularImage,
                    {position: 'absolute'},
                  ]}
                />
              )}
              <ImageView
                src={{uri: userdata?.image}}
                imageStyle={styles.communityDetailsCircularImage}
                onLoadStart={() => setImageLoad(false)}
                onLoadEnd={() => setImageLoad(true)}
              />
            </TouchableOpacity>

            <View style={{marginLeft: 10}}>
              {!loading && (
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  style={[
                    styles.communityDetailsAdminInfoTextOne,
                    {position: 'absolute'},
                  ]}
                />
              )}
              <Text style={styles.communityDetailsAdminInfoTextOne}>
                {userdata?.first_name} {userdata?.last_name}
              </Text>
              <Text style={styles.communityDetailsAdminInfoTextTwo}>
                Group Admin
              </Text>
            </View>
          </View>
          {/* <ImageView src={Images.email} imageStyle={styles.communityDetailsEmailImage} /> */}
          <ImageView src={Images.email} imageStyle={styles.profileEmailImage} />
        </View>
        <View style={styles.communityDetailsShowMoreContainer}>
          <Text style={styles.communityDetailsShowMoreText}>Show more</Text>
        </View>
        <View style={styles.communityDetailsEyeImageContainer}>
          <ImageView
            src={Images.eye}
            imageStyle={styles.communityDetailsEyeImage}
          />
        </View>
        <View style={styles.communityDetailsAboutGroupContainer}>
          {/* Walk ins are allowed but bookings are recomended for any large events they hold. If anyone wishes to have a fun nerdy time and chat to like minded people feel free to come along. */}
          <Text style={styles.communityDetailsAboutGroupTextOne}>
            About this group
          </Text>
          <Text style={styles.communityDetailsAboutGroupTextTwo}>
            {props.route.params.data.community_description}
          </Text>
        </View>
        <View>
          {ad.length > 0 && (
            <Text style={styles.communityDetailsUpCommingEventText}>
              Upcoming events
            </Text>
          )}

          <ScrollView horizontal contentContainerStyle={{paddingLeft: 10}}>
            {!props.users?.loading ? (
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={styles.communityDetailshomeScreenCardEvent}
              />
            ) : (
              props?.getEvents?.data.map((product, index) => {
                if (Platform.OS === 'android') {
                  var dataformat1 =
                    props.getEvents.data[index]?.event_start_date;
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
                    var dataformat = moment(dataformat1, 'YYYY-MM-DD').format(
                      'MMM ddd DD',
                    );
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
                    props.getEvents.data[index]?.event_start_date,
                  ).format('llll');

                  var myArray = dataformat.split(',');
                  var weekday = myArray[0];
                  var secondArray = myArray[1].split(' ');
                  var day = secondArray[2];
                  var month = secondArray[1];
                }

                return (
                  product.community_id == props.route.params.data.id && (
                    <View>
                      <TouchableOpacity
                        // disabled
                        onPress={() => {
                          navigation.navigate('eventDetails', {data: product});
                        }}>
                        <Card
                          style={[
                            styles.communityDetailshomeScreenCardEvent,
                            {marginLeft: 10},
                          ]}>
                          <ImageBackground
                            style={[
                              styles.communityDetailshomeScreenCardImageEvent,
                            ]}
                            source={{uri: product?.event_image}}
                            resizeMode="stretch">
                            {product.number > 1 && (
                              <View
                                style={
                                  styles.communityDetailshomeScreenCardView
                                }>
                                {/* <ImageView  src={Images.public}  imageStyle={{width:15,height:15}}  /> */}
                                <Text
                                  style={styles.communityDetailsCardImageText}>
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
                              <Text style={styles.sportscommunityPublicText}>
                                {product.event_category}
                              </Text>
                            </View>
                          </ImageBackground>
                        </Card>
                        <View style={{width: widthPercentageToDP('75%')}}>
                          <Text
                            style={[
                              styles.communityDetailsCardImageDateText,
                              {marginTop: 1, marginLeft: 18},
                            ]}>
                            {weekday}
                            {','} {month} {day} {product.event_start_time}
                          </Text>
                          <Text
                            style={[
                              styles.communityDetailsCardDetailsText,
                              {marginLeft: 18, marginBottom: 15},
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

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              //  marginVertical: 20,
              alignItems: 'center',
              backgroundColor: '#F3F3F4',
              // backgroundColor:"red",
              paddingVertical: 20,
              paddingTop: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.1,
              shadowRadius: 4.65,

              elevation: 6,
            }}>
            {checkJoin?.status == 'Joined' ? (
              <TouchableOpacity
                disabled={userdata?.id == auth().currentUser.uid ? true : false}
                style={[styles.communityDetailsjoinCommunitytopContainerTwo]}
                onPress={() => deletejoinCommunity()}>
                <View style={styles.communityButtonlandingScreenContainer}>
                  <Text style={styles.joinedcommunityDetailsdayText}>
                    Joined
                  </Text>
                  <View
                    style={{
                      marginHorizontal: 7,
                      flexDirection: 'row',
                      alignItems: 'center',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      width: '10%',
                    }}>
                    <View
                      style={{height: 60, width: 1, backgroundColor: '#f3f3f4'}}
                    />
                    <View
                      style={{
                        paddingVertical: '5.0%',
                        paddingHorizontal: widthPercentageToDP('2%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}>
                      <ImageView
                        src={require('../../images/tick.png')}
                        imageStyle={styles.joinedfeedbackImageLeftArrow}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ) : checkJoin?.status == 'Pending' ? (
              <TouchableOpacity
                disabled={userdata?.id == auth().currentUser.uid ? true : false}
                style={[
                  styles.communityDetailsjoinCommunitytopContainer,
                  {backgroundColor: '#BDBDBD'},
                ]}
                onPress={() => deletejoinCommunity()}>
                <View style={styles.communityButtonlandingScreenContainer}>
                  <Text style={styles.communityDetailsdayText}>
                    Awaiting approval
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{height: 56, width: 1, backgroundColor: '#909090'}}
                    />
                    <ImageView
                      src={Images.short_right}
                      imageStyle={styles.homeScreenImage}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                disabled={userdata?.id == auth().currentUser.uid ? true : false}
                style={[styles.communityDetailsjoinCommunitytopContainer]}
                onPress={() => communityJoin()}>
                <View
                  style={[
                    styles.communityButtonlandingScreenContainer,
                    {width: '100%'},
                  ]}>
                  <Text style={styles.communityDetailsdayText}>
                    Join this community
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{height: 56, width: 1, backgroundColor: '#8b86ba'}}
                    />

                    <ImageView
                      src={Images.short_right2x}
                      imageStyle={[
                        styles.homeScreenImage,
                        {alignItems: 'center', alignSelf: 'center'},
                      ]}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}

            <ImageView
              src={Images.question}
              imageStyle={styles.communityDetailshomeScreenImage}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
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
export default connect(mapStateToProp)(CommunityDetails);
