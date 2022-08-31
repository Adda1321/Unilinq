import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  ImageBackground,
  PixelRatio,
  TextInput,
  Platform,
  ActivityIndicator,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {appStyles} from '../../style';
import ImageView from '../../components/Image';
import {FontFamilies, Images} from '../../utils';
import * as _ from 'lodash';

const {height, width} = Dimensions.get('window');
const halfWidth = width / 2;
import {connect} from 'react-redux';

import {getCommunity} from '../../Core/Communities/getCommunity';

import {
 
  widthPercentageToDP,
} from 'react-native-responsive-screen';


const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 1,
      loading: false,
      imageLoad: false,
      loading: false,

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
          category: 'Creative Arts ',
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
      communites: [],
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
      CardList: [
     {
       DP:Images.firstPerson,
       Name:"Marni O'Collen",
       Designation:"Activities",
     },
     {
      DP:Images.firstPerson,
      Name:"Josh Pelach",
      Designation:"Secretary",
    },
    {
      DP:Images.firstPerson,
      Name:"Bailey Webb",
      Designation:"Treasurer",
    },
    {
      DP:Images.firstPerson,
      Name:"Georgia",
      Designation:"Creative and Live Art",
    },
    {
      DP:Images.firstPerson,
      Name:"Nicolas",
      Designation:"Disabilitys & Carers",
    },
    {
      DP:Images.firstPerson,
      Name:"Tiana",
      Designation:"Environment and Social Justice",
    },
  
      ],
    };
  }

  async componentDidMount() {
    // const chunkedElements = _.chunk(this.state.products, 10)
    // screenHeight * elemHeight / 100
    // await signUp('squaredlogics@gmail.com','password','Anders','Chow','https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg','Bacholer Student','BBA','Fast Lahore',this.props.dispatch)
    // await  getAllJoinedCommunity(auth().currentUser.uid,this.props.dispatch)
    await getCommunity(this.props.dispatch);
    //  console.log("id===============",this.props.getAllJoinedCommunity)

    this.setState({loading: true});
    let pixels = 32;
    let response = (pixels * 100) / height;

    //  let pixels =205
    //  let response = (pixels*100)/width
    //  console.log("DataFontwidth=====>",response)
  }
  checkNotification = () => {};
  navigateApp = index => {};
  onTabClick = currentTab => {
    this.setState({
      currentTab: currentTab,
    });
  };




  CardItems = (item, index) => {
    return (
      <View
      style={[
        styles.communityDetailsAdminInfoContainer,
        {width:"46%"  , marginHorizontal: 0 ,height:widthPercentageToDP("50%"),flexDirection:'column',alignItems:'flex-start'},
      ]}>
      <View
      //  style={{backgroundColor:"pink"}}
      >
        <TouchableOpacity
        // onPress={() =>
        //   navigation.navigate('UserScreen', {data: userdata})
        // }
        >
          {!this.state.imageLoad && !this.state.loading && (
            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              style={[
                styles.communityDetailsCircularImage,
                {position: 'absolute'},
              ]}
            />
          )}
          <ImageView
            src={this.state.CardList[0].DP}
            imageStyle={[styles.communityDetailsCircularImage,{marginBottom:10}]}
            // onLoadStart={() => setImageLoad(false)}
            // onLoadEnd={() => setImageLoad(true)}
          />
        </TouchableOpacity>
        <>
          {!this.state.loading && (
            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              style={[
                styles.communityDetailsAdminInfoTextOne,
                {position: 'absolute'},
              ]}
            />
          )}
          <Text style={[styles.communityDetailsAdminInfoTextOne,{width:"100%",fontSize:14 , fontFamily: FontFamilies.poppins_bold}]}>
            {/* {userdata?.first_name} {userdata?.last_name} */}
            {item.Name}
          </Text>
          <Text style={[styles.communityDetailsAdminInfoTextTwo,{color:"#000",fontSize:10 , fontFamily: FontFamilies.poppins_bold}]}>
           {item.Designation}
          </Text>
        </>
      </View>
      {/* <Text style={{color:"#000"}}>asd.....</Text> */}

      {/* <ImageView src={Images.email} imageStyle={styles.communityDetailsEmailImage} /> */}
      <View style={{marginBottom:12}}>

      <ImageView
        src={Images.email}
        imageStyle={[styles.profileEmailImage]}
        />
        </View>


    </View>
    )}
  render() {
    // console.log('pppp=======================>', this.props.users);
    return (
      <View style={[styles.homeScreenMainContainer, {marginBottom:10}]}>
        <ScrollView
          contentContainerStyle={[
            styles.homeScreenScrollContainer,
            {backgroundColor: '#F3F3F4'},
          ]}>
          {/* <ImageView  src={Images.homeTop}  imageStyle={styles.blackBack}  /> */}
          <ImageBackground
            source={Images.StaffRep}
            style={styles.homeScreenImageContainer}
            resizeMode="cover"
            imageStyle={{borderBottomRightRadius: 60}}>
            <View style={styles.joinCommunityTextTwo}>
              <View style={styles.profilebarMainContainer}>
                <View style={styles.profilebarInnerContainer}>
                  <View style={styles.profilebarButtonContainer}>
                    {!this.props.users?.loading ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                        }}>
                        <View>
                          <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={{width: 40, height: 40, borderRadius: 25}}
                          />
                        </View>
                        <ShimmerPlaceHolder
                          LinearGradient={LinearGradient}
                          style={{width: '50%'}}
                        />
                      </View>
                    ) : (
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
                            disabled={true}
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
                    )}
                  </View>
                </View>

                {!this.props.users?.loading ? (
                  <ShimmerPlaceHolder
                    LinearGradient={LinearGradient}
                    style={styles.profilebarMessageImageContainer}
                  />
                ) : (
                  <TouchableOpacity
                    disabled={
                      this.props.getAllJoinedCommunity?.data == undefined
                        ? true
                        : this.props.getAllJoinedCommunity?.data?.length == 0
                        ? true
                        : false
                    }
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
                )}
                
              </View>
              <View style={styles.joinCommunityTextTwoThree}>
             <View style={styles.communitybarMainContainer}>
              <TouchableOpacity style={styles.communitybarInnerContainer} onPress={()=>this.props.navigation.goBack()}>
              <ImageView src={require('../../images/short_left.png')} imageStyle={styles.communityDetailsShortLeft}  />       
                </TouchableOpacity>
               </View>
             </View>
            </View>
            
            <View style={{position: 'absolute', bottom: -28}}>
              <Text style={styles.joinCommunityText} adjustsFontSizeToFit>
                Staff Reps
              </Text>

              {/* //////////// PROFILE CARD ///////////// */}

              <View
                style={[
                  styles.communityDetailsAdminInfoContainer,
                  {width: '84%' , 
                  marginHorizontal: 15},
                ]}>
                <View style={styles.communityDetailsInfoInnerContainer}>
                  <TouchableOpacity
                  // onPress={() =>
                  //   navigation.navigate('UserScreen', {data: userdata})
                  // }
                  >
                    {!this.state.imageLoad && !this.state.loading && (
                      <ShimmerPlaceHolder
                        LinearGradient={LinearGradient}
                        style={[
                          styles.communityDetailsCircularImage,
                          {position: 'absolute'},
                        ]}
                      />
                    )}
                    <ImageView
                      src={Images.firstPerson}
                      imageStyle={styles.communityDetailsCircularImage}
                      // onLoadStart={() => setImageLoad(false)}
                      // onLoadEnd={() => setImageLoad(true)}
                    />
                  </TouchableOpacity>
                  <View style={{marginLeft: 10}}>
                    {!this.state.loading && (
                      <ShimmerPlaceHolder
                        LinearGradient={LinearGradient}
                        style={[
                          styles.communityDetailsAdminInfoTextOne,
                          {position: 'absolute'},
                        ]}
                      />
                    )}
                    <Text style={[styles.communityDetailsAdminInfoTextOne,{width:"100%"}]}>
                      {/* {userdata?.first_name} {userdata?.last_name} */}
                      Random Name
                    </Text>
                    <Text style={styles.communityDetailsAdminInfoTextTwo}>
                      Group Admin
                    </Text>
                  </View>
                </View>
                {/* <ImageView src={Images.email} imageStyle={styles.communityDetailsEmailImage} /> */}
                <ImageView
                  src={Images.email}
                  imageStyle={styles.profileEmailImage}
                />
              </View>

              {/* //////////// PROFILE CARD END ///////////// */}
            </View>
            {/* </View> */}
          </ImageBackground>

          <View style={{marginHorizontal: 15}}>
            <Text
              style={{
                color: '#00035C',
                fontFamily: FontFamilies.poppins_bold,
                lineHeight: 28,
                fontSize: 20,
                marginVertical: 30,
              }}>
              We are a Vital channel of communication between the college and
              students.
            </Text>
            <Text
              style={{
                color: '#8B8B8B',
                fontFamily: FontFamilies.poppins_regular,
                lineHeight: 28,
                fontSize: 16,
              }}>
              Representing, communicating and giving feedback on college and
              student matters.
            </Text>

            <Text
              style={[
                styles.communityDetailsUpCommingEventText,
                {color: '#E0E0E0', marginHorizontal: 0},
              ]}>
            Other members
            </Text>
            {/* //////////////////////////// MULTIPLE CARDS ////////////////////////////////// */}


              {/* //////////////////////////// MULTIPLE CARDS END////////////////////////////////// */}
             
            {/* <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={this.state.CardList}
          renderItem={this.CardItems}
        />
         */}
          </View>
          <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',marginHorizontal:10 , marginBottom:2}}>
              {this.state.CardList.map((item,index)=>(
                
           this.CardItems(item, index)
         
              ))}
                 </View>
        </ScrollView>
      </View>
    );
  }
}
function mapStateToProp(state) {
  return {
    users: state.users,
    getCommunity: state.getCommunity,
    getAllJoinedCommunity: state.getAllJoinedCommunity,
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(index);
