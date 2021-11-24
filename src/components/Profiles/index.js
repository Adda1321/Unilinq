import React from 'react'
import { View, Text ,StyleSheet,TouchableOpacity } from 'react-native'
import {appStyles} from '../../style';
import {Card} from 'react-native-shadow-cards';
import ImageView from '../Image';
import {Images} from '../../utils'
const Profiles =(
    (
      {
        ProfilesData,
        navigation
      },
      ref
    ) => {
      
    return (
        <View style={styles.searchScreenCardContainer}>
        {ProfilesData.map((product, index) => {
          return (
            <View style={{}}>
              <TouchableOpacity
                // disabled
                onPress={() => {
                    navigation.navigate('UserScreen');
                }}>
                <Card
                  style={[
                    styles.searchScreenhomeScreenCard,
                    {justifyContent: 'center'},
                  ]}>
                  <View style={styles.searchScreenCardInnerContainer}>
                    <View style={styles.searchScreenCardProfileView}>
                      <ImageView
                        src={Images.ground}
                        imageStyle={styles.searchScreenProfileImage}
                      />
                      <Text style={styles.searchScreenUserName}>
                        Marni O'Connell
                      </Text>
                      <Text style={styles.searchScreenUserCategory}>
                        Activities
                      </Text>
                    </View>
                    <View style={styles.searchScreenChatContainer}>
                      <ImageView
                        src={Images.chat}
                        imageStyle={styles.searchScreenChatImage}
                      />
                    </View>
                    {/* <ImageView src={Images.chat} style={{width:25,height:25,backgroundColor:'#000'}} /> */}
                  </View>
                </Card>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    )
})
export default Profiles;
const styles = StyleSheet.create(appStyles);