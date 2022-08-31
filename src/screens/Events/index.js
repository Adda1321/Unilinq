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
import CategorySelectBottomSheet from '../Home/CategorySelectBottomSheet';
const {height, width} = Dimensions.get('window');
const halfWidth = width / 2;
import {connect} from 'react-redux';
import Events from '../../components/Events';
import {signUp, signIn} from '../../Core/Auth/auth';
import {getEvents} from '../../Core/Events/getEvents';
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
      events:[
        {name:"Marni O'Connell",img:Images.ground,category:"Activities"},
        {name:"Josh Pelach", img:Images.boys,category:"Secretary"},
        {name:"Bailey Webb", img:Images.robot,category:"Treasurer"},
        {name:"Georgia",img:Images.lights,category:"Creative & Live Arts"},
        {name:"Bailey Webb",img:Images.ground,category:"Activities"},
        {name:"Georgia",img:Images.boys,category:"Creative & Live Arts"},
        {name:"Marni O'Connell",img:Images.robot,category:"Treasurer"},
        {name:"Marni O'Connell",img:Images.lights,category:"Activities"},
        {name:"Marni O'Connell",img:Images.ground,category:"Activities"},
        {name:"Marni O'Connell",img:Images.boys,category:"Activities"},
        {name:"Marni O'Connell",img:Images.robot,category:"Activities"},
        {name:"Marni O'Connell",img:Images.lights,category:"Activities"},
        {name:"Marni O'Connell",img:Images.ground,category:"Activities"},
        {name:"Marni O'Connell",img:Images.boys,category:"Activities"},
      ],
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
    
   
    const sortedActivities =  this.props.getEvents?.data.sort((a,b) => new Date(a.event_start_date) > new Date(b.event_start_date) ? 1 : -1);
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
     this.props.getEvents?.data.map((item,index)=>{
     
       if(item.event_category.includes(obj[i].txt)){
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
    console.log("id===============",this.props.getEvents)
    return (
      <View style={styles.homeScreenMainContainer}>
        
          <ScrollView contentContainerStyle={styles.homeScreenScrollContainer}>
            {/* <ImageView  src={Images.homeTop}  imageStyle={styles.blackBack}  /> */}
            <ImageBackground
              source={Images.eventsBackground}
              style={styles.eventhomeScreenImageContainer}
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
                        {this.props.users.first_name}
                      </Text>
                    </Text>
                  </View>
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
              <View style={{position: 'absolute', bottom: 20,}}>
                <Text style={styles.joinCommunityText} adjustsFontSizeToFit>
                  Find an event
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
                {/* <TouchableOpacity
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
                </TouchableOpacity> */}
              </View>
              {/* </View> */}
            </ImageBackground>
            <CategorySelectBottomSheet
                inputStyle={{margin: 10, marginHorizontal: 15}}
                categoryName={'Category'}
                categoryColor={{color: '#B7B7B7'}}
                multipleSelect={true}
                first={true}
                Closed={(data)=>this.CategoryList(data)}
              />

          <Events   ProfilesData={this.state.arr[0] == 'View All'? this.props.getEvents?.data :this.state.arr} searchEventsDetailshomeScreenCard={[styles.eventScreenDetailshomeScreenCard]} searchDetailshomeScreenCardImage={[styles.eventScreenDetailshomeScreenCardImage]}  navigation={this.props.navigation}  date={false} all={false}/>
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
    getEvents: state.getEvents,
    getAllJoinedCommunity:state.getAllJoinedCommunity
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(index);
