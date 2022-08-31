import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Animated,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
  SafeAreaView,
  Platform,
} from 'react-native';
import ImageView from '../../components/Image';
import {appStyles} from '../../style';
import {Images} from '../../utils';
import RBSheet from 'react-native-raw-bottom-sheet';
import {getAllJoinedMembers} from '../../Core/Communities/getAllJoinedMembers';
import {deleteJoinedCOmmunity} from '../../Core/Communities/deletejoined';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

import {firestore, auth} from '../../Core/config/config';
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';
import {AllJoinedGetCommunity} from '../../components/actions/index';
import {getCommunityEvents} from '../../Core/Events/getCommunityEvents';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {ScrollView} from 'react-native-gesture-handler';
import {getAllPendingmembers} from '../../Core/Communities/getAllPendingMembers';
// import { auth } from '../../Core/config/config';

function index(props) {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  let categorySelect;

  let eventSelect;
  let settingSelect;
  let ConfirmRef;
  let createChatSelect;
  // let edittext='';
  // let editID = undefined
  const [drop, setDrop] = useState(false);
  const [firstdrop, setFirstDrop] = useState(false);
  const [seconddrop, setSecondDrop] = useState(false);
  const [event, setEvent] = useState(false);
  const [editText, setEditText] = useState('');
  const [editID, setID] = useState('');
  const [ind, setIND] = useState(0);
  const [data, setData] = useState(props.route.params.data);
  const [backgroundImage, setBackgroundImage] = useState(
    props.route.params.data.length - 1,
  );
  const [scaling, setScaling] = useState(props.route.params.data.length - 1);
  const [imageLoad, setImageLoad] = useState(false);
  const [memberimageLoad, setMemberImageLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [communityMembers, setCommunityMembers] = useState(0);
  const [communityEvents, setCommunityEvents] = useState([]);
  const [second, setsecond] = useState(false);
  const [input, setInput] = useState('');
  const [groups, setGroups] = useState([]);
  const [first, setfirst] = useState(false);
  var studyproducts = [Images.robot, Images.lights, Images.ground, Images.boys];

  useEffect(() => {
    // console.log("Ddsdsssss==========>",props.route.params.data[backgroundImage].id)
    const unsubscribe = firestore()
      .collection('Chats')
      .where('community_id', '==', props.route.params.data[backgroundImage].id)
      .onSnapshot(snapshot =>
        setGroups(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          })),
        ),
      );
  }, [backgroundImage]);

  useEffect(() => {
    fetchData = async () => {
      await getAllJoinedMembers(
        props.route.params.data[backgroundImage].id,
        async res3 => {
          count = 0;
          const movies = props.route.params.data.filter(
            item => item.status === 'Approved',
          );
          count = movies.length;
          await getCommunityEvents(
            props.route.params.data[backgroundImage].id,
            async res => {
              await getAllPendingmembers(
                props.route.params.data[backgroundImage].id,
                res4 => {
                  if (res4.length > 0) {
                    setfirst(true);
                  } else {
                    setfirst(false);
                  }
                },
              );
              //  obj = res.find(o => o.status === 'Pending');

              setCommunityEvents(res);
              res.find(function (post, index) {
                if (post.status == 'Pending') {
                  setsecond(true);
                  return true;
                }
              });
              setCommunityMembers(res3);

              setLoading(true);
              // this.setState({events:res,loading:true})
            },
          );
        },
      );
    };
    fetchData();
    // console.log("EVENT ADMIN ----------------------------------------------------------------------------------------------->>",props.route.params.data[backgroundImage].id.uid);
  }, []);
  const dropChange = () => {
    setDrop(!drop);
  };
  const openModal = (id, text) => {
    // edittext=text;
    // editID =id

    setID(id);
    setEditText(text);
    categorySelect.open();
  };
  const openModalEvent = (id, text, index) => {
    // edittext=text;
    // editID =id\
    // console.log('Ddsda===w==w=w=w======>', id);
    setIND(index);
    setID(id);
    setEditText(text);
    eventSelect.open();
  };
  const texting = val => {
    setEditText(val);
    // edittext =val
  };
  const updateGroupName = () => {
    let newArr = [...groups]; // copying the old datas array
    let index = newArr.findIndex(x => x.id === editID);
    newArr[index].data.chatName = editText;
    firestore().collection('Chats').doc(editID).update({
      chatName: editText,
    });

    // console.log(
    //   'NEW ARRAYYY ID------------------------------->>>>>>>>>>>>>>>>>>>',
    //   newArr, e
    // );
    // console.log(
    //   'DATA IN NEW ARRAY ----------------------------------->',
    //   // newArr.indexOf({id: editID}),
    //   newArr.findIndex(x => x.id === editID)
    // );

    setGroups(newArr);
    categorySelect.close();
  };

  const deleteGroupName = () => {
    console.log('DELETE');
    firestore().collection('Chats').doc(editID).delete();
    categorySelect.close();
  };

  const communityChat = async (item, index) => {
    setfirst(false);
    setFirstDrop(false);
    setDrop(false);
    setsecond(false);
    setLoading(false);
    setBackgroundImage(index);
    setScaling(index);
    await getAllJoinedMembers(props.route.params.data[index].id, async res3 => {
      await getCommunityEvents(props.route.params.data[index].id, async res => {
        await getAllPendingmembers(props.route.params.data[index].id, res4 => {
          if (res4.length > 0) {
            setfirst(true);
          } else {
            setfirst(false);
          }
          setCommunityEvents(res);

          res.find(function (post, index) {
            if (post.status == 'Pending') {
              setsecond(true);
              return true;
            }
          });
          setCommunityMembers(res3);

          setLoading(true);
        });

        // this.setState({events:res,loading:true})
      });

      // setCommunityMembers(res3)

      //  setLoading(true)
      //  setLoading(true)
    });
  };
  const goEditScreen = () => {
    settingSelect.close();
    props.navigation.navigate('communityEdit', {
      data: props.route.params.data[backgroundImage],
      fulldata: props.route.params.data,
      index: backgroundImage,
    });
  };
  const leaveCommunity = async () => {
    deleteJoinedCOmmunity(
      auth()?.currentUser?.uid,
      props.route.params.data[backgroundImage].id,
      async res2 => {
        if (props.route.params.data[backgroundImage + 1] == undefined) {
          props.dispatch(AllJoinedGetCommunity(undefined));
          props.navigation.navigate('Home');
        } else {
          await getAllJoinedMembers(
            props.route.params.data[backgroundImage + 1].id,
            res3 => {
              setCommunityMembers(res3);

              settingSelect.close();
              setBackgroundImage(backgroundImage + 1);
              setScaling(backgroundImage + 1);

              //  setLoading(true)
            },
          );
        }
      },
    );
  };
  const gotoEdit = () => {
    props.navigation.navigate('eventEdit', {
      data: communityEvents[ind],
      event_id: editID,
      id: props.route.params.data[backgroundImage].id,
    });
    eventSelect.close();
  };
  const dropChangeEvent = () => {
    setEvent(!event);
  };
  const dropSecondChange = () => {
    setFirstDrop(!firstdrop);
  };
  const createChat = async () => {
    createChatSelect.close();
    if (input != '') {
      await firestore()
        .collection('Chats')
        .add({
          chatName: input,
          community_id: props.route.params.data[backgroundImage].id,
        })
        .then(() => {})
        .catch(error => alert(error));
    }
    else{
      alert('Enter a Chatroom Name')
    }
  };
  const enterChat = (id, chatName) => {
    props.navigation.navigate('ChatScreen', {
      id,
      chatName,
    });
  };

  const confirmationHandler = ()=>{
    ConfirmRef.open();
    categorySelect.close();

  }
  // console.log("Dddsqqwwww============>",groups)
  // console.log(" Community Memebers MEMBER missing --------------------------------------------------->>>",communityMembers);
  return (
    <View style={{flex: 1}}>
      <>
        {imageLoad == false && (
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={{
              width: '100%',
              height: height / 2,
              borderBottomLeftRadius: 35,
              position: 'absolute',
            }}
          />
        )}
        <ImageBackground
          source={{
            uri: props.route.params.data[backgroundImage].community_image,
          }}
          style={[styles.chatHomeScreenImageContainer]}
          resizeMode="cover"
          imageStyle={{borderBottomLeftRadius: 35}}
          onLoadStart={() => setImageLoad(false)}
          onLoadEnd={() => setImageLoad(true)}>
          <View data-id="1" style={styles.joinCommunityTextTwo}>
            <View style={styles.profilebarMainContainer}>
              <View style={styles.profilebarInnerContainer}>
                <View style={styles.profilebarButtonContainer}>
                  <TouchableOpacity
                    style={styles.profilebarButton}
                    onPress={() => props.navigation.navigate('Profile')}>
                    <Text
                      style={[styles.profilebarButtonText, {lineHeight: 28}]}>
                      {props.users?.first_name?.charAt(0)}
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
                        {props.users?.first_name}
                      </Text>
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
              <View style={styles.profilebarMessageImageContainer}>
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
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: 20,
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}>
            <TouchableOpacity onPress={() => settingSelect.open()}>
              <ImageView
                src={require('../../images/settingIcons.png')}
                imageStyle={{
                  width: width * 0.08,
                  height: width * 0.08,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: 'Poppins-SemiBold',
                letterSpacing: -0.8,
              }}>
              {props.route.params.data[backgroundImage].community_name}
            </Text>
          </View>
          {/* </View> */}
        </ImageBackground>
      </>

      <View style={{flexDirection: 'row', backgroundColor: '#f3f3f4'}}>
        <View
          style={{flexDirection: 'column', width: '20%', alignItems: 'center'}}>
          <ImageView
            src={require('../../images/chatMessage.png')}
            imageStyle={{
              width: width * 0.09,
              height: width * 0.09,
              //   alignSelf: 'center',
              marginVertical: 20,
            }}
          />
          <ImageView
            src={require('../../images/Calender.png')}
            imageStyle={{
              width: width * 0.1,
              height: width * 0.1,
              //   alignSelf: 'center',
            }}
          />

          <View
            style={{
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              marginTop: 20,
              width: '100%',
            }}
          />
          <Animated.View style={{marginTop: 10, flex: 1}}>
            <FlatList
              // style={{height:200}}
              data={props.route.params.data}
              style={{marginBottom: heightPercentageToDP('48%')}}
              //   contentInset= {{bottom: 20}}
              contentContainerStyle={{alignItems: 'center'}}
              renderItem={({item, index}) => {
                return (
                  item.status == 'Approved' && (
                    <TouchableOpacity
                      style={{marginVertical: scaling == index ? 15 : 8}}
                      onPress={() => communityChat(item, index)}>
                      <ImageView
                        src={{uri: item.community_image}}
                        imageStyle={{
                          width: scaling == index ? width * 0.13 : width * 0.1,
                          height: width * 0.1,
                          borderRadius: 5,
                          transform: [{scaleY: scaling == index ? 1.3 : 1}],
                          //   alignSelf: 'center',
                        }}
                      />
                    </TouchableOpacity>
                  )
                );
              }}
            />
          </Animated.View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            width: '80%',
            backgroundColor: '#f3f3f4',
            shadowColor: '#000',
            height: height,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}>
          <ScrollView>
            {communityMembers.length > 1 && (
              <TouchableOpacity
                style={[styles.chatCommunitytopContainer, {marginTop: 20}]}
                onPress={() =>
                  props.navigation.navigate('CommunityMembers', {
                    data: data[scaling],
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
                        // communityMembers.length != index + 1
                        communityMembers[index].id !=
                          props.route.params.data[backgroundImage].user_id && (
                          <View
                            style={[
                              styles.communityprofileImageLayoutSecond,

                              {marginLeft: -14},
                            ]}>
                            <ImageView
                              src={{uri: communityMembers[index]?.image}}
                              imageStyle={styles.communityprofileImageLayout}
                              onLoadStart={() =>
                                Platform.OS === 'android'
                                  ? setMemberImageLoad(false)
                                  : setMemberImageLoad(false)
                              }
                              onLoadEnd={() => setMemberImageLoad(true)}
                            />
                          </View>
                        ),
                    )}

                  {!memberimageLoad && !loading ? (
                    <View
                      style={[
                        styles.communityDetailsMembersContainer,
                        {marginLeft: -15},
                      ]}>
                      <ShimmerPlaceHolder
                        LinearGradient={LinearGradient}
                        style={[
                          styles.communityprofileImageLayout,
                          {marginRight: 5},
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
                            : ' Members'}
                        </Text>
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            )}
            {!first ? (
              <View
                style={{alignItems: 'center', justifyContent: 'center'}}></View>
            ) : auth()?.currentUser?.uid ==
                props.route.params.data[backgroundImage]?.user_id && first ? (
              <TouchableOpacity
                style={[
                  styles.pendingchatCommunitytopContainer,
                  {marginTop: 20},
                ]}
                onPress={() =>
                  props.navigation.navigate('CommunityMembers', {
                    data: data[scaling],
                    community: communityMembers,
                    check: true,
                  })
                }>
                <View style={styles.communitylandingScreenContainer}>
                  <View style={styles.pendingcommunityDetailsMembersContainer}>
                    <Text>
                      <Text
                        style={styles.pendingcommunityDetailsMembersTextOne}>
                        {'Pending Member Requests'}
                      </Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ) : null}
            <View style={{justifyContent: 'space-around'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 18,
                  marginTop: 20,
                }}>
                <TouchableOpacity onPress={() => dropChange()}>
                  <ImageView
                    src={require('../../images/dropup.png')}
                    imageStyle={{
                      width: width * 0.03,
                      height: width * 0.015,
                      marginHorizontal: 5,
                      // marginBottom:4,

                      //   alignSelf: 'center',
                      transform: [{rotate: drop ? '0deg' : '180deg'}],
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: '#6f52ed',
                    fontSize: 16,
                    fontFamily: 'Poppins-Bold',
                  }}>
                  Chatrooms
                </Text>
                <View
                  style={{
                    flex: 0.98,
                    height: 1,
                    backgroundColor: '#b7b7b7',
                    marginHorizontal: 5,
                  }}
                />
                {/* {console.log(
                  'ITEMMMMMMMMM----------------->>',
                  props.route.params.data[backgroundImage].user_id,
                  '-----SAME---',
                  auth()?.currentUser.uid,
                )} */}
                {props.route.params.data[backgroundImage].user_id ===
                  auth()?.currentUser?.uid && (
                  <TouchableOpacity onPress={() => createChatSelect.open()}>
                    <ImageView
                      src={require('../../images/newEvent.png')}
                      imageStyle={{
                        width: width * 0.07,
                        height: width * 0.07,
                        //   alignSelf: 'center',
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {!drop && (
              <View style={{marginTop: 10, width: '85%', alignSelf: 'center'}}>
                {groups.length == 0 && (
                  <View
                    style={{marginTop: 10, width: '100%', alignSelf: 'center'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        marginHorizontal: 15,
                      }}>
                      <Text
                        style={{
                          color: '#b7b7b7',
                          fontSize: 16,
                          fontFamily: 'Poppins-Bold',
                          letterSpacing: -0.8,
                        }}>
                        {'No chatroom '}
                      </Text>
                      <TouchableOpacity>
                        {props.route.params.data[backgroundImage].user_id ===
                          auth()?.currentUser?.uid && (
                          <TouchableOpacity
                            onPress={() => createChatSelect.open()}>
                            <Text
                              style={{
                                color: '#6f52ed',
                                fontSize: 16,
                                fontFamily: 'Poppins-Bold',
                                letterSpacing: -0.8,
                              }}>
                              {' '}
                              create new
                            </Text>
                          </TouchableOpacity>
                        )}
                        {/* <ImageView
       src={require('../../images/edit.png')}
       imageStyle={{
         width: width * 0.050,
         height: width * 0.050,
        //  marginLeft:15
       //   alignSelf: 'center',
         
       }}
     /> */}
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                {groups.map(({id, data: {chatName}}) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: index != 0 ? 15 : 8,
                      marginLeft: 15,
                    }}>
                    <TouchableOpacity onPress={() => enterChat(id, chatName)}>
                      <Text
                        style={{
                          color: '#b7b7b7',
                          fontSize: 16,
                          fontFamily: 'Poppins-Bold',
                          letterSpacing: -0.8,
                        }}>
                        {(id, chatName)}
                      </Text>
                    </TouchableOpacity>
                    {props.route.params.data[backgroundImage].user_id ===
                      auth()?.currentUser?.uid && (
                      <TouchableOpacity onPress={() => openModal(id, chatName)}>
                        <ImageView
                          src={require('../../images/edit.png')}
                          imageStyle={{
                            width: width * 0.05,
                            height: width * 0.05,
                            //  marginLeft:15
                            //   alignSelf: 'center',
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
              </View>
            )}
            <View style={{justifyContent: 'space-around'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 18,
                  marginTop: 20,
                }}>
                <TouchableOpacity onPress={() => dropSecondChange()}>
                  <ImageView
                    src={require('../../images/dropup.png')}
                    imageStyle={{
                      width: width * 0.03,
                      height: width * 0.015,
                      marginHorizontal: 5,
                      // marginBottom:4,

                      //   alignSelf: 'center',
                      transform: [{rotate: firstdrop ? '0deg' : '180deg'}],
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: '#6f52ed',
                    fontSize: 16,
                    fontFamily: 'Poppins-Bold',
                  }}>
                  Upcoming events
                </Text>
                <View
                  style={{
                    flex: 0.98,
                    height: 1,
                    backgroundColor: '#b7b7b7',
                    marginHorizontal: 5,
                  }}
                />
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('NewEvent', {
                      id: props.route.params.data[backgroundImage].id,
                      data: props.route.params.data[backgroundImage].user_id,
                      category_data:
                        props.route.params.data[backgroundImage].category_id,
                    })
                  }>
                  <ImageView
                    src={require('../../images/newEvent.png')}
                    imageStyle={{
                      width: width * 0.07,
                      height: width * 0.07,
                      //   alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                {communityEvents.length == 0 ? (
                  <View
                    style={{marginTop: 10, width: '85%', alignSelf: 'center'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        marginHorizontal: 18,
                      }}>
                      <Text
                        style={{
                          color: '#b7b7b7',
                          fontSize: 16,
                          fontFamily: 'Poppins-Bold',
                          letterSpacing: -0.8,
                        }}>
                        {'No events,'}
                      </Text>
                      <TouchableOpacity>
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate('NewEvent', {
                              id: props.route.params.data[backgroundImage].id,
                              data: props.route.params.data[backgroundImage]
                                .user_id,
                              category_data:
                                props.route.params.data[backgroundImage]
                                  .category_id,
                            })
                          }>
                          <Text
                            style={{
                              color: '#6f52ed',
                              fontSize: 16,
                              fontFamily: 'Poppins-Bold',
                              letterSpacing: -0.8,
                            }}>
                            {' '}
                            create new
                          </Text>
                        </TouchableOpacity>
                        {/* <ImageView
     src={require('../../images/edit.png')}
     imageStyle={{
       width: width * 0.050,
       height: width * 0.050,
      //  marginLeft:15
     //   alignSelf: 'center',
       
     }}
   /> */}
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  !firstdrop && (
                    <View
                      style={{
                        marginTop: 10,
                        width: '84%',
                        alignSelf: 'center',
                        marginBottom: !second ? 510 : 0,
                      }}>
                      {communityEvents.map(
                        (item, index) =>
                        
                          item.status == 'Approved' && (
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: index != 0 ? 15 : 8,
                                marginLeft: 15,
                              }}>
                              {/* <TouchableOpacity></TouchableOpacity> */}
                              {/* {console.log("Event Detail Item ------------------>>>----------------------",item)} */}
                              <TouchableOpacity
                                onPress={() =>
                                  props.navigation.navigate(
                                    'eventDetails',
                                    {data: item},
                                  )
                                }>
                                <Text
                                  style={{
                                    color: '#b7b7b7',
                                    fontSize: 16,
                                    fontFamily: 'Poppins-Bold',
                                    letterSpacing: -0.8,
                                  }}>
                                  {item.event_name}
                                </Text>
                              </TouchableOpacity>
                              {props.route.params.data[backgroundImage]
                                .user_id === auth()?.currentUser?.uid &&
                                props.route.params.data[backgroundImage]
                                  .user_id === item.user_id && (
                                  <TouchableOpacity
                                    onPress={() =>
                                      openModalEvent(
                                        item.id,
                                        item.event_name,
                                        index,
                                      )
                                    }>
                                    <ImageView
                                      src={require('../../images/set.png')}
                                      imageStyle={{
                                        width: 16,
                                        height: 17,
                                        //  marginLeft:15
                                        //   alignSelf: 'center',
                                      }}
                                    />
                                  </TouchableOpacity>
                                )}
                            </View>
                          ),
                      )}
                    </View>
                  )
                )}
              </View>
              {auth()?.currentUser?.uid ==
                props.route.params.data[backgroundImage]?.user_id &&
                second && (
                  <View
                    style={{
                      padding: 10,
                      backgroundColor: '#6f52ed',
                      margin: 25,
                      borderRadius: 5,
                      marginBottom: 510,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 10,
                        justifyContent: 'space-between',
                        // marginTop: 20,
                      }}>
                      <Text
                        style={{
                          color: '#ffffff',
                          fontSize: 12,
                          marginVertical: 7,
                          fontFamily: 'Poppins-Medium',
                        }}>
                        Awaiting your approval
                      </Text>
                      <TouchableOpacity onPress={() => dropChangeEvent()}>
                        <ImageView
                          src={require('../../images/dropup.png')}
                          imageStyle={{
                            width: width * 0.03,
                            height: width * 0.015,
                            marginHorizontal: 5,

                            // marginBottom:4,

                            //   alignSelf: 'center',
                            transform: [{rotate: drop ? '0deg' : '180deg'}],
                          }}
                          Color={'#ffffff'}
                        />
                      </TouchableOpacity>
                    </View>
                    {!event &&
                      communityEvents.map(
                        (item, index) =>
                          item.status == 'Pending' && (
                            <TouchableOpacity
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}
                              onPress={() =>
                                {props.navigation.navigate(
                                  'pendingEventsDetails',
                                  {data: item , parentCallback: (C_data)=>{setsecond(C_data)} },
                                ),
                                console.log("SECOND--------------------------------",second)}
                              }>
                              <View
                                style={styles.chateventscomhomeScreenCardView}>
                                <Text style={styles.sportscommunityPublicText}>
                                  {'Pending'}
                                </Text>
                              </View>
                              <Text
                                style={{
                                  color: '#ffffff',
                                  fontSize: 12,
                                  fontFamily: 'Poppins-Bold',
                                }}>
                                #{item.event_name}
                              </Text>
                            </TouchableOpacity>
                          ),
                      )}
                  </View>
                )}
            </View>
          </ScrollView>
        </View>
      </View>
      <RBSheet
        ref={ref => {
          eventSelect = ref;
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
          <View style={{padding: 15, paddingLeft: 25}}>
            <Text
              style={{
                color: '#b7b7b7',
                fontSize: 12,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Event name
            </Text>
            <TextInput
              placeholder="Hi..."
              placeholderTextColor={'#fff'}
              style={{
                backgroundColor: '#000',
                color: '#515151',
                fontSize: 14,
                fontFamily: 'Poppins-Medium',
                marginVertical: 10,
              }}
              value={editText}
              editable={false}
              selectionColor="#fff"
              // autoCapitalize="none"
              onChangeText={val => texting(val)}
              // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => gotoEdit()}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontFamily: 'Poppins-Bold',
                  paddingTop: 20,
                }}>
                Edit Event
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
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontFamily: 'Poppins-Bold',
                paddingTop: 20,
              }}>
              Delete
            </Text>
          </View>
        </View>
      </RBSheet>
      <RBSheet
        ref={ref => {
          createChatSelect = ref;
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
          <View style={{padding: 15, paddingLeft: 25}}>
            <Text
              style={{
                color: '#b7b7b7',
                fontSize: 12,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Chatroom name
            </Text>
            <TextInput
              placeholder="Hi..."
              placeholderTextColor={'#fff'}
              style={{
                color: '#fff',
                fontSize: 14,
                fontFamily: 'Poppins-Medium',
                marginVertical: 10,
              }}
              value={input}
              selectionColor="#fff"
              // autoCapitalize="none"
              onChangeText={text => setInput(text)}
              // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            />
          </View>
          <TouchableOpacity
            onPress={() => createChat()}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: 'Poppins-Bold',
                paddingTop: 20,
              }}>
              Create chatroom
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
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
          <View style={{padding: 15, paddingLeft: 25}}>
            <Text
              style={{
                color: '#b7b7b7',
                fontSize: 12,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Chatroom name
            </Text>
            <TextInput
              placeholder="Hi..."
              placeholderTextColor={'#fff'}
              style={{
                color: '#fff',
                fontSize: 14,
                fontFamily: 'Poppins-Medium',
                marginVertical: 10,
              }}
              value={editText}
              selectionColor="#fff"
              // autoCapitalize="none"
              onChangeText={val => texting(val)}
              // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => updateGroupName()}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontFamily: 'Poppins-Bold',
                  paddingTop: 20,
                }}>
                Update
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
            onPress={()=>confirmationHandler()}
            //onPress={() => deleteGroupName()}
            
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontFamily: 'Poppins-Bold',
                  paddingTop: 20,
                }}>
                Delete chatroom
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      {/* ------------CONFIRMATION------------ */}
      <RBSheet
        ref={ref => {
          ConfirmRef = ref;
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
              onPress={() => ConfirmRef.close()}>
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
                  onPress={() => {
                    deleteGroupName(),
                    ConfirmRef.close()
                  
                  }} >
                  <View
                    style={{
                      justifyContent: 'center',
                      paddingHorizontal: wp('2%'),
                    }}>
                    <Text style={styles.logoutsettingButtonTextStyle}>
                      {'Delete'}
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

      {/* -----------------CONFIRMATION ENDS--------------- */}
      <RBSheet
        ref={ref => {
          settingSelect = ref;
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
        <View style={{justifyContent: 'center', flex: 1}}>
          <View style={{alignItems: 'center'}}>
            {auth()?.currentUser?.uid ==
              props.route.params.data[backgroundImage]?.user_id && (
              <>
                <TouchableOpacity onPress={() => goEditScreen()}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontFamily: 'Poppins-Bold',
                      paddingTop: 0,
                      letterSpacing: -0.8,
                    }}>
                    Edit community info
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
              </>
            )}

            <TouchableOpacity
              onPress={() => leaveCommunity()}
              disabled={
                auth()?.currentUser?.uid ==
                props.route.params.data[backgroundImage]?.user_id
                  ? true
                  : false
              }>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontFamily: 'Poppins-Bold',
                  paddingTop: 20,
                  letterSpacing: -0.8,
                }}>
                Leave community
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
