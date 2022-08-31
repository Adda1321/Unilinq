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
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {appStyles} from '../../style';
import ImageView from '../../components/Image';
import {Images} from '../../utils';
import * as _ from 'lodash';
import {Card} from 'react-native-shadow-cards';
// import CategorySelectBottomSheet from './CategorySelectBottomSheet';
const {height, width} = Dimensions.get('window');
const halfWidth = width / 2;
import {connect} from 'react-redux';
import {signUp, signIn} from '../../Core/Auth/auth';
import {getCommunity} from '../../Core/Communities/getCommunity';
import {getAllJoinedCommunity} from '../../Core/Communities/getAllJoinedCommunities';
import Communites from '../../components/Communites';
import {Dialog} from 'react-native-elements';
import CommunitesTemp from '../../components/Communitestemp'; //delete later
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Events from '../../components/Events';
import AsyncStorage from '@react-native-community/async-storage';
import {cond} from 'lodash';
import {getAllJoinedEvents} from '../../Core/Events/getAlljoinedEvents';
import {auth} from '../../Core/config/config';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 1,
      loading: false,
      events: [],

      communites: [],
    };
  }

  async componentDidMount() {
    // const chunkedElements = _.chunk(this.state.products, 10)
    // screenHeight * elemHeight / 100
    // await signUp('squaredlogics@gmail.com','password','Anders','Chow','https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg','Bacholer Student','BBA','Fast Lahore',this.props.dispatch)
    // await  getAllJoinedCommunity(auth().currentUser.uid,this.props.dispatch)
    await getAllJoinedEvents(auth()?.currentUser?.uid, res => { 
      
      this.setState({events: [], loading: false});
      var aar = res;
      // const sortedActivities ;
      if (Platform.OS === 'ios') {
        const sortedActivities = aar?.sort((a, b) =>
          new Date(a.event_start_date) > new Date(b.event_start_date) ? 1 : -1,
        );
      } else {
        const sortedActivities = aar?.sort((a, b) =>
          new Date(moment(a.event_start_date, 'MM/DD/YYYY')) >
          new Date(moment(b.event_start_date, 'MM/DD/YYYY'))
            ? 1
            : -1,
        );
      }

      this.setState({events: res, loading: true});
    });

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
    //  console.log("pppp=======================>", this.state.events)
    return (
      <View style={styles.homeScreenMainContainer}>
        <ScrollView contentContainerStyle={styles.homeScreenScrollContainer}>
          {/* <ImageView  src={Images.homeTop}  imageStyle={styles.blackBack}  /> */}
          <View style={styles.joinCommunityTextTwo}>
            <View style={styles.profilebarMainContainer}>
              <View style={styles.profilebarInnerContainer}>
                <View style={styles.profilebarButtonContainer}>
                  {!this.props?.users?.loading ? (
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
                          {this.props?.users?.first_name?.charAt(0)}
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
                          <Text style={styles.profilebarText}>Hi </Text>
                          <Text style={[styles.profilebarTextT]}>
                            {this.props?.users?.first_name}
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
          </View>

          <View style={{marginHorizontal: 20, marginTop: 90}}>
            <Text style={styles.createCommunityTextHeader}>My Events</Text>
          </View>
          <View style={{marginHorizontal: 20, marginTop: 20}}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 28,
                color: '#b7b7b7',
              }}>
              Coming Up
            </Text>
          </View>
          {/* <View
style={{
borderBottomColor: '#b7b7b7',
width:width,
borderBottomWidth: 1,
alignSelf:'center',
marginTop:15,

}}
/>    */}
          {/* {console.log(" EVENT ---------------------------------------------------------------????>>",this.state.events,this.state.events === " " ? "true" : "False")} */}
          {!this.state.loading ? (
            <>
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={styles.eventScreenDetailshomeScreenCard}
              />
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={styles.eventScreenDetailshomeScreenCard}
              />
            </>
          ) : (
            <Events
              ProfilesData={this.state.events}
              searchEventsDetailshomeScreenCard={[
                styles.eventScreenDetailshomeScreenCard,
              ]}
              searchDetailshomeScreenCardImage={[
                styles.eventScreenDetailshomeScreenCardImage,
              ]}
              navigation={this.props.navigation}
              date={true}
              all={true}
            />
          )}
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
