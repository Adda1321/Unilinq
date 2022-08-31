import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {appStyles} from '../../style';
import {Card} from 'react-native-shadow-cards';
import ImageView from '../Image';
import {firestore, auth} from '../../Core/config/config';

import {connect} from 'react-redux';
import {Images} from '../../utils';
const ProfilesMembers = (
  {ProfilesData, navigation, admin , allRooms},

  ref,
) => {

  
  const enterChat = async (sender_id, receiver_id) => {
    alert('Successful click');
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
      {ProfilesData?.map(
        (product, index) =>
          // admin != product.id && ()

          product.id != admin && (
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
                        <ImageView
                          src={{uri: product.image}}
                          imageStyle={styles.searchScreenProfileImage}
                        />
                      </View>
                      <Text style={styles.searchScreenUserName}>
                        {product.first_name} {product.last_name}
                      </Text>
                      <Text style={styles.searchScreenUserCategory}>
                        Members
                      </Text>
                    </View>

                    {/* <ImageView src={Images.chat} style={{width:25,height:25,backgroundColor:'#000'}} /> */}
                  </View>

                  <TouchableOpacity
                    onPress={() =>
                      enterChat(auth()?.currentUser?.uid, product.id)
                    }
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      margin: 10,
                      marginBottom: 8,
                      flexDirection: 'row',
                      marginHorizontal: 15,
                      justifyContent: 'space-between',
                    }}>
                    <ImageView
                      src={require('../../images/Chat2.png')}
                      imageStyle={[
                        styles.communityMembersearchScreenChatImage,
                        {
                          position: 'absolute',
                          bottom: 0,
                          justifyContent: 'flex-end',
                        },
                      ]}
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      position: 'absolute',
                      right: 10,
                      bottom: 0,
                      marginBottom: 25,
                      fontSize: 10,
                      fontFamily: 'Poppins-SemiBold',
                      lineHeight: 14,
                      color: '#b7b7b7',
                    }}
                    onPress={() => navigation.navigate('ReportMember')}>
                    Report member
                  </Text>
                </Card>
              </TouchableOpacity>
            </View>
          ),
      )}
    </View>
  );
};

function mapStateToProp(state) {
  return {
    allRooms: state.allRooms,
  };
}
 
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(ProfilesMembers);