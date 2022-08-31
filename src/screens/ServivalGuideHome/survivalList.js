import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,

  Platform,
 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {CheckBox} from 'react-native-elements';
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

import CommunitesTemp from '../../components/Communitestemp'; //delete later

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';


const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check: true,
      currentTab: 1,
      loading: false,
      rowsToDisplay: 4,
      checkBox: [
        {checkname: 'Confirm your timetable'},
        {checkname: 'Academic integrity module'},
        {checkname: 'Check consent Matters'},
        {checkname: "Check if you're eligible for credit"},
        {checkname: 'Manager your student account'},
      ],
      
      communites: [],
      expanded: false,
    };
    
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    let checkBoxLength = this.state.checkBox.length;
    this.state.rowsToDisplay === 4
      ? this.setState({rowsToDisplay: checkBoxLength, expanded: true})
      : this.setState({rowsToDisplay: 4, expanded: false});
      
      console.log("EXPANDED ================================================>>>>>>>>>>>>>...", this.state.expanded)
      
      console.log("ROWS TO DISPLAY ================================================>>>>>>>>>>>>>...", this.state.rowsToDisplay)
    // show more entries
    // switch to "show less"
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

  render() {
    // console.log('pppp=======================>', this.props.users);
    return (
      <View style={styles.homeScreenMainContainer}>
        <ScrollView
          contentContainerStyle={[
            styles.homeScreenScrollContainer,
            {backgroundColor: '#F3F3F4'},
          ]}>
          {/* <ImageView  src={Images.homeTop}  imageStyle={styles.blackBack}  /> */}
          <ImageBackground
          // source={Images.homeTop}
          // style={styles.homeScreenImageContainer}
          // resizeMode="cover"
          // imageStyle={{borderBottomRightRadius: 60}}
          >
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
            
            {/* </View> */}
          </ImageBackground>
          <View style={{bottom: -28}}>
            <Text
              style={[
                styles.joinCommunityText,
                {color: '#00035C', marginBottom: 40},
              ]}>
              Survival Guide
            </Text>
          </View>
          {/* <View style={{backgroundColor:"#fff"}}> */}
          {/* <Carousel navigation={this.props.navigation} /> */}

          <Text
            style={{
              color: '#E0E0E0',
              fontFamily: FontFamilies.poppins_bold,
              fontSize: 28,
              marginTop: 10,
              marginHorizontal: 18,
            }}>
            To do List
          </Text>
         {/* ///////////////////////////////////// CHECK LIST//////////////////////// */}
          <View
            style={{
              backgroundColor: '#fff',
              // width: '90%',
              paddingHorizontal: 20,
              paddingVertical: 5,
              marginVertical: 15,
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.29,
              shadowRadius: 4.65,
              marginHorizontal: 15,
              elevation: 7,
              shadowColor: '#000',
              // height: 250,
            }}>
            {this.state.checkBox
              .slice(0, this.state.rowsToDisplay)
              .map(product => (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      // backgroundColor:"red",

                      marginBottom: -20,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View>
                        <CheckBox
                          center
                          size={30}
                          checked={!this.state.check}
                          type="material-community"
                          containerStyle={{
                            backgroundColor: 'transparent',
                            // paddingTop: 15,
                            marginLeft: -7,
                          }}
                          onPress={() => {
                            this.setState({check: !this.state.check});
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          color: '#8B86BA',
                          fontWeight: '600',
                          fontSize: 16,
                          marginHorizontal: -16,
                          paddingHorizontal: 0,
                          // backgroundColor: 'pink',
                        }}>
                        {product.checkname}
                      </Text>
                    </View>
                    <View>
                      <ImageView
                        src={Images.ReDirect3}
                        imageStyle={{
                          backgroundColor: 'transparent',
                          width: 20,
                          height: 20,
                        }}
                      />
                    </View>
                  </View>
                </>
              ))}

            <TouchableOpacity
              onPress={this.showMore}
              style={{paddingVertical: 15}}>
              <View
                style={[
                  styles.communityDetailsEyeImageContainer,
                  {backgroundColor: 'transparent', marginTop: 15},
                ]}>
                <ImageView
                  src={Images.eye}
                  imageStyle={styles.communityDetailsEyeImage}
                />
              </View>

              <View
                style={[
                  styles.communityDetailsShowMoreContainer,
                  {backgroundColor: 'transparent', marginTop: 10},
                ]}>
                <Text style={styles.communityDetailsShowMoreText}>
                  {this.state.expanded ? (
                    <Text> Show less </Text>
                  ) : ( 
                    <Text> Show more </Text>
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* ////////////////////////////////////// CHECK LIST END /////////////////////////// */}

          {/* ///////////////////////////// COMMUNITY CAROUSAL ///////////////////////// */}
          <View >
            <Text
              style={{
                color: '#E0E0E0',
                fontFamily: FontFamilies.poppins_bold,
                fontSize: 28,
                marginTop: 30,
                marginVertical:8,
                marginHorizontal:15,
              }}>
              Join a community
            </Text>

            <ScrollView horizontal contentContainerStyle={{marginBottom:15}} showsHorizontalScrollIndicator={false}>
            {!this.props.users?.loading && (
                  <ShimmerPlaceHolder
                    LinearGradient={LinearGradient}
                    style={styles.homeScreenCardSurvival}
                  />
                )} 
            <CommunitesTemp
                    ProfilesData={this.props.getCommunity?.data}
                    categoryEnable={true}
                    navigation={this.props.navigation}
                    homeStyle={styles.survivalhomeScreenCardSurvival}
                    cardStyle={styles.homeScreenCardImageSurvival}
                    colorText={{color: '#00035c',paddingLeft:10,paddingTop:5}}
                    topContainer={styles.survivalsearchScreenCardContainerTwo}
                  />
           </ScrollView>

            {/* ///////////////////////////// COMMUNITY CAROUSAL END ///////////////////////// */}
          </View>

          
          {/* ///////////////////////////// BOTTOM QUESTION //////////////////////////////////// */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginVertical: 20,
              alignItems: 'center',
              
              
              backgroundColor: '#F3F3F4',
              // backgroundColor:"red",

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.1,
              shadowRadius: 4.65,

              elevation: 6,
            }}>
            <TouchableOpacity
              style={[
                styles.communityDetailsjoinCommunitytopContainer,
                {
                  backgroundColor: '#fff',
                  marginVertical: -15,
                  width: widthPercentageToDP('70%'),
                  // paddingTop:10,
                  marginTop:0,
                },
              ]}
              onPress={() => this.props.navigation.navigate('stafRef')}
              // onPress={() => communityJoin()}
            >
              <View
                style={[
                  styles.survivalcommunityButtonlandingScreenContainer,
                  {
                    width: '100%',
                  },
                ]}>
                <Text
                  style={[
                    styles.communityDetailsdayText,
                    {
                      color: '#00035c',

                      width: widthPercentageToDP('45%'),
                      marginLeft: 15,
                      // fontSize:14,
                    },
                  ]}>
                  Talk to your staff reps
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '25%',
                    justifyContent: 'space-evenly',
                  }}>
                  <View
                    style={{height: 60, width: 1, backgroundColor: '#efefef'}}
                  />
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <ImageView
                      src={Images.short_right}
                      imageStyle={[
                        styles.homeScreenImage,
                        {
                          alignSelf: 'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                      ]}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <ImageView
              src={Images.question}
              imageStyle={[styles.survivalcommunityDetailshomeScreenImage,{marginTop:20,marginVertical:10}]}
            />
          </View>
          {/* ///////////////////////////// BOTTOM QUESTION //////////////////////////////////// */}
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
    getAllJoinedCommunity: state.getAllJoinedCommunity,
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(index);
