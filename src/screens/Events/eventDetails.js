import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import ImageView from '../../components/Image';
import {appStyles} from '../../style';

import {Images} from '../../utils';

import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {getProfile} from '../../Core/Profile/getProfile';
import {joinEvent} from '../../Core/Events/joinEvent';
import {singleEvent} from '../../Core/Events/getSingleEvent';

import { auth} from '../../Core/config/config';

import {deleteJoinedEvent} from '../../Core/Events/deleteEvent';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {getAllJoinedEventMembers} from '../../Core/Events/getAllJoinedEventMembers';
import moment from 'moment';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
const {width, height} = Dimensions.get('window');

var count = 0;
function CommunityDetails(props) {
  const navigation = useNavigation();
  const [userdata, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [communityMembers, setCommunityMembers] = useState(0);
  const [imageLoad, setImageLoad] = useState(false);
  const [checkJoin, setCheckJoin] = useState(null);
  
  useEffect(() => {
    fetchData = async () => {
      getProfile(props.route.params.data.user_id, res => {
        singleEvent(
          auth()?.currentUser.uid,
          props.route.params.data.id,
          res2 => {
            setCheckJoin(res2);

            setUserData(res);
            setLoading(true);
          },
        );
      });
      await getAllJoinedEventMembers(props.route.params.data.id, res3 => {
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
    deleteJoinedEvent(
      auth().currentUser.uid,
      props.route.params.data.id,
      res2 => {
        setCheckJoin(null);
      },
    );
  };
  const communityJoin = () => {
    //  if(props.route.params.data.community_status == "Public"){
    joinEvent(
      auth().currentUser.uid,
      props.route.params.data.id,
      'Joined',
      res => {
        var join = {
          status: 'Joined',
        };
        setCheckJoin(join);
        // dispatch(AllJoinedGetCommunity(props.getAllJoinedCommunity?.data.push(props.route.params.data)))
        // props.navigation.navigate('Chat',{data: props.getAllJoinedCommunity?.data,})
      },
    );
    //  }
    //  else {
    //   joinCommunity(auth().currentUser.uid,props.route.params.data.id,'Pending',(res)=>{
    //     var join={
    //       status:'Pending'
    //     }
    //     setCheckJoin(join)
    //      })
    //  }
  };
  // if(membersCount == 0) {
  // count = communityMembers?.length
  //   membersCount = membersCount+1
  // }

  return (
    <View style={{flex: 1, backgroundColor: '#f3f3f4'}}>
      <ScrollView>
        <ImageBackground
          source={{uri: props.route.params.data.event_image}}
          style={styles.eventhomeScreenImageContainer}
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
                  disabled
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
          <View style={styles.eventscomhomeScreenCardView}>
            <Text style={styles.sportscommunityPublicText}>
              {props.route.params.data.event_category}
            </Text>
          </View>
          {/* MCU Gaming Union */}
        </ImageBackground>
        <View style={{width: '100%', marginBottom: 20, marginTop: 10}}>
          <Text style={styles.eventDetailsCardDetailsText}>
            {props.route.params.data.event_name}
          </Text>
        </View>
        <View style={{marginBottom: 20}}>
          {/* <Text style={styles.joinCommunityText}>{props.route.params.data.community_name}</Text> */}
          {
            (
              //console.log('communityMembers -----///////--->', communityMembers),
            communityMembers.length > 1 && (
              <TouchableOpacity
                // disabled={communityMembers?.length == undefined ? true : false}
                style={[styles.chatCommunitytopContainer, {marginTop: 20}]}
                onPress={() =>
                  props.navigation.navigate('EventMembers', {
                    data: props.route.params.data,
                    community: communityMembers,
                    check: false,
                  })
                }>
                <View style={[styles.communitylandingScreenContainer , {paddingLeft:20}]}>
                  {communityMembers.length > 0 &&
                    communityMembers?.map(
                      (eiii, index) =>
                        index < 3 &&  communityMembers[index].id != props.route.params.data.user_id && 
                        (
                          <View style={[styles.communityprofileImageLayout ,  {marginLeft: -14}]}>
                            <ImageView
                              src={{uri: communityMembers[index]?.image}}
                              imageStyle={styles.communityprofileImageLayout}
                            />
                          </View>
                        ),
                    )}
                  {!loading ? (
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <ShimmerPlaceHolder
                        LinearGradient={LinearGradient}
                        style={[
                          styles.communityprofileImageLayout,
                          {marginHorizontal: 5},
                        ]}></ShimmerPlaceHolder>
                      <ShimmerPlaceHolder
                        LinearGradient={LinearGradient}
                        style={[
                          styles.communityDetailsMembersTextOne,
                          {width: '80%'},
                        ]}></ShimmerPlaceHolder>
                    </View>
                  ) : (
                    <View
                      style={[
                        styles.communityDetailsMembersContainer,
                        {marginLeft: 5},
                      ]}>
                      <Text>
                        <Text style={styles.communityDetailsMembersTextOne}>
                          {communityMembers?.length == undefined
                            ? '0'
                            : communityMembers?.length - 1}
                        </Text>
                        <Text style={styles.communityDetailsMembersTextTwo}>
                          {communityMembers?.length <= 2
                            ? ' Attendee'
                            : ' Attendees'}{' '}
                        </Text>
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))
          }
        </View>
        {/* <TouchableOpacity style={styles.joinCommunitytopContainer}>
             
             <View style={styles.communityButtonlandingScreenContainer}>
            
               <Text style={styles.dayText}>Join this community</Text>
               <View style={styles.communityDetailsShortRightContainer} />
               <ImageView  src={Images.short_right}  imageStyle={styles.homeScreenImage} />
             </View>
           </TouchableOpacity> */}
        {/*           
               {checkJoin?.status == 'Joined' ?
                <TouchableOpacity
            disabled={userdata?.id == auth().currentUser.uid ? true:false}
                style={[styles.joinedcommunityDetailsNewTopContainer]}
                onPress={() =>
                    deletejoinCommunity()
                }>
               <View style={{paddingVertical:'5.0%',paddingHorizontal:widthPercentageToDP('2%'),alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
             <Text style={styles.dayText}>{'Community Joined'}</Text>
             </View> 
             <View style={{flexDirection:'row'}}>
             <View style={styles.joinedfeedbackImageVerticalLine} />
             <View style={{paddingVertical:'5.0%',paddingHorizontal:widthPercentageToDP('2%'),alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
             <ImageView
               src={require('../../images/tick.png')}
               imageStyle={styles.joinedfeedbackImageLeftArrow}
             />
             </View>
             </View>
             </TouchableOpacity>
             
             : checkJoin?.status == 'Pending' ? 
             <TouchableOpacity
           
                style={[styles.pendingcommunityDetailsNewTopContainer]}
                onPress={() =>
                  deletejoinCommunity()
                }>
             <View style={{paddingVertical:'5.0%',paddingHorizontal:widthPercentageToDP('2%'),alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
             <Text style={styles.dayText}>Awaiting approval</Text>
             </View>
             <View style={{flexDirection:'row'}}>
             <View style={styles.feedbackImageVerticalLine} />
             <View style={{paddingVertical:'5.0%',paddingHorizontal:widthPercentageToDP('2%'),alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
             <ImageView
               src={Images.short_right2x}
               imageStyle={styles.feedbackImageLeftArrow}
             />
             </View>
             </View>
             </TouchableOpacity>
             :             
             <TouchableOpacity
           
                style={[styles.communityDetailsNewTopContainer]}
                onPress={() =>
                  communityJoin()
                }>
             <View style={{paddingVertical:'5.0%'}}>
             <Text style={[styles.dayText]}>Join this community</Text>
             </View>
             <View style={{flexDirection:'row'}}>
             <View style={styles.feedbackImageVerticalLine} />
             <View style={{paddingVertical:'5.0%',paddingHorizontal:widthPercentageToDP('2%'),alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
             <ImageView
               src={Images.short_right2x}
               imageStyle={styles.feedbackImageLeftArrow}
             />
             </View>
             </View>
             </TouchableOpacity>
} */}
        <View style={styles.eventsDetailsAdminInfoContainer}>
          <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
            <View style={{flexDirection: 'row'}}>
              <ImageView
                src={require('../../images/address.png')}
                imageStyle={{
                  width: 8,
                  height: 11,
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginHorizontal: 5,
                }}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  color: '#00035c',
                }}>
                Location
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            {/* <ImageView src={Images.email} imageStyle={styles.communityDetailsEmailImage} /> */}
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
                color: '#00035c',
                width: 80,
              }}>
              {props.route.params.data.event_location}
            </Text>
          </View>
        </View>

        <View style={styles.communityDetailsAdminInfoContainer}>
          <View style={styles.communityDetailsInfoInnerContainer}>
            <TouchableOpacity
              // disabled={communityMembers?.length == undefined ? true : false}
              onPress={() =>
                navigation.navigate('UserScreen', {data: userdata})
              }>
              {imageLoad == false && (
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
              <Text style={styles.communityDetailsAdminInfoTextOne}>
                {userdata?.first_name} {userdata?.last_name}
              </Text>
              <Text style={styles.communityDetailsAdminInfoTextTwo}>
                Event Admin
              </Text>
            </View>
          </View>
          {/* <ImageView src={Images.email} imageStyle={styles.communityDetailsEmailImage} /> */}
          <ImageView src={Images.email} imageStyle={styles.profileEmailImage} />
        </View>
        {/* <View style={styles.communityDetailsShowMoreContainer}>
               <Text style={styles.communityDetailsShowMoreText}>Show more</Text>
               
           </View>
           <View style={styles.communityDetailsEyeImageContainer}>
           <ImageView src={Images.eye} imageStyle={styles.communityDetailsEyeImage} />
           </View> */}
        <View
          style={{
            borderBottomColor: '#b7b7b7',
            width: width - 45,
            borderBottomWidth: 1,
            alignSelf: 'center',
            marginTop: 40,
          }}
        />
        <View
          style={[styles.eventsTimeDetailsAdminInfoContainer, {elevation: 0}]}>
          <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
            <TouchableOpacity
              disabled
              onPress={() =>
                navigation.navigate('UserScreen', {data: userdata})
              }>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  color: '#B7B7B7',
                }}>
                Start
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            {/* <ImageView src={Images.email} imageStyle={styles.communityDetailsEmailImage} /> */}
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
                color: '#00035c',
              }}>
              {props.route.params.data.event_start_time}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
                color: '#00035c',
              }}>
              {/* {moment(props.route.params.data.event_start_date , 'MM/DD/YYYY').format("dddd, D MMMM ")} */}
              {moment(
                props.route.params.data.event_start_date,
                'MM/DD/YYYY',
              ).format('dddd, D MMMM ') == 'Invalid date' ? moment(
                props.route.params.data.event_start_date,
                'YYYY/MM/DD',
              ).format('dddd, D MMMM ') : moment(
                props.route.params.data.event_start_date,
                'MM/DD/YYYY',
              ).format('dddd, D MMMM ')}
              {/*               
              {Platform.OS === 'ios'
                ? moment(props.route.params.data.event_start_date).format(
                    'dddd, MMMM Do',
                  )
                : moment(
                    props.route.params.data.event_start_date,
                    'YYYY-MM-DD',
                  ).format('dddd, DD MMMM')} */}
            </Text>
            {/* {console.log("date Detail Event ------------------------------------------------------>",moment(props.route.params.data.event_start_date , 'MM/DD/YYYY').format("dddd, D MMMM "))} */}
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#b7b7b7',
            width: width - 45,
            borderBottomWidth: 1,
            alignSelf: 'center',
            marginTop: 5,
          }}
        />
        <View
          style={[styles.eventsTimeDetailsAdminInfoContainer, {elevation: 0}]}>
          <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
            <TouchableOpacity
              disabled
              onPress={() =>
                navigation.navigate('UserScreen', {data: userdata})
              }>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  color: '#B7B7B7',
                }}>
                End
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            {/* <ImageView src={Images.email} imageStyle={styles.communityDetailsEmailImage} /> */}
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
                color: '#00035c',
              }}>
              {props.route.params.data.event_end_time}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
                color: '#00035c',
              }}>
              {/* {Platform.OS === 'ios'
                ? moment(props.route.params.data.event_end_date).format(
                    'dddd, MMMM Do',
                  )
                : moment(
                    props.route.params.data.event_end_date,
                    'YYYY-MM-DD',
                  ).format('dddd, DD MMMM')} */}

             {moment(
                props.route.params.data.event_end_date,
                'MM/DD/YYYY',
              ).format('dddd, D MMMM ') == 'Invalid date' ? moment(
                props.route.params.data.event_end_date,
                'YYYY/MM/DD',
              ).format('dddd, D MMMM ') : moment(
                props.route.params.data.event_end_date,
                'MM/DD/YYYY',
              ).format('dddd, D MMMM ')}
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 21}}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
              color: '#6f52ed',
            }}>
            {props.route.params.data.event_repeat_status}
          </Text>
        </View>
        <View style={styles.eventDetailsAboutGroupContainer}>
          {/* Walk ins are allowed but bookings are recomended for any large events they hold. If anyone wishes to have a fun nerdy time and chat to like minded people feel free to come along. */}
          <Text style={styles.communityDetailsAboutGroupTextOne}>
            About this event
          </Text>
          <Text style={styles.communityDetailsAboutGroupTextTwo}>
            {props.route.params.data.event_description}
          </Text>
        </View>
        <View
          style={{
            elevation: 15,
            backgroundColor: '#f7f7f7',
            // backgroundColor:"red",

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.1,
              shadowRadius: 4.65,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
              marginTop:10,
              alignItems: 'center',
            }}>
            {checkJoin?.status == 'Joined' ? (
              <TouchableOpacity
                disabled={userdata?.id == auth().currentUser.uid ? true : false}
                style={[styles.communityDetailsjoinCommunitytopContainerTwo]}
                onPress={() => deletejoinCommunity()}>
                <View style={styles.communityButtonlandingScreenContainer}>
                  <Text style={styles.joinedcommunityDetailsdayText}>
                    Going
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
            ) : (
              <TouchableOpacity
                style={[styles.eventDetailsjoinCommunitytopContainer]}
                onPress={() => communityJoin()}>
                <View
                  style={[
                    styles.communityButtonlandingScreenContainer,
                    {width: '100%'},
                  ]}>
                  <Text style={styles.communityDetailsdayText}>
                    Mark as going
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{height: 56, width: 1, backgroundColor: '#efefef'}}
                    />
                    <View
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 10,
                      }}>
                      <ImageView
                        src={require('../../images/markas.png')}
                        imageStyle={[
                          styles.eventshomeScreenImage,
                          {alignItems: 'center', alignSelf: 'center'},
                        ]}
                      />
                    </View>
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
    getAllJoinedCommunity: state.getAllJoinedCommunity,
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(CommunityDetails);
