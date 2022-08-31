import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Pressable,
  Button,
  AppState,
} from 'react-native';
import {appStyles} from '../../style';
import {Card} from 'react-native-shadow-cards';
import ImageView from '../Image';
import {Images} from '../../utils';
import {auth, firestore} from '../../Core/config/config';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
// import PersonToPerson from '../../Core/Chat/PersonToPerson';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

import {connect} from 'react-redux';
import {now, remove} from 'lodash';
const Profiles = ({ProfilesData, navigation, allRooms}, ref) => {
  const [imageLoad, setImageLoad] = useState(false);
  const [chatoad, setChatLoad] = useState(false);
  const [online, setonline] = useState(false);
  // const [ID, setID] = useState('');
  let receiver_id;
  // console.log('PropsRoom------------->', allRooms.data);

  const testChat = () => {
    alert('ENTER CHAT ');
  };

  const enterChat = async (sender_id, receiver_id) => {
    // alert('Successful click');
    const members = [];

    var check;
    var ID;
    var check2;
    members.push(sender_id, receiver_id);
    // var checkRoom =
    allRooms.data.map((item, index) => {
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
    <View style={styles.searchScreenCardContainerThree}>
      {ProfilesData?.map((product, index) => {
        return (
          product.id !== auth()?.currentUser.uid && (
            <View style={{alignContent: 'center'}}>
              <TouchableOpacity
                // disabled
                onPress={() => {
                  navigation.navigate('UserScreen', {data: product});
                }}>
                <Card
                  style={[
                    styles.searchScreenhomeScreenCard,
                    {flexDirection: 'column'},
                  ]}>
                  <View style={[styles.searchScreenCardInnerContainer]}>
                    <View style={[styles.searchScreenCardProfileView]}>
                      <View>
                        {imageLoad == false && (
                          <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={[
                              styles.searchScreenProfileImage,
                              {position: 'absolute'},
                            ]}
                          />
                        )}
                        <ImageView
                          src={{uri: product?.image}}
                          imageStyle={styles.searchScreenProfileImage}
                          onLoadStart={() =>
                            Platform.OS === 'android'
                              ? console.log('Ok')
                              : setImageLoad(false)
                          }
                          onLoadEnd={() =>
                            ProfilesData.length == index + 1
                              ? setImageLoad(true)
                              : null
                          }
                        />
                        {moment(product?.timestamp).add(30, 'minutes') >=
                          new Date(Date.now()) &&
                          //  setonline(true)
                          
                          (console.log('true'),
                          (
                            <>
                              <View
                                style={{
                                  height: 18,
                                  width: 18,
                                  backgroundColor: 'white',
                                  borderRadius: 50,
                                  alignSelf:"center",
                                  position:"absolute",
                                  
                                  justifyContent:"center",
                                  marginTop:56
                                }}>
                                <View
                                  style={{
                                    height: 10,
                                    width: 10,
                                    backgroundColor: '#39D480',
                                    borderRadius: 50,
                                    
                                    alignSelf:"center",
                                  

                                  }}
                                />
                              </View>
                            </>
                          ))
                        }
                      </View>
                      <Text style={styles.searchScreenUserName}>
                        {product?.first_name} {product?.last_name}
                      </Text>
                      <Text style={styles.searchScreenUserCategory}>
                        {'Activities'}
                      </Text>
                    </View>
                  </View>

                  {/* <Button style={{color:"#000" , backgroundColor:"red"}} title={"press"} onPress={()=>alert("prESSED")} /> */}

                  <TouchableOpacity
                    // disabled
                    style={{marginTop: 60}}
                    onPress={() => {
                      enterChat(
                        auth()?.currentUser?.uid,
                        ProfilesData[index].id,
                      );
                    }
                    
                    }
                    hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
                    >
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        margin: 10,
                        marginBottom: 8,
                        // backgroundColor:"yellow"
                      }}>
                      {Platform.OS === 'ios' && chatoad == false && (
                        <ShimmerPlaceHolder
                          LinearGradient={LinearGradient}
                          style={[
                            {
                              width: 37,
                              height: 30,
                              position: 'absolute',
                              bottom: 0,
                              justifyContent: 'flex-end',
                              margin: 5,
                            },
                          ]}
                        />
                      )}
                      <ImageView
                        src={Images.chat}
                        imageStyle={[
                          styles.searchScreenChatImage,
                          {
                            position: 'absolute',
                            bottom: 0,
                            justifyContent: 'flex-end',
                          },
                        ]}
                        onLoadStart={() =>
                          Platform.OS === 'android'
                            ? console.log('Ok')
                            : setChatLoad(false)
                        }
                        onLoadEnd={() => setChatLoad(true)}
                      />
                    </View>
                  </TouchableOpacity>
                </Card>
              </TouchableOpacity>
            </View>
          )
        );
      })}
    </View>
  );
};
function mapStateToProp(state) {
  return {
    allRooms: state.allRooms,
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(Profiles);
