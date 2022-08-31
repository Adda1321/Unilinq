import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform

} from 'react-native';
import { appStyles } from '../../style';
import { Card } from 'react-native-shadow-cards';
import ImageView from '../Image/index';
import { Images } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
const CommunitesTemp = React.memo(({ ProfilesData, SurvivalShow,  categoryEnable, navigation, homeStyle, cardStyle, colorText, topContainer }, ref) => {
  const [imageLoad, setImageLoad] = useState(false)
//  useEffect(()=>{
//    setImageLoad(true)
//   loadImages(ProfilesData).then((results) => { setImageLoad(false) });
//  },[])
//  loadImages = (images) =>{        
//   return Promise.all(Object.keys(images).map((i) => {
//       let img = {
//           ...Image.resolveAssetSource(images[i]),
//           cache: 'force-cache'
//       };

//       return Image.prefetch(img);
//   }));
// }
  return (
    <View style={[topContainer]}>
      {ProfilesData?.map((product, index) => {
        return (

          product.status == 'Approved' && SurvivalShow === true ? (

            <View style={{}}>
            <TouchableOpacity
              // disabled
              onPress={() => navigation.navigate('CommunityDetails', { data: product })}
            >

              <Card style={[homeStyle]}>
                {imageLoad == false && (
                  <ShimmerPlaceHolder LinearGradient={LinearGradient} style={[cardStyle, { position: 'absolute', zIndex: 100 }]} />
                )}
                <ImageBackground
                  style={cardStyle}
                  source={{ uri: product.community_image }}
                  resizeMode="cover"
                  onLoadStart={() => Platform.OS === 'android' ? console.log("Ok") :setImageLoad(false)}
                  onLoadEnd={() => setImageLoad(true)}
                >
                  {categoryEnable && (
                    <>
                      <View style={styles.homeScreenCardView}>
                        {product.community_status == 'Public' ?
                          <ImageView
                            src={Images.public}
                            imageStyle={{ width: 15, height: 15 }}
                          /> : <ImageView
                            src={require('../../images/lock.png')}
                            imageStyle={{ width: 12, height: 16 }}
                          />}

                        <Text
                          style={[styles.communityPublicText]}>
                          {product.community_status}
                        </Text>
                      </View>
                      <View style={styles.comhomeScreenCardView}>

                        <Text
                          style={styles.sportscommunityPublicText}>
                          {product.category_id}
                        </Text>
                      </View>
                    </>
                  )}
                </ImageBackground>
              </Card>
              <Text
                style={[colorText, styles.communityTextSearch]}>
                {product.community_name}
              </Text>
            </TouchableOpacity>
          </View>
            
          ) :
          product.status == 'Approved' && product.community_type == 'Social' && SurvivalShow == false && (
          
          <View style={{}}>

            <TouchableOpacity
              // disabled
              onPress={() => navigation.navigate('CommunityDetails', { data: product })}
            >

              <Card style={[homeStyle]}>
                {imageLoad == false && (
                  <ShimmerPlaceHolder LinearGradient={LinearGradient} style={[cardStyle, { position: 'absolute', zIndex: 100 }]} />
                )}
                <ImageBackground
                  style={cardStyle}
                  source={{ uri: product.community_image }}
                  resizeMode="cover"
                  onLoadStart={() => Platform.OS === 'android' ? console.log("Ok") :setImageLoad(false)}
                  onLoadEnd={() => setImageLoad(true)}
                >
                  {categoryEnable && (
                    <>
                      <View style={styles.homeScreenCardView}>
                        {product.community_status == 'Public' ?
                          <ImageView
                            src={Images.public}
                            imageStyle={{ width: 15, height: 15 }}
                          /> : <ImageView
                            src={require('../../images/lock.png')}
                            imageStyle={{ width: 12, height: 16 }}
                          />}

                        <Text
                          style={[styles.communityPublicText]}>
                          {product.community_status}
                        </Text>
                      </View>
                      <View style={styles.comhomeScreenCardView}>

                        <Text
                          style={styles.sportscommunityPublicText}>
                          {product.category_id}
                        </Text>
                      </View>
                    </>
                  )}
                </ImageBackground>
              </Card>
              <Text
                style={[colorText, styles.communityTextSearch]}>
                {product.community_name}
              </Text>
            </TouchableOpacity>
          </View>
          )
          
        );
      })}
    </View>
  );
});
export default CommunitesTemp;
const styles = StyleSheet.create(appStyles);
