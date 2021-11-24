import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {appStyles} from '../../style';
import {Card} from 'react-native-shadow-cards';
import ImageView from '../Image/index';
import {Images} from '../../utils';
const Communites = ({ProfilesData, categoryEnable, navigation}, ref) => {
  return (
    <View style={styles.searchScreenCardContainer}>
      {ProfilesData.map((product, index) => {
        return (
          <View style={{}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CommunityDetails', {image: product});
              }}>
              <Card style={styles.homeScreenCard}>
                <ImageBackground
                  style={styles.homeScreenCardImage}
                  source={product}
                  resizeMode="stretch">
                  {categoryEnable && (
                    <>
                      <View style={styles.homeScreenCardView}>
                        <ImageView
                          src={Images.public}
                          imageStyle={{width: 17, height: 17}}
                        />
                        <Text
                          style={{
                            color: '#000',
                            marginLeft: 5,
                            fontSize: 10,

                            fontFamily: 'Poppins-SemiBold',
                            textAlign: 'center',
                            paddingVertical: 1,
                          }}>
                          Public
                        </Text>
                      </View>
                      <View style={{position: 'absolute', bottom: 0}}>
                        <Text style={styles.homeScreenCardTextTwo}>
                          Sports & Fitness
                        </Text>
                      </View>
                    </>
                  )}
                </ImageBackground>
              </Card>
              <Text
                style={{
                  color: '#B7B7B7',
                  marginHorizontal: 15,
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  marginTop: -4,
                }}>
                MEL U AFL Fan
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
export default Communites;
const styles = StyleSheet.create(appStyles);
