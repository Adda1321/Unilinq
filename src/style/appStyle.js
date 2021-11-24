import {Dimensions} from 'react-native';
import {Colors, FontSizes, FontFamilies} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const halfWidth = deviceWidth / 2;
const header = deviceWidth - deviceHeight + 30;
const stylesPhone = {
  //Custom Bottom Bar
  TabBarMainContainer: {
    height: 80,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.White,
  },
  customBottomTabMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customBottomTabIconLeftMain: {
    width: '20%',
    padding: 20,
  },
  customBottomTabLeftIcon: {
    backgroundColor: Colors.White,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.Black,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  customBottomTabIconRightMain: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  customBottomTabRightIcon: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    padding: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  TextStyle: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: FontSizes.large,
  },

  //HomeScreen Styles
  homeScreenMainContainer: {
    flex: 1,
    backgroundColor: Colors.light_grey,
  },
  homeScreenScrollContainer: {
    flexGrow: 1,
  },
  blackBack: {
    backgroundColor: 'black',
    height: 0.45 * deviceHeight,
    borderBottomRightRadius: 45,
  },
  topContainer: {
    borderRadius: 10,
    marginHorizontal: 15,
    backgroundColor: Colors.Primary_Color,
    paddingHorizontal: 10,
    paddingVertical: 12,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: deviceWidth - 75,
  },
  landingScreenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  dayText: {
    color: Colors.White,
    fontSize: FontSizes.medium,
    fontFamily: FontFamilies.poppins_bold,
  },
  joinCommunityText: {
    // marginTop:deviceHeight-deviceWidth-250,
    color: Colors.White,
    fontSize: FontSizes.huge,
    // fontWeight:'bold',
    paddingHorizontal: 10,
    marginHorizontal: 7,
    paddingVertical: 0,
    fontFamily: FontFamilies.poppins_semiBold,
  },
  joinCommunityTextTwo: {
    // top:0,
    color: Colors.Black,
    marginTop: 40,
    // marginBottom:200
  },
  joinCommunityTextTwoThree: {
    // top:0,
    marginTop: -10,
    color: Colors.Black,

    // marginBottom:200
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  container: {
    flex: 1,
  },
  text: {
    color: Colors.White,
    fontSize: FontSizes.huge,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
    width: '100%',
    height: 35,
    marginBottom: 10,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginRight: 10,
    alignItems: 'center',
  },

  tabTextStyle: {
    color: '#B7B7B7',
    //    margin:15,
    fontSize: FontSizes.large,
    fontFamily: FontFamilies.poppins_bold,
    //    marginHorizontal:20
  },
  tabUnderline: {
    //   textDecorationLine: 'underline',
    color: Colors.Primary_Color,
  },
  selected: {
    backgroundColor: 'white',
  },
  homeScreenImage: {
    width: 17,
    height: 15,
    alignSelf: 'center',
    marginRight: 5,
  },
  homeScreenTab: {
    marginLeft: 18,
  },
  homeScreenbottomLine: {
    borderBottomColor: Colors.Primary_Color,
    borderBottomWidth: 3,
    color: Colors.Primary_Color,
  },
  homeScreenCard: {
    margin: 11,
    justifyContent: 'center',
    width: halfWidth - 22,
    height: 180,
    backgroundColor: Colors.White,
  },
  homeScreenCardImage: {
    borderRadius: 5,

    width: halfWidth - 22,
    height: 180,
    overflow: 'hidden',
  },
  homeScreenCardView: {
    margin: 10,
    position: 'absolute',
    top: 0,
    // right: 5,
    justifyContent: 'center',
    width: 80,
    height: 27,
    color: Colors.Black,
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    textAlign: 'center',
    fontSize: FontSizes.regular,
    flexDirection: 'row',
    fontFamily: FontFamilies.poppins_semiBold,
  },
  homeScreenCardText: {},
  homeScreenCardTextTwo: {
    margin: 10,

    // right: 5,
    width: 105,
    height: 28,
    color: Colors.White,
    backgroundColor: 'black',
    paddingVertical: 5,

    fontFamily: FontFamilies.poppins_semiBold,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: FontSizes.small,
  },

  //Category Component in Home Screen

  inputComponentStyles: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  inputContainerStyles: {
    borderColor: Colors.Black,
  },

  //TextInput Styles

  loginTextBox: {
    backgroundColor: Colors.White,
    marginHorizontal: 10,
    marginTop: 10,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flexDirection: 'row',
    borderRadius: 4,
  },
  loginInputText: {
    padding: 10,
    // ...font.small,
    color: Colors.Black,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.regular,
    width: '100%',
  },

  //BottomSheet FlatList Styles

  flatListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    alignItems: 'center',
  },
  flatListMain: {
    backgroundColor: Colors.White,
    marginHorizontal: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Grey,
    borderLeftColor: Colors.Grey,
    borderRightColor: Colors.Grey,
    borderTopColor: 'transparent',
  },
  bottomSheetContainer: {
    flex: 1,
  },
  bottomSheetCategoryButton: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  bottomSheetButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSheetButtonText: {
    paddingLeft: 20,
    fontFamily: FontFamilies.poppins_medium,
  },
  bottomSheetIconContainer: {
    flexDirection: 'row',
  },
  bottomSheetIconText: {
    color: '#00035C',
    paddingRight: 10,
    fontFamily: FontFamilies.poppins_medium,
  },
  bottomSheetIcon: {
    width: 12,
    height: 18,
    marginRight: 15,
    marginTop: 2,
  },
  bottomSheetMainStyle: {
    wrapper: {
      backgroundColor: '#00000000',
    },
    bottomSheetTextInputContainer: {
      flex: 1,
      marginBottom: 30,
    },

    bottomSheetFlatList: {
      marginBottom: 15,
      marginLeft: 5,
    },
    draggableIcon: {
      backgroundColor: Colors.Black,
    },
    container: {
      // flex: 8,
      borderRadius: 16,
      backgroundColor: Colors.White.WHITE,
    },
  },

  //Profile Bar Styles

  profilebarMainContainer: {
    flexDirection: 'row',
  },
  profilebarInnerContainer: {
    backgroundColor: Colors.White,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    marginLeft: 15,
    width: 205,
  },
  profilebarButtonContainer: {
    // alignSelf:'flex-end',
    // alignSelf:'center',
    marginHorizontal: 8,
    flexDirection: 'row',

    // alignItems:'space-between'
  },
  profilebarButton: {
    width: 40,
    height: 40,
    backgroundColor: Colors.Black,
    borderRadius: 20,
    justifyContent: 'center',
  },

  profilebarButtonText: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: FontSizes.large,
    fontWeight: 'bold',
  },
  profilebarText: {
    color: Colors.Black,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 7,
    fontFamily: FontFamilies.poppins_regular,
    fontSize: 14,
  },
  profilebarTextT: {
    color: Colors.Black,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 14,
  },
  profilebarSearchImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginLeft: 12,
  },
  profilebarPlusImage: {
    width: 27,
    height: 27,
    alignSelf: 'center',
    marginLeft: 10,
  },
  profilebarMessageImageContainer: {
    backgroundColor: Colors.White,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
  },

  //Profile Screen Styles

  profileContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  profileContainerUpperView: {
    backgroundColor: Colors.White,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderBottomRightRadius: 60,
  },
  profileImageContainer: {
    width: wp('100%'),
    height: hp('32%'),
    marginBottom: 10,
  },
  homeScreenImageContainer: {
    width: wp('100%'),
    height: hp('40%'),
    marginBottom: 40,
  },
  profileTopButtonsContainer: {
    backgroundColor: Colors.White,
    marginTop: 45,
    height: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    width: 150,
    justifyContent: 'center',
  },
  profileTopButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center',
  },
  // profileTopBackImage:{
  //   width:25,height:20
  // },
  profileTopProfileImage: {
    width: 21,
    height: 22,
  },
  profileTopLogoutImage: {
    width: 22,
    height: 22,
    marginRight: 15,
  },
  profileImageLayout: {
    backgroundColor: Colors.Secondary_Color,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: -45,
  },
  profileImageLayoutText: {
    textAlign: 'center',
    color: Colors.White,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.large,
    padding: 10,
  },
  profileUserInfoContainer: {
    alignItems: 'center',
    marginTop: 45,
  },
  profileUserNameText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.large,
  },
  profileUserDescriptionText: {
    color: Colors.Secondary_Color,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.medium_regular,
    textAlign: 'center',
    width: '90%',
  },
  profileEmailContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  profileEmailImage: {
    width: 27,
    height: 20,
  },
  profileEmailText: {
    color: Colors.Grey,
    marginLeft: 10,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.regular,
  },
  profileTextInputContainer: {
    backgroundColor: Colors.White,
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    shadowColor: Colors.Black,
  },
  ProfileTextInputText: {
    //    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //    paddingHorizontal: 20,
    color: Colors.Grey,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.regular,
    marginBottom: -10,
    paddingTop: 5,
  },
  profileUpdateInfoContainer: {
    marginBottom: 15,
    margin: 20,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileUpdateInfoText: {
    color: Colors.Secondary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.regular,
  },
  profileUpdateInfoImage: {
    width: 20,
    height: 15,
    marginHorizontal: 10,
  },

  //Setting Screen Styles
  settingTopButtonsContainer: {
    backgroundColor: Colors.White,
    marginTop: 45,
    height: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    width: 70,
    justifyContent: 'center',
  },
  settingTopButtons: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  profileTopBackImage: {
    width: 25,
    height: 18,
    marginLeft: 30,
  },
  settingTextInputText: {
    //    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //    paddingHorizontal: 20,
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.regular,
    marginBottom: -10,
    paddingTop: 5,
  },
  settingTextInputContainer: {
    backgroundColor: Colors.White,
    width: '90%',
    height: 55,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    shadowColor: Colors.Black,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingTextInputContainerTop: {
    backgroundColor: Colors.White,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    shadowColor: Colors.Black,
  },
  settingScreenContainer: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  settingScreenHeaderTextContainer: {
    padding: 20,
  },
  settingScreenHeaderText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 35,
  },
  settingScreenHorizontalLine: {
    borderBottomColor: '#EfEfEf',
    borderBottomWidth: 1,
    marginTop: 15,
  },
  settingScreenProfileHeader: {
    paddingHorizontal: 20,
  },
  settingScreenProfileText: {
    color: '#E0E0E0',
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 25,
  },
  settingScreenEducationHeader: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  settingScreenEducationHeaderText: {
    color: '#E0E0E0',
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 25,
  },
  settingScreenEducationText: {
    color: Colors.Primary_Color,
    textAlign: 'center',
    fontFamily: FontFamilies.poppins_medium,
    fontSize: 14,
  },
  settingScreenEducationCertificate: {
    color: Colors.Secondary_Color,
    textAlign: 'center',
    fontFamily: FontFamilies.poppins_medium,
    fontSize: 14,
  },
  settingScreenEmailContainer: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 20,
  },
  settingScreenToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  settingScreenToggleContainerText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: 16,
  },
  settingScreenHorizontal: {
    borderBottomColor: '#EfEfEf',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  settingUpdateButtonContainer: {
    backgroundColor: Colors.Primary_Color,
    width: '45%',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  settingUpdateButtonText: {
    color: Colors.White,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 18,
  },
  settingScreenVerticalLine: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.Secondary_Color,
    marginLeft: 10,
  },
  settingScreenRightArrow: {
    width: 22,
    height: 18,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  //Notification Screen Styles

  notificationTopButtonsContainer: {
    backgroundColor: Colors.White,
    marginTop: 45,
    height: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    width: 80,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    shadowColor: Colors.Black,
  },
  notificationContainer: {
    flex: 1,
    backgroundColor: Colors.light_grey,
  },
  notificationHeaderContainer: {
    padding: 20,
  },
  notificationHeaderText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 32,
  },
  notificationContainerList: {
    backgroundColor: Colors.White,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    shadowColor: Colors.Black,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    height: 90,
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  notificationListing: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: '90%',
  },
  notificationListingDot: {
    color: 'red',
  },
  notificationListingText: {
    color: Colors.Black,
    marginLeft: 10,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: 12,
  },
  notificationListingSecond: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
  notificationListingSecondText: {
    color: Colors.Black,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: 12,
  },
  //community Details Screen
  communitybarInnerContainer: {
    backgroundColor: Colors.White,
    width: '20%',
    height: 40,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
  },
  communitybarMainContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  communityDetailsjoinCommunityText: {
    color: Colors.White,
    fontSize: FontSizes.huge,
    // fontWeight:'bold',
    paddingHorizontal: 10,
    marginHorizontal: 15,
    paddingVertical: 0,
    fontFamily: FontFamilies.poppins_semiBold,
  },
  communitytopContainer: {
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.White,
    paddingHorizontal: 3,
    paddingVertical: 5,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: 210,
  },
  communityprofileImageLayout: {
    backgroundColor: Colors.Secondary_Color,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  communitylandingScreenContainer: {
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  communityprofileImageLayoutSecond: {
    backgroundColor: Colors.Secondary_Color,
    width: 30,
    height: 30,
    borderRadius: 15,
    left: -10,
  },
  communityprofileImageLayoutThird: {
    backgroundColor: Colors.Secondary_Color,
    width: 30,
    height: 30,
    borderRadius: 15,
    left: -20,
  },
  joinCommunitytopContainer: {
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.Primary_Color,
    paddingHorizontal: 10,
    height: 50,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: wp('85%'),
    justifyContent: 'center',
  },
  communityButtonlandingScreenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  communityDetailshomeScreenCard: {
    margin: 10,
    borderRadius: 10,
    width: wp('70%'),
    height: deviceWidth - 150,
    backgroundColor: Colors.White,
  },
  communityDetailshomeScreenCardImage: {
    borderRadius: 5,
    width: wp('70%'),
    height: deviceWidth - 150,
    overflow: 'hidden',
  },

  communityDetailshomeScreenCardView: {
    margin: 10,
    position: 'absolute',
    top: 0,
    // right: 5,
    width: 130,
    height: 30,
    color: Colors.Black,
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    textAlign: 'center',
    fontSize: FontSizes.regular,
    flexDirection: 'row',
    fontFamily: FontFamilies.poppins_semiBold,
  },
  communityDetailsdayText: {
    color: Colors.White,
    fontSize: FontSizes.regular,
    fontFamily: FontFamilies.poppins_bold,
  },
  communityDetailshomeScreenImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginRight: 5,
  },
  communityDetailsShortLeft: {
    width: 27,
    height: 22,
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  communityDetailsMembersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -15,
  },
  communityDetailsMembersTextOne: {
    color: '#6f52ed',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: FontSizes.regular,
    textAlign: 'center',
  },
  communityDetailsMembersTextTwo: {
    color: '#6f52ed',
    marginLeft: 5,
    fontFamily: FontFamilies.poppins_regular,
    textAlign: 'center',
  },
  communityDetailsjoinCommunitytopContainer: {
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.Primary_Color,
    paddingHorizontal: 10,
    height: 50,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 15,
    width: deviceWidth - 130,
    justifyContent: 'center',
  },
  communityDetailsShortRightContainer: {
    height: 30,
    width: 1,
    backgroundColor: '#909090',
  },
  communityDetailsAdminInfoContainer: {
    backgroundColor: Colors.White,
    marginTop: 15,
    marginHorizontal: 20,
    width: '85%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.Black,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  communityDetailsInfoInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  communityDetailsCircularImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  communityDetailsAdminInfoTextOne: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.regular,
  },
  communityDetailsAdminInfoTextTwo: {
    color: Colors.Grey,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.small,
    marginTop: -5,
  },
  communityDetailsEmailImage: {
    width: 28,
    height: 22,
    borderRadius: 2,
  },
  communityDetailsShowMoreContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  communityDetailsShowMoreText: {
    color: Colors.Secondary_Color,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.regular,
  },
  communityDetailsEyeImageContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  communityDetailsEyeImage: {
    width: 28,
    height: 21,
  },
  communityDetailsAboutGroupContainer: {
    padding: 10,
    marginHorizontal: 10,
  },
  communityDetailsAboutGroupTextOne: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.larger,
  },
  communityDetailsAboutGroupTextTwo: {
    fontFamily: FontFamilies.poppins_regular,
    fontSize: 14,
    color: '#8b8b8b',
  },
  communityDetailsUpCommingEventText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.larger,
    marginHorizontal: 20,
  },
  communityDetailsCardImageText: {
    color: '#EA434E',
    marginLeft: 5,
    fontSize: FontSizes.medium_regular,
    fontFamily: FontFamilies.poppins_semiBold,
  },
  communityDetailsCardImageTextTwo: {
    color: Colors.Black,
    marginLeft: 5,
    fontSize: FontSizes.medium_regular,
    fontFamily: FontFamilies.poppins_semiBold,
  },
  communityDetailsCardImageDateText: {
    color: Colors.Grey,
    marginHorizontal: 15,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.small,
    marginTop: -4,
  },
  communityDetailsCardDetailsText: {
    color: Colors.Primary_Color,
    marginHorizontal: 15,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.regular,
    marginTop: 0,
  },

  //Search Users Screen

  searchUserInnerContainer: {
    backgroundColor: Colors.White,
    width: '65%',
    height: 40,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  searchDetailsShortLeft: {
    width: 22,
    height: 18,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  searchLoginTextBox: {
    backgroundColor: Colors.White,
    height: 50,
    borderRadius: 10,
    shadowColor: Colors.Black,
    width: '90%',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flexDirection: 'row',
    borderRadius: 4,
  },
  searchBoxInputText: {
    padding: 10,
    // ...font.small,
    color: Colors.Black,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.regular,
    width: '75%',
  },
  searchtabTextStyle: {
    color: '#B7B7B7',
    //    margin:15,
    fontSize: FontSizes.regular,
    fontFamily: FontFamilies.poppins_bold,
    //    marginHorizontal:20
  },
  searchtabs: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    //  borderTopLeftRadius:18,
    //  borderTopRightRadius:18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchhomeScreenTab: {
    // marginLeft:20
  },
  searchhomeScreenCard: {
    margin: 0,
    width: deviceWidth,
    height: deviceHeight-245,

    // backgroundColor: Colors.White,
  },
  searchScreenhomeScreenCard: {
    margin: 10,
    borderRadius: 10,
    width: halfWidth - 20,
    height: 220,
    backgroundColor: Colors.White,
  },
  searchEventsDetailshomeScreenCard: {
    margin: 10,
    borderRadius: 10,
    width: wp('93%'),
    height: deviceWidth - 120,
    backgroundColor: Colors.White,
  },
  searchDetailshomeScreenCardImage: {
    borderRadius: 10,
    width: wp('93%'),
    height: deviceWidth - 120,
    overflow: 'hidden',
  },
  //Create Community Styles
  createCommunityTopButtonsContainer: {
    backgroundColor: Colors.White,
    height: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    width: 70,
    justifyContent: 'center',
  },
  communityCreateTopButtonsContainer: {
    backgroundColor: Colors.White,
    marginTop: 70,
    height: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    width: 70,
    justifyContent: 'center',
  },
  createCommunityImageContainer: {
    width: wp('100%'),
    height: hp('35%'),
    marginBottom: 20,
  },

  //Community New Styles
  communityNewTextInputContainerTop: {
    backgroundColor: Colors.White,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3,

    elevation: 5,
    shadowColor: Colors.Black,
  },

  //Tags Container View
  tagsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Black,
  },
  tagsTextInput: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 0,
    borderRadius: 5,
    marginLeft: -10,
    paddingHorizontal: 5,

    // padding: 3,
  },
  Tag: {
    backgroundColor:Colors.Secondary_Color,
    height: 30,
    marginTop: -20,
  },
  tagText: {
    color: Colors.light_grey,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: 14,
    alignItems: 'center',
    textAlign: 'center',
  },
  //FeedBack Screen Styles.
  feedbackContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  feedbackCrossButton: {
    padding: 20,
    alignItems: 'flex-end',
  },
  feedbackCrossImageView: {
    width: 45,
    height: 45,
    marginHorizontal: 10,
    borderRadius: 25,
  },
  feedbackCourseContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  feedbackInnerCourseContainer: {
    padding: 20,
  },
  feedbackHeaderText: {
    color:Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 30,
  },
  feedbackInnerHeaderText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 16,
  },
  feedbackTextInputContainer: {
    backgroundColor:Colors.White,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    shadowColor: Colors.Black,
    height: 250,
  },
  feedbackTextInputHeader: {
    //    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //    paddingHorizontal: 20,
    color: Colors.Grey,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: 14,
    marginBottom: -10,
    paddingTop: 5,
  },
  feedbackTextInput: {
    fontFamily: FontFamilies.poppins_medium,
  },
  feedbackBottomButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    marginTop: 10,
  },
  feedbackBottomButtonInner: {
    padding: 15,
  },
  feedbackBottomCancelText: {
    color: Colors.Black,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 18,
  },
  feedbackBottomSendContainer: {
    backgroundColor: Colors.Primary_Color,
    width: '45%',
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 52,
  },
  feedbackBottomSendText: {
    color: Colors.White,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 18,
    alignSelf: 'center',
    width: '55%',
  },
  feedbackImageVerticalLine: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.Secondary_Color,
    marginLeft: 10,
  },
  feedbackImageLeftArrow: {
    width: 22,
    height: 18,
    marginHorizontal: 15,
    alignSelf: 'center',
  },

  //Search Screen Styles

  searchScreenContainer: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
  },
  searchScreenLeftArrowContainer: {
    width: '30%',
  },
  searchScreenInsertKeyword: {
    width: '65%',
  },
  searchScreenTabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  searchScreenCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchScreenCardInnerContainer: {
    padding: 20,
  },
  searchScreenCardProfileView: {
    height: 150,
    marginTop: 10,
  },
  searchScreenProfileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  searchScreenUserName: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: 14,
  },
  searchScreenUserCategory: {
    color: Colors.Black,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: 10,
  },
  searchScreenChatContainer: {
    marginHorizontal: -7,
    height: 50,
  },
  searchScreenChatImage: {
    width: 50,
    height: 50,
  },

  //Report Member Screen Styles
  reportMemberContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  reportMemberBackButton: {
    padding: 30,
    alignItems: 'flex-end',
  },
  reportMemberBackImage: {
    width: 45,
    height: 45,
    marginHorizontal: 10,
    borderRadius: 25,
  },
  reportMemberInnerContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  reportMemberHeader: {
    padding: 20,
  },
  reportMemberHeaderText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 32,
  },
  reportMemberCheckboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  reportMembetCheckboxText: {
    color: Colors.Grey,
    fontFamily: FontFamilies.poppins_medium,
    marginLeft: 5,
    textAlign: 'center',
  },
  reportMemberCheckboxContainerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  reportMemberUploadImageContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.White,
    alignItems: 'center',
    paddingLeft: 20,
    height: 70,
    marginTop: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    shadowColor: Colors.Black,
    justifyContent: 'space-between',
  },
  reportMemberImageInnerContainer: {
    flexDirection: 'row',
  },
  reportMemberUploadTextContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  reportMemberUploadTextOne: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: 12,
  },
  reportMemberUploadTextTwo: {
    color: Colors.Grey,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: 10,
  },
  reportMemberUploadIcon: {
    width: 60,
    height: 60,
  },
  reportMemberMessageInputContainer: {
    backgroundColor: Colors.White,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    shadowColor: Colors.Black,
    height: 250,
  },
  reportMemberMessageText: {
    //    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //    paddingHorizontal: 20,
    color: Colors.Grey,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: 14,
    marginBottom: -10,
    paddingTop: 5,
  },
  reportMemberMessageInput: {
    fontFamily: FontFamilies.poppins_medium,
    textAlignVertical: 'top',
    marginTop: 5,
  },
  reportMemberSendContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    marginTop: 10,
  },
  reportMemberSendInnerContainer: {
    backgroundColor: Colors.Primary_Color,
    width: '45%',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  reportMemberSendText: {
    color: Colors.White,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 18,
  },
  reportMemberRightArrow: {
    width: 22,
    height: 18,
    marginHorizontal: 10,
    alignSelf: 'center',
  },

  //Account Closure Screen Styles
  accountClosureflatListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    alignItems: 'center',
    marginLeft: 20,
  },
  accountClosureflatListMain: {
    backgroundColor: Colors.White,
    marginHorizontal: 10,
    borderBottomColor: Colors.Grey,
    borderLeftColor: Colors.Grey,
    borderRightColor: Colors.Grey,
    borderTopColor: 'transparent',
  },

  //UserProfile Screen Styles

  userProfileChatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileChatIcon: {
    width: 40,
    height: 40,
  },
  userProfileChatText: {
    color: Colors.Grey,
    fontFamily: FontFamilies.poppins_semiBold,
  },
  userProfileCommunityContainer: {
    marginVertical: 10,
    backgroundColor: Colors.White,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3,

    elevation: 5,
    shadowColor:Colors.Black,
    width: '90%',
    height: 130,
    padding: 15,
  },
  userProfileCommunityHeaderText: {
    color: Colors.Grey,
    fontFamily: FontFamilies.poppins_medium,
  },
  userProfileCommunityList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userProfileCommunityListContainer: {
    backgroundColor: Colors.Primary_Color,
    marginHorizontal: 3,
    marginVertical: 4,
    borderRadius: 15,
  },
  userProfileCommunityListText: {
    color: Colors.light_grey,
    padding: 5,
    textAlign: 'center',
    marginHorizontal: 5,
    fontFamily: FontFamilies.poppins_medium,
  },
  userProfileCommunityButton: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3,

    elevation: 5,
    shadowColor: Colors.Black,
    width: '90%',
    height: 50,
    marginVertical: 30,
    justifyContent: 'center',
  },
  userProfileCommunityButtonText: {
    color: Colors.Primary_Color,
    textAlign: 'center',
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 16,
  },

  //SettingsScreen Styles
};

export default stylesPhone;
