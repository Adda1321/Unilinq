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
import ImageView from '../Image';
import {Images} from '../../utils';
const Events = ({ProfilesData}, ref) => {
  return (
    <View>
      {ProfilesData.map((product, index) => (
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('CommunityDetails', {
                image: product,
              });
            }}>
            <Card style={styles.searchEventsDetailshomeScreenCard}>
              <ImageBackground
                style={styles.searchDetailshomeScreenCardImage}
                source={product}
                resizeMode="cover">
                <View style={styles.communityDetailshomeScreenCardView}>
                  {/* <ImageView  src={Images.public}  imageStyle={{width:15,height:15}}  /> */}
                  <Text style={styles.communityDetailsCardImageText}>200+</Text>
                  <Text style={styles.communityDetailsCardImageTextTwo}>
                    attendees
                  </Text>
                </View>
                <View style={{position: 'absolute', bottom: 0}}>
                  <Text style={styles.homeScreenCardTextTwo}>
                    Sports & Fitness
                  </Text>
                </View>
              </ImageBackground>
            </Card>
            <View style={{width: '100%'}}>
              <Text style={styles.communityDetailsCardImageDateText}>
                Sat, Aug 28 12:00 PM
              </Text>
              <Text style={styles.communityDetailsCardDetailsText}>
                Using AI to Understand Search Intent by eBay applied researcher,
                Aritra Mandal
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
export default Events;
const styles = StyleSheet.create(appStyles);
