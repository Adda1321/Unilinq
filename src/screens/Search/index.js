import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ImageView from '../../components/Image';
import {appStyles} from '../../style';
import TextInputWithLeftIcon from '../../components/TextInputWithLeftIcon';
import {Images} from '../../utils';
import Events from '../../components/Events';

import Profiles from '../../components/Profiles';
import CommunitesTemp from '../../components/AllCommunities/allCommunities';
import {Card} from 'react-native-shadow-cards';
import {getAllUsers} from '../../Core/Profile/allProfiles';

import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

import {connect} from 'react-redux';
class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
      communityProducts: this.props.getCommunity?.data,
      copycommunityProducts: this.props.getCommunity?.data,
      eventsProducts: this.props.getEvents?.data,
      copyeventsProducts: this.props.getEvents?.data,

      uploading: false,
      loading: false,
      products: [],
      copyproducts: [],
    

    };
  }
  componentDidMount() {
    getAllUsers(res => {
      this.setState({uploading: true, products: res, copyproducts: res});
    });
  // console.log("DETAILS-------------------------------->" , this.state.products)
  }
  onTabClick = currentTab => {
    this.setState({
      currentTab: currentTab,
    });
  };
  changeText = async text => {
    this.setState({loading: true});
    var arr = [];

    //  setTimeout(()=>{
    // console.log("Dddd=================================>>",this.state.products)
    if (text != '') {
      this.state.products = this.state.copyproducts;
      this.state.communityProducts = this.state.copycommunityProducts;
      this.state.eventsProducts = this.state.copyeventsProducts;
      const filteredProjects = this.state.products.filter(
        project =>
          project.first_name
            .toLowerCase()
            .includes(text.trim().toLowerCase()) ||
          project.last_name.toLowerCase().includes(text.trim().toLowerCase()),
      );

      filteredProjects.length < 1 &&
        ((filteredProjects[0] = 'no user find'),
        console.log(
          'Filtered Projects -----------------------------FILTERED ------------------>',
          filteredProjects,
        ));
      console.log(
        'Filtered Projects -----------------------------Second ------------------>',
        filteredProjects,
      );

      // !filteredProjects ? filteredProjects="no user found"

      const communityFilter = this.state.communityProducts.filter(
        project =>
          project.community_name
            .toLowerCase()
            .includes(text.trim().toLowerCase()) ||
          project.category_id.toLowerCase().includes(text.trim().toLowerCase()),
      );
      const eventFilter = this.state.eventsProducts.filter(
        project =>
          project.event_name
            .toLowerCase()
            .includes(text.trim().toLowerCase()) ||
          project.event_category
            .toLowerCase()
            .includes(text.trim().toLowerCase()),
      );

      this.setState({
        communityProducts: communityFilter,
        products: filteredProjects,
        eventsProducts: eventFilter,
        loading: false,
      });
      //  searchEvents(text,(res3)=>{
      //   this.setState({eventsProducts:res3})
      //    })
      //   search(text,(res)=>{
      //    // arr.push(res)
      //    // this.state.communityProducts = this.state.copycommunityProducts

      //    searchProfiles(text,(res2)=>{
      //     //  searchEvents(text,(res3)=>{
      //        this.setState({communityProducts:res,products:res2, loading:false})
      //     //  })

      //    })

      //  })
    } else {
      //  search(text,(res)=>{
      //    // arr.push(res)
      //    // this.state.communityProducts = this.state.copycommunityProducts

      //    searchProfiles(text,(res2)=>{
      //     searchEvents(text,(res3)=>{
      this.setState({
        communityProducts: this.state.copycommunityProducts,
        products: this.state.copyproducts,
        eventsProducts: this.state.copyeventsProducts,
        loading: false,
      });
      // })
      // })

      //  })
    }
    //  },5000)
  };
  render() {
    return (
      <View style={{backgroundColor: '#f3f3f4', flex: 1}}>
        <View style={[styles.searchScreenContainer]}>
          <View style={styles.searchScreenLeftArrowContainer}>
            <TouchableOpacity
              style={styles.searchUserInnerContainer}
              onPress={() => this.props.navigation.goBack()}>
              <ImageView
                src={require('../../images/short_left.png')}
                imageStyle={styles.searchDetailsShortLeft}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.searchScreenInsertKeyword}>
            <TextInputWithLeftIcon
              inputStyle={[
                appStyles.searchLoginTextBox,
                // email.length ? styles.loginActiveTextBox : styles.loginInActiveTextBox,
                // errors.email || errors.global ? styles.loginErrorTextBox : {}
                ,
              ]}
              textStyle={[
                styles.searchInsertKeywordStyle,
                {alignItems: 'center', color: '#000'},
              ]}
              placeholder="Insert keyword"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              maxLength={25}
              loading={this.state.loading}
              textInputChange={txt => this.changeText(txt)}
            />
          </View>
        </View>
        <View>
          <View style={styles.searchtabs}>
            <View style={styles.searchScreenTabBarContainer}>
              <View style={[styles.searchhomeScreenTab]}>
                <Text
                  onPress={() => {
                    this.onTabClick(1);
                  }}
                  style={[
                    styles.searchtabTextStyle,
                    this.state.currentTab === 1 ? styles.tabUnderline : null,
                  ]}>
                  All
                </Text>
              </View>
              <View style={[styles.searchhomeScreenTab, {marginLeft: 7}]}>
                <Text
                  onPress={() => {
                    this.onTabClick(2);
                  }}
                  style={[
                    styles.searchtabTextStyle,
                    this.state.currentTab === 2 ? styles.tabUnderline : null,
                    ,
                    {marginLeft: 10},
                  ]}>
                  Profiles
                </Text>
              </View>
              <View style={[styles.searchhomeScreenTab, {marginLeft: 7}]}>
                <Text
                  onPress={() => {
                    this.onTabClick(3);
                  }}
                  style={[
                    styles.searchtabTextStyle,
                    this.state.currentTab === 3 ? styles.tabUnderline : null,
                    ,
                    {marginLeft: 10},
                  ]}>
                  Communities
                </Text>
              </View>
              <View style={[styles.searchhomeScreenTab, {marginLeft: 7}]}>
                <Text
                  onPress={() => {
                    this.onTabClick(4);
                  }}
                  style={[
                    styles.searchtabTextStyle,
                    this.state.currentTab === 4 ? styles.tabUnderline : null,
                    ,
                    {marginLeft: 10},
                  ]}>
                  Events
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              marginTop: 5,
            }}
          />

          {/* < CategorySelectBottomSheet /> */}
          {this.state.currentTab === 1 && (
            <View style={[styles.searchhomeScreenCard]}>
              <ScrollView style={{marginBottom: 160}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.searchTextProfile}>Profiles</Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginTop: 30,
                      alignItems: 'center',
                    }}
                    onPress={() => this.setState({currentTab: 2})}>
                    <Text style={styles.searchMoreResultsText}>
                      More results
                    </Text>
                    <ImageView
                      src={require('../../images/short_right2x.png')}
                      imageStyle={styles.searchRightArrow}
                      Color={'#00035c'}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.products[0] != 'no user find' &&
                this.state.products[0] != undefined ? (
                  <Profiles
                    ProfilesData={this.state.products}
                    navigation={this.props.navigation}
                  />
                ) : (
                  (console.log(
                    'p'
                  ),
                
                  this.state.products[0] === 'no user find' ? (
                    <View
                    style={{
                      justifyContent: 'center',
                      height: 100,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[styles.searchTextProfile, {color: '#B7B7B7'}]}>
                      No User Found
                    </Text>
                  </View>
                  ) : (
                    <Card
                      style={[
                        styles.searchScreenhomeScreenCard,
                        {flexDirection: 'column', marginHorizontal: 20},
                      ]}>
                      <View style={[styles.searchScreenCardInnerContainer]}>
                        <View style={[styles.searchScreenCardProfileView]}>
                          <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={[
                              styles.searchScreenProfileImage,
                              // {position: 'absolute'},
                            ]}
                          />
                          <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={[
                              styles.searchScreenUserName,
                              {width: 100, marginTop: 2},
                            ]}
                          />
                          <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={[
                              styles.searchScreenUserCategory,
                              {width: 50, marginTop: 5},
                            ]}
                          />
                        </View>
                      </View>
                    </Card>
                  ))
                )}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 15,
                  }}>
                  <Text
                    style={{
                      color: '#8b86ba',
                      paddingHorizontal: 10,
                      paddingTop: 10,
                      fontFamily: 'Poppins-Bold',
                      fontSize: 14,
                      paddingHorizontal: 21,
                    }}>
                    Communites
                  </Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center',
                    }}
                    onPress={() => this.setState({currentTab: 3})}>
                    <Text style={styles.searchMoreResultsText}>
                      More results
                    </Text>
                    <ImageView
                      src={require('../../images/short_right2x.png')}
                      imageStyle={styles.searchRightArrow}
                      Color={'#00035c'}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.communityProducts[0] != undefined ? (
                  <CommunitesTemp
                    ProfilesData={this.state.communityProducts}
                    categoryEnable={true}
                    navigation={this.props.navigation}
                    homeStyle={styles.homeScreenCard}
                    cardStyle={styles.homeScreenCardImage}
                    colorText={{color: '#00035c'}}
                    topContainer={styles.searchScreenCardContainerTwo}
                  />
                ) : (
                  <View
                    style={{
                      justifyContent: 'center',
                      height: 100,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[styles.searchTextProfile, {color: '#B7B7B7'}]}>
                      No Communites Found
                    </Text>
                  </View>
                )}
                {/* <Communites
                  ProfilesData={this.state.products}
                  categoryEnable={true}
                  navigation={this.props.navigation}
                  homeStyle={styles.homeScreenCard}
                  cardStyle={styles.homeScreenCardImage}
                  colorText={{color: '#00035c'}}
                  topContainer={styles.searchScreenCardContainerTwo}
               /> */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 15,
                    marginHorizontal: 5,
                  }}>
                  <Text
                    style={{
                      color: '#8b86ba',
                      // paddingHorizontal: 10,
                      paddingTop: 10,
                      fontFamily: 'Poppins-Bold',
                      fontSize: 14,
                      paddingHorizontal: 12,
                    }}>
                    Events
                  </Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center',
                    }}
                    onPress={() => this.setState({currentTab: 4})}>
                    <Text style={styles.searchMoreResultsText}>
                      More results
                    </Text>
                    <ImageView
                      src={require('../../images/short_right2x.png')}
                      imageStyle={styles.searchRightArrow}
                      Color={'#00035c'}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.eventsProducts[0] != undefined ? (
                  <Events
                    ProfilesData={this.state.eventsProducts}
                    navigation={this.props.navigation}
                    searchEventsDetailshomeScreenCard={[
                      styles.searchEventsDetailshomeScreenCard,
                    ]}
                    searchDetailshomeScreenCardImage={[
                      styles.searchDetailshomeScreenCardImage,
                    ]}
                    date={false}
                    all={false}
                  />
                ) : (
                  <View
                    style={{
                      justifyContent: 'center',
                      height: 100,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[styles.searchTextProfile, {color: '#B7B7B7'}]}>
                      No Events Found
                    </Text>
                  </View>
                )}
              </ScrollView>
            </View>
          )}

          {this.state.currentTab === 2 && (
            <View style={[styles.searchhomeScreenCard]}>
              <ScrollView style={{marginBottom: 160}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.searchTextProfile}>Profiles</Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginTop: 30,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.searchMoreResultsText}>
                      More results
                    </Text>
                    <ImageView
                      src={require('../../images/short_right2x.png')}
                      imageStyle={styles.searchRightArrow}
                      Color={'#00035c'}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.products[0] != 'no user find' &&
                this.state.products[0] != undefined ?  (
                  <Profiles
                    ProfilesData={this.state.products}
                    navigation={this.props.navigation}
                  />
                ) : (
                 
                
                  this.state.products[0] === 'no user find' && (
                    <View
                    style={{
                      justifyContent: 'center',
                      height: 100,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[styles.searchTextProfile, {color: '#B7B7B7'}]}>
                      No User Found
                    </Text>
                  </View>)
                )}
              </ScrollView>
            </View>
          )}
          {this.state.currentTab === 3 && (
            <View style={[styles.searchhomeScreenCard]}>
              <ScrollView style={{marginBottom: 160}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.searchTextProfile}>Communities</Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginTop: 30,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.searchMoreResultsText}>
                      More results
                    </Text>
                    <ImageView
                      src={require('../../images/short_right2x.png')}
                      imageStyle={styles.searchRightArrow}
                      Color={'#00035c'}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.communityProducts[0] != undefined ? (
                  <CommunitesTemp
                    ProfilesData={this.state.communityProducts}
                    categoryEnable={true}
                    navigation={this.props.navigation}
                    homeStyle={styles.homeScreenCard}
                    cardStyle={styles.homeScreenCardImage}
                    colorText={{color: '#00035c'}}
                    topContainer={styles.searchScreenCardContainerTwo}
                  />
                ) : (
                  <View
                    style={{
                      justifyContent: 'center',
                      height: 100,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[styles.searchTextProfile, {color: '#B7B7B7'}]}>
                      No Communites Found
                    </Text>
                  </View>
                )}
              </ScrollView>
            </View>
          )}
          {this.state.currentTab === 4 && (
            <View style={[styles.searchhomeScreenCard]}>
              <ScrollView style={{marginBottom: 160}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.searchTextProfile}>Events</Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginTop: 30,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.searchMoreResultsText}>
                      More results
                    </Text>
                    <ImageView
                      src={require('../../images/short_right2x.png')}
                      imageStyle={styles.searchRightArrow}
                      Color={'#00035c'}
                    />
                  </TouchableOpacity>
                </View>

                {this.state.eventsProducts[0] != undefined ? (
                  <Events
                    ProfilesData={this.state.eventsProducts}
                    navigation={this.props.navigation}
                    searchEventsDetailshomeScreenCard={[
                      styles.searchEventsDetailshomeScreenCard,
                    ]}
                    searchDetailshomeScreenCardImage={[
                      styles.searchDetailshomeScreenCardImage,
                    ]}
                    date={false}
                    all={false}
                  />
                ) : (
                  <View
                    style={{
                      justifyContent: 'center',
                      height: 100,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[styles.searchTextProfile, {color: '#B7B7B7'}]}>
                      No Events Found
                    </Text>
                  </View>
                )}
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    );
  }
}
function mapStateToProp(state) {
  return {
    users: state.users,
    getCommunity: state.getCommunity,
    getEvents: state.getEvents,
    getAllJoinedCommunity: state.getAllJoinedCommunity,
  };
}
const styles = StyleSheet.create(appStyles);
export default connect(mapStateToProp)(index);
