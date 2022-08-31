import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  PixelRatio,
  TextInput,
  Platform,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import {appStyles} from '../../style';
import ImageView from '../../components/Image';
import {Images} from '../../utils';
import * as _ from 'lodash';
import {Card} from 'react-native-shadow-cards';
import CategorySelectBottomSheet from './CategorySelectBottomSheet';
const {height, width} = Dimensions.get('window');
const halfWidth = width / 2;
import {connect} from 'react-redux';
import {signUp, signIn} from '../../Core/Auth/auth';
import {getCommunity} from '../../Core/Communities/getCommunity';
import {getAllJoinedCommunity} from '../../Core/Communities/getAllJoinedCommunities'
import Communites from '../../components/Communites';
import {Dialog} from 'react-native-elements';
import CommunitesTemp from '../../components/Communitestemp'; //delete later
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {cond} from 'lodash';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 1,
      loading: false,
      arr:['View All'],
      products: [
        {
          community_name: "Marni O'Connell",
          img: Images.ground,
          category: 'Activities',
        },
        {
          community_name: 'Josh Pelach',
          img: Images.boys,
          category: 'Secretary',
        },
        {
          community_name: 'Bailey Webb',
          img: Images.robot,
          category: 'Treasurer',
        },
        {
          community_name: 'Georgia',
          img: Images.lights,
          category: 'Creative & Live Arts',
        },
        {
          community_name: 'Bailey Webb',
          img: Images.ground,
          category: 'Activities',
        },
        {
          community_name: 'Georgia',
          img: Images.boys,
          category: 'Creative & Live Arts',
        },
        {
          community_name: "Marni O'Connell",
          img: Images.robot,
          category: 'Treasurer',
        },
        {
          community_name: "Marni O'Connell",
          img: Images.lights,
          category: 'Activities',
        },
        {
          community_name: "Marni O'Connell",
          img: Images.ground,
          category: 'Activities',
        },
        {
          community_name: "Marni O'Connell",
          img: Images.boys,
          category: 'Activities',
        },
        {
          community_name: "Marni O'Connell",
          img: Images.robot,
          category: 'Activities',
        },
        {
          community_name: "Marni O'Connell",
          img: Images.lights,
          category: 'Activities',
        },
        {
          community_name: "Marni O'Connell",
          img: Images.ground,
          category: 'Activities',
        },
        {
          community_name: "Marni O'Connell",
          img: Images.boys,
          category: 'Activities',
        },
      ],
      communites :[],
      studyproducts: [
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
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
      ],
    };
  }

  async componentDidMount() {
    // const chunkedElements = _.chunk(this.state.products, 10)
    // screenHeight * elemHeight / 100
    // await signUp('squaredlogics@gmail.com','password','Anders','Chow','https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg','Bacholer Student','BBA','Fast Lahore',this.props.dispatch)
    // await  getAllJoinedCommunity(auth().currentUser.uid,this.props.dispatch)
    // await getCommunity(this.props.dispatch);
  //  console.log("id===============",this.props.getAllJoinedCommunity)
   
   this.setState({loading:true})
    let pixels = 32;
    let response = (pixels * 100) / height;
    

    //  let pixels =205
    //  let response = (pixels*100)/width
    //  console.log("DataFontwidth=====>",response)
  }
  checkNotification = () => {

  }
  navigateApp = index => {
    
  };
  onTabClick = currentTab => {
    
    this.setState({
      currentTab: currentTab,
    });
  };
  CategoryList=(data)=>{
     var arra = []
    let obj = data.filter(o => o.isChecked === true);
    
    // users = users.filter(obj => obj.name == filter.name && obj.address == filter.address)
    for (let i =0;i<obj.length;i++){
      this.props.getCommunity?.data.map((item,index)=>{
      
        if(item.category_id.includes(obj[i].txt)){
          arra.push(item)
        }
        
      })

    }
    console.log("sdsdsdsdsd",arra)
    if(obj[0] == undefined){
      this.setState({arr:['View All']})
    }
    else {
      if(obj[0].txt =='View All'){
        this.setState({arr:['View All']})
      }
      else {
        this.setState({arr:arra})
      }
    }
    
   
    // console.log("aaaa======>",arr)
    // var data=.includes(obj)
  
    // if(obj !=undefined){
    // this.setState({categoryId:obj.txt, categoryCheck: {
    //   ...this.state.categoryCheck,
    //   isValidUser: false,
    // },})
    // }
  }
  render() {
   
    return (
      <View style={styles.homeScreenMainContainer}>
        
          <ScrollView contentContainerStyle={styles.homeScreenScrollContainer}>
            {/* <ImageView  src={Images.homeTop}  imageStyle={styles.blackBack}  /> */}
            <ImageBackground
              source={Images.homeTop}
              style={styles.homeScreenImageContainer}
              resizeMode="cover"
              imageStyle={{borderBottomRightRadius: 60}}>
              <View style={styles.joinCommunityTextTwo}>
                <View style={styles.profilebarMainContainer}>
                <View style={styles.profilebarInnerContainer}>
                <View style={styles.profilebarButtonContainer}>
                  {!this.props.users?.loading ? 
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                  <View >
                  <ShimmerPlaceHolder LinearGradient={LinearGradient} style={{width:40,height:40,borderRadius:25}}/>
                  </View>
                  <ShimmerPlaceHolder LinearGradient={LinearGradient} style={{width:'50%'}}/>
                  </View>
                :
                <>
                  <TouchableOpacity
                    style={styles.profilebarButton}
                    onPress={() =>
                      this.props.navigation.navigate('Profile')
                    }>
                    <Text
                      style={[
                        styles.profilebarButtonText,
                        {lineHeight: 28},
                      ]}>
                      {this.props.users?.first_name?.charAt(0)}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection: 'row'}}  onPress={() =>
                      this.props.navigation.navigate('Profile')
                    }>
                    <Text
                      style={{
                        textAlign: 'center',
                        alignSelf: 'center',
                        paddingLeft: 7,
                        paddingTop: Platform.OS === 'ios' ? 0 : 2,
                      }}>
                      <Text style={styles.profilebarText}>Hi, </Text>
                      <Text style={[styles.profilebarTextT]}>
                        {this.props.users.first_name}
                      </Text>
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Search')
                      }>
                      <ImageView
                        src={require('../../images/search.png')}
                        imageStyle={styles.profilebarSearchImage}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      // disabled
                      onPress={() =>
                        this.props.navigation.navigate('CommunityCreate')
                      }>
                      <ImageView
                        src={Images.plus}
                        imageStyle={styles.profilebarPlusImage}
                      />
                    </TouchableOpacity>
                  </View>
                  </>
                }
                </View>
              </View> 
                
              {!this.props.users?.loading ? 
              <ShimmerPlaceHolder LinearGradient={LinearGradient} style={styles.profilebarMessageImageContainer}/> :

                  <TouchableOpacity
                  disabled={this.props.getAllJoinedCommunity?.data == undefined ? true :this.props.getAllJoinedCommunity?.data?.length == 0  ? true :false}
                    style={styles.profilebarMessageImageContainer}
                    onPress={() =>
                      this.props.navigation.navigate('Chat', {
                        data: this.props.getAllJoinedCommunity?.data,
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
  }
                </View>
              </View>
              <View style={{position: 'absolute', bottom: -28,}}>
              
                <Text style={[styles.joinCommunityText,]} adjustsFontSizeToFit>
                  Join a community
                </Text>
                
                {/* <TouchableOpacity style={styles.topContainer}>
              
                <TouchableOpacity style={styles.landingScreenContainer} onPress={()=>this.props.navigation.navigate('CommunityCreate')}>
               
                  <Text style={styles.dayText}>Create New Community</Text>
                  <View style={{ height: 30,
  width: 1,
  backgroundColor: '#909090',}} />
                  <ImageView  src={Images.short_right}  imageStyle={styles.homeScreenImage} />
                </TouchableOpacity>
              </TouchableOpacity> */}
                <TouchableOpacity
                  //  disabled
                  style={styles.topContainer}
                  onPress={() =>
                    this.props.navigation.navigate('CommunityCreate')
                  }>
                  <View style={{flexDirection: 'row', paddingVertical: 16}}>
                    <Text style={styles.dayText}>{'Create new community'}</Text>
                  </View>
                  <View style={styles.feedbackImageVerticalLine} />
                  <ImageView
                    src={Images.short_right2x}
                    imageStyle={styles.feedbackImageLeftArrow}
                  />
                </TouchableOpacity>
              </View>
              {/* </View> */}
            </ImageBackground>

            <View style={{flex: 1}}>
              <View style={styles.tabs}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={[styles.homeScreenTab]}
                    onPress={() => {
                      this.onTabClick(1);
                    }}>
                    {Platform.OS === 'ios' ? (
                      <TextInput
                        editable={false}
                        pointerEvents="none"
                        style={[
                          styles.tabTextStyle,
                          this.state.currentTab === 1
                            ? styles.homeScreenbottomLine
                            : null,
                        ]}
                        value={'Social'}
                      />
                    ) : (
                      <Text
                        style={[
                          styles.tabTextStyle,
                          this.state.currentTab === 1
                            ? styles.homeScreenbottomLine
                            : null,
                        ]}>
                        Social
                      </Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[{marginLeft: 5}]}
                    onPress={() => {
                      this.onTabClick(2);
                    }}>
                    {Platform.OS === 'ios' ? (
                      <TextInput
                        editable={false}
                        pointerEvents="none"
                        style={[
                          styles.tabTextStyle,
                          this.state.currentTab === 2
                            ? styles.homeScreenbottomLine
                            : null,
                          ,
                          {marginLeft: 10},
                        ]}
                        value={'Study'}
                      />
                    ) : (
                      <Text
                        //  editable={false}
                        //  pointerEvents="none"

                        style={[
                          styles.tabTextStyle,
                          this.state.currentTab === 2
                            ? styles.homeScreenbottomLine
                            : null,
                          ,
                          {marginLeft: 10},
                        ]}>
                        {' '}
                        Study
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <CategorySelectBottomSheet
                inputStyle={{margin: 10, marginHorizontal: 15}}
                categoryName={'Category'}
                categoryColor={{color: '#B7B7B7'}}
                multipleSelect={true}
                first={true}
                Closed={(data)=>this.CategoryList(data)}
              />
              <View style={{flex: 1, marginTop: 10}}>
               {!this.props.users?.loading ? 
               <>
               <View style={{flexDirection:'row',marginHorizontal:15,justifyContent:'space-around',marginTop: 10}}>
                   
                  <ShimmerPlaceHolder LinearGradient={LinearGradient} style={styles.homeScreenCardImage} />
                
                  
                  
                  <ShimmerPlaceHolder LinearGradient={LinearGradient} style={styles.homeScreenCardImage} />
                 
                  
                  
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
                 <ShimmerPlaceHolder LinearGradient={LinearGradient} style={styles.communityTextSearch} />
                 <ShimmerPlaceHolder LinearGradient={LinearGradient} style={styles.communityTextSearch} />
                 </View>
                 </>
                  :
                 this.state.currentTab === 1 && (
                <>
                  {/* <Communites
                    ProfilesData={this.state.products}
                    categoryEnable={true}
                    navigation={this.props.navigation}
                    homeStyle={styles.homeScreenCard}
                    cardStyle={styles.homeScreenCardImage}
                    colorText={{color: '#b7b7b7'}}
                    topContainer={styles.searchScreenCardContainerTwo}
                  /> */}
                  <CommunitesTemp
                    ProfilesData={this.state.arr[0] == 'View All'? this.props.getCommunity?.data :this.state.arr}
                    categoryEnable={true}
                    SurvivalShow={false}
                    navigation={this.props.navigation}
                    homeStyle={styles.homeScreenCard}
                    cardStyle={styles.homeScreenCardImage}
                    colorText={{color: '#b7b7b7'}}
                    topContainer={styles.searchScreenCardContainerTwo}
                  /> 
                </>
              )}
</View>
{/* <View style={{flex: 1, marginTop: 0}}> */}
              {this.state.currentTab === 2 && (
              //  <View style={{flex: 1, marginTop: 10}}>
               <Communites
                 ProfilesData={this.state.arr[0] == 'View All'? this.props.getCommunity?.data :this.state.arr}
                 categoryEnable={true}
                 SurvivalShow={false}
                 navigation={this.props.navigation}
                 homeStyle={styles.homeScreenCard}
                 cardStyle={styles.homeScreenCardImage}
                 colorText={{color: '#b7b7b7'}}
                 topContainer={styles.searchScreenCardContainerTwo}
               />
              //  {/* <CommunitesTemp
              //    ProfilesData={this.props.getCommunity?.data}
              //    categoryEnable={true}
              //    navigation={this.props.navigation}
              //    homeStyle={styles.homeScreenCard}
              //    cardStyle={styles.homeScreenCardImage}
              //    colorText={{color: '#b7b7b7'}}
              //    topContainer={styles.searchScreenCardContainerTwo}
              //  /> */}

            //  </View>
              )}
  {/* </View> */}

            </View>
          </ScrollView>
        {/* ) : (
          <View style={{justifyContent: 'center', flex: 1}}>
            <Dialog.Loading />
           
          </View>
        )} */}
      </View>
    );
  }
}
function mapStateToProp(state) {
  return {
    users: state.users,
    getCommunity: state.getCommunity,
    getAllJoinedCommunity:state.getAllJoinedCommunity
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(index);
