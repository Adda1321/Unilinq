import React from 'react'
import { View, Text ,TouchableOpacity ,StyleSheet ,ScrollView , ImageBackground } from 'react-native'
import ImageView from '../../components/Image'
import {appStyles} from '../../style'
import {Images} from '../../utils'
import { Card } from "react-native-shadow-cards";
import { useNavigation } from '@react-navigation/native';

export default function CommunityDetails(props) {
  const navigation = useNavigation();
    const products =[
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

    ]
    return (
        <View style={{flex:1,backgroundColor:'#f3f3f4'}}>
            <ScrollView >
              
              <ImageBackground source={Images.robot} style={styles.homeScreenImageContainer} resizeMode="cover" imageStyle={{borderBottomRightRadius:60}}>
                <View style={styles.joinCommunityTextTwo}>
                <View style={styles.profilebarMainContainer}>
                 <View style={styles.profilebarInnerContainer}>
                   <View style={styles.profilebarButtonContainer}>
                     <View style={{flexDirection:'row',}}>
                     <TouchableOpacity style={styles.profilebarButton} onPress={()=>navigation.navigate('Profile')}>
                     <Text style={styles.profilebarButtonText}>A</Text>
                     </TouchableOpacity>
                     <View style={{flexDirection:'row',paddingTop:3}}>
                     <Text style={styles.profilebarText}>Hi,</Text>
                     <Text style={styles.profilebarTextT}>Anders</Text>
                     </View>
                     </View>
                     <View style={{flexDirection:'row'}}>
                     <ImageView src={require('../../images/search.png')} imageStyle={styles.profilebarSearchImage}  />
                     <ImageView src={Images.plus} imageStyle={styles.profilebarPlusImage}  />
                     </View>
                     </View>
                    
                   </View>
                   <View style={styles.profilebarMessageImageContainer}>
                  <View style={{backgroundColor:'red',alignItems:'flex-end',width:17,height:11,alignSelf:'flex-end',position:'absolute',bottom:39,borderRadius:6,right:1,padding:1}}>
                    <Text style={{fontFamily:'Poppins-Bold',fontSize:6,color:'#fff',textAlign:'center',alignItems:'center',alignSelf:'center'}}>25</Text>
                    
                    </View>
                    <ImageView src={require('../../images/message.png')} imageStyle={{width:22,height:22,alignSelf:'center',marginTop:0,borderRadius:2}}  />
                     </View>
                  
                  
                  </View>
                 
                </View>
                <View style={styles.joinCommunityTextTwoThree}>
                <View style={styles.communitybarMainContainer}>
                 <TouchableOpacity style={styles.communitybarInnerContainer} onPress={()=>navigation.goBack()}>
                 <ImageView src={require('../../images/short_left.png')} imageStyle={styles.communityDetailsShortLeft}  />       
                   </TouchableOpacity>
                  </View>
                </View>
                <View style={{position:'absolute',bottom:-20}} >
                <Text style={styles.joinCommunityText}>MCU Gaming Union</Text>
                <TouchableOpacity style={styles.communitytopContainer}>
                
                <View style={styles.communitylandingScreenContainer}>
               
                <View style={styles.communityprofileImageLayout}>
            </View>
            <View style={styles.communityprofileImageLayoutSecond}>
            </View>
            <View style={styles.communityprofileImageLayoutThird}>
            </View>
            <View style={styles.communityDetailsMembersContainer}>
                  <Text style={styles.communityDetailsMembersTextOne}>2000+</Text>
                  <Text style={styles.communityDetailsMembersTextTwo}>Members</Text>
                  </View>
                </View>
              </TouchableOpacity> 
                </View>
                </ImageBackground>
                
              <TouchableOpacity style={styles.joinCommunitytopContainer}>
                
                <View style={styles.communityButtonlandingScreenContainer}>
               
                  <Text style={styles.dayText}>Join this community</Text>
                  <View style={styles.communityDetailsShortRightContainer} />
                  <ImageView  src={Images.short_right}  imageStyle={styles.homeScreenImage} />
                </View>
              </TouchableOpacity>
              <View style={styles.communityDetailsAdminInfoContainer}>
           <View style={styles.communityDetailsInfoInnerContainer}>
                  <ImageView src={Images.ground} imageStyle={styles.communityDetailsCircularImage} />
                  <View style={{marginLeft:10}}>
                      <Text style={styles.communityDetailsAdminInfoTextOne}>Hanan Waqar</Text>
                      <Text style={styles.communityDetailsAdminInfoTextTwo}>Group Admin</Text>
                  </View>
                  </View>
                  <ImageView src={Images.email} imageStyle={styles.communityDetailsEmailImage} />
              </View>
              <View style={styles.communityDetailsShowMoreContainer}>
                  <Text style={styles.communityDetailsShowMoreText}>Show more</Text>
                  
              </View>
              <View style={styles.communityDetailsEyeImageContainer}>
              <ImageView src={Images.eye} imageStyle={styles.communityDetailsEyeImage} />
              </View>
              <View style={styles.communityDetailsAboutGroupContainer}>
                  <Text style={styles.communityDetailsAboutGroupTextOne}>About this group</Text>
                 <Text style={styles.communityDetailsAboutGroupTextTwo}>Walk ins are allowed but bookings are recomended for any large events they hold. If anyone wishes to have a fun nerdy time and chat to like minded people feel free to come along. 🙂</Text>
              </View>
              <View >
                  <Text style={styles.communityDetailsUpCommingEventText}>Upcoming events</Text>
                 <ScrollView horizontal contentContainerStyle={{paddingLeft:10}} >
                  {products.map((product, index) => (

<View >
  <TouchableOpacity
    onPress={() => {
     this.props.navigation.navigate('CommunityDetails',{image:product})
    }}
  >
    <Card
      style={styles.communityDetailshomeScreenCard}
    >
      <ImageBackground
        style={styles.communityDetailshomeScreenCardImage}
        source={product}
        resizeMode="stretch"
      >
        <View style={styles.communityDetailshomeScreenCardView}>
        {/* <ImageView  src={Images.public}  imageStyle={{width:15,height:15}}  /> */}
        <Text
          style={styles.communityDetailsCardImageText}
        >
        200+
        </Text> 
        <Text
          style={styles.communityDetailsCardImageTextTwo}
        >
        attendees
        </Text> 
        
        </View>
        <View style={{position: "absolute",
  bottom: 0,}}>
        <Text
          style={styles.homeScreenCardTextTwo}
        >
        Sports & Fitness
        </Text> 
        </View>
      </ImageBackground>
      
    </Card>
    <View style={{width:250}}>
    <Text
          style={styles.communityDetailsCardImageDateText}
        >
       Sat, Aug 28 12:00 PM
        </Text> 
        <Text
          style={styles.communityDetailsCardDetailsText}
        >
      Using AI to Understand Search Intent by eBay applied researcher, Aritra Mandal
        </Text> 
        </View>
  </TouchableOpacity>
</View>
  )
)}
</ScrollView>
<View style={{flexDirection:'row',marginBottom:20}}>
<TouchableOpacity style={styles.communityDetailsjoinCommunitytopContainer}>
                
                <View style={styles.communityButtonlandingScreenContainer}>
               
                  <Text style={styles.communityDetailsdayText}>Join this community</Text>
                  <View style={{ height: 30,
  width: 1,
  backgroundColor: '#909090',}} />
                  <ImageView  src={Images.short_right}  imageStyle={styles.homeScreenImage} />
                </View>
              </TouchableOpacity>
              <ImageView  src={Images.question}  imageStyle={styles.communityDetailshomeScreenImage} />
              </View>
              
              </View>
              </ScrollView>
      </View>
    )
}
const styles = StyleSheet.create(appStyles)