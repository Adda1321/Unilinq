import {Dimensions, PixelRatio,Platform} from 'react-native';
import {Colors, FontSizes, FontFamilies, FontWeights} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const fontScale = Dimensions.get('window').fontScale;
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
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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
  // backgroundColor: Colors.Primary_Color,
  //   width: '45%',
  //   borderRadius: 10,
  //   paddingHorizontal: 15,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   height: 52,
  topContainer: {
    backgroundColor: Colors.Primary_Color,
    width: wp('75%'),
    borderRadius: 10,
    paddingHorizontal: 15,
    // paddingLeft:15
  
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
    // height: wp('15%'),
    // padding:10,
    // height:55,
    marginHorizontal: 15,
  },
  landingScreenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  dayText: {
    // justifyContent:'center',
    // color: Colors.White,
    // fontSize: FontSizes.medium,
    // fontFamily: FontFamilies.poppins_bold,
    color: Colors.White,
    fontFamily: FontFamilies.poppins_bold,
    fontSize:FontSizes.large_medium,
    // alignSelf: 'center',
    paddingLeft:10,
    letterSpacing:-1,
    lineHeight:24,
    // fontWeight:FontWeights.weightLarge,
    //  backgroundColor:'red'
    // marginTop:-2
    // paddingBottom:'0.8%',
    // width: '100%',
    // width: '80%',
  },
  joinCommunityText: {
    // marginTop:deviceHeight-deviceWidth-250,
    color: Colors.White,
    fontSize: 36,
    // fontWeight:'bold',
    paddingHorizontal: 10,
    marginHorizontal: 7,
    marginVertical:4,
    letterSpacing:-1.3,
    lineHeight:48,
     marginBottom:10,
    // fontWeight:FontWeights.weightLarge,
    fontFamily: FontFamilies.poppins_bold,
  },
  joinCommunityTextTwo: {
    // top:0,
    color: Colors.Black,
    marginTop: Platform.OS === 'ios' ? 60: 50,
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
    height: hp('4.3%'),
    marginTop:Platform.OS === 'ios' ? 10: 10,
    marginBottom: Platform.OS ==='ios'?10: 12,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginRight: 10,
    alignItems: 'center',
  },

  tabTextStyle: {
    color: '#B7B7B7',
       marginTop:-5,
    // fontWeight:'bold',
    fontSize: FontSizes.large,
    fontFamily: FontFamilies.poppins_bold,
    lineHeight:28,
    // marginTop:hp('1%'),
    letterSpacing:-1.2
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
    width: 19,
    height: 15,
    justifyContent:'center',
    marginHorizontal:10,
    
    
    // marginRight: 5,
  },
  homeScreenTab: {
    marginLeft: 18,
  },
  homeScreenbottomLine: {
    borderBottomColor: Colors.Primary_Color,
    borderBottomWidth: wp('1%'),
    // marginTop:-3,
    color: Colors.Primary_Color,
  },
  homeScreenCard: {
    
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    width: halfWidth - 25,
    // marginBottom:19
    // marginLeft:2
    // height: hp('25%'),
    // backgroundColor: Colors.light_grey,
  },
  homeScreenCardImage: {
    borderRadius: 10,
    // marginHorizontal:20,
    width: halfWidth - 25,
    height: halfWidth-10,
    overflow: 'hidden',
  },
  homeScreenCardSurvival: {
    
    margin: 10,
    borderRadius: 15,
    marginHorizontal:15,
    justifyContent: 'center',
    width: halfWidth + 50,
    // marginLeft:2
    // height: hp('25%'),
    // backgroundColor: Colors.light_grey,
  },
  survivalhomeScreenCardSurvival: {
    
    margin: 10,
    borderRadius: 15,
    marginHorizontal:15,
    justifyContent: 'center',
    width: halfWidth + 50,
    // marginLeft:2
    // height: hp('25%'),
    // backgroundColor: Colors.light_grey,
  },
  homeScreenCardImageSurvival: {
    borderRadius: 10,
   
    width: halfWidth +50,
    height: halfWidth +90,
    overflow: 'hidden',
  },
  searchCardhomeScreenCard: {
    margin: 11,
    marginHorizontal:5,
    borderRadius: 15,
    justifyContent: 'center',
    width: halfWidth - 28,
    // marginLeft:13
    // height: hp('25%'),
    // backgroundColor: Colors.light_grey,
  },
  searchCardhomeScreenCardTwo: {
    margin: 11,
    marginHorizontal:8,
    borderRadius: 15,
    justifyContent: 'center',
    width: halfWidth - 29,
    // marginLeft:13
    // height: hp('25%'),
    // backgroundColor: Colors.light_grey,
  },
  communityTextSearch:{
    marginHorizontal: 15,
    width: halfWidth-35,
    marginBottom:20,
    // fontWeight:FontWeights.weightsmallLarge,
    fontFamily: 'Poppins-SemiBold',
    fontSize: FontSizes.regular,
    marginTop: -4,
    lineHeight:20
  },
  searchCardhomeScreenCardImage: {
    borderRadius: 10,
    // marginHorizontal:20,
    width: halfWidth - 22,
    height: halfWidth,
    overflow: 'hidden',
  },
  searchCardhomeScreenCardImageTwo: {
    borderRadius: 10,
    // marginHorizontal:20,
    width: halfWidth - 29,
    height: halfWidth-10,
    overflow: 'hidden',
  },
  homeScreenCardView: {
    margin: 13,
    position: 'absolute',
    top: 0,
    // right: 5,
    justifyContent: 'center',
    width: wp('21%'),
    height: 27,
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    textAlign: 'center',
 
    flexDirection: 'row',
    
  },
  comhomeScreenCardView: {
    margin: 13,
    position: 'absolute',
    bottom: 0,
    // right: 5,
    justifyContent: 'center',
    // width: wp('22%'),
    paddingHorizontal:15,
    height: 27,
    backgroundColor: 'black',
    // padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
   
    flexDirection: 'row',
    
  },
  homeScreenCardText: {},
  homeScreenCardTextTwo: {
    marginHorizontal: 10,
    marginVertical:15,
    // right: 5,
    width: wp('30%'),
    height: 28,
    color: Colors.White,
    backgroundColor: 'black',
    // paddingVertical: 5,
    // marginTop:5,
    fontFamily: FontFamilies.poppins_semiBold,
    borderRadius: 20,
    // paddingTop:2,
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
    // marginHorizontal: 10,
    // marginTop: -20,
    height: hp('6.5%'),
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom:Platform.OS ==='ios' ? 10:0,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.10 : 0.15,
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
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  bottomSheetButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSheetButtonText: {
    paddingLeft: 20,
    textAlignVertical:'center',
    // backgroundColor:'red',
    paddingVertical:16,
    lineHeight:24,
    fontFamily: FontFamilies.poppins_medium,
    fontSize:FontSizes.regular,
    // fontWeight:FontWeights.weightsmallLarge
  },
  checkbottomSheetButtonText: {
    // paddingLeft: 20,
    // textAlignVertical:'center',
    // // backgroundColor:'red',
    // paddingVertical:16,
    // marginVertical:10,
    color:'#fff',
    textAlign:'center',
    paddingHorizontal:10,
    // lineHeight:24,
    fontFamily: FontFamilies.poppins_medium,
    fontSize:FontSizes.small_regular,
    // fontWeight:FontWeights.weightsmallLarge
  },
  bottomSheetIconContainer: {
    flexDirection: 'row',
  },
  bottomSheetIconText: {
    color: '#00035C',
    // paddingRight: 10,
    fontFamily: FontFamilies.poppins_medium,
  },
  bottomSheetIcon: {
    alignItems:'center',
    alignSelf:'center',
    width: 14,
    height: 19,
    marginRight: 15,
    // marginTop: 2,
    marginLeft: -10,
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
    height: deviceWidth * 0.123,
    borderRadius: (deviceWidth * 0.123)/2,
    justifyContent: 'center',
    marginLeft: wp('4%'),
    // width: 205,
  },
  profilebarButtonContainer: {
    // alignSelf:'flex-end',
    // alignSelf:'center',
    marginHorizontal: wp('2'),
    flexDirection: 'row',

    // alignItems:'space-between'
  },
  profilebarButton: {
   
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    
  
    // backgroundColor: Colors.Secondary_Color,
    width: deviceWidth * 0.09,
    height:deviceWidth * 0.09,
    borderRadius: (deviceWidth * 0.09)/2,
    // justifyContent: 'center',
    // alignContent:'center',
 
    
   
    backgroundColor: Colors.Black,
    
    // borderRadius: 20,
  //  justifyContent:'center'
  },

  profilebarButtonText: {
 
    
    textAlign: 'center',
    color: Colors.White,
    fontSize: FontSizes.large,
    fontFamily: 'Poppins-Bold',
    textAlignVertical:'center',
    // padding:3,
   
    letterSpacing:-0.8,
    // fontWeight:FontWeights.weightLarge,
    // padding:wp('0.4%'),
    
    
    
    // marginTop:-2,
    // fontWeight:FontWeights.weightLarge
  },
  searchInsertKeywordStyle:{
    width:'90%',fontFamily:'Poppins-Medium',fontSize:FontSizes.regular,
  },
  profilebarText: {
    color: Colors.Black,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 7,
    // fontWeight:FontWeights.weightMediumLarge,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.medium,
    letterSpacing:-1.2,
    lineHeight:28
  },
  profilebarTextT: {
    color: Colors.Black,
    textAlign: 'center',
    alignSelf: 'center',
    paddingLeft: 5,
    // fontWeight:FontWeights.weightLarge,
    fontFamily: 'Poppins-Bold',
    fontSize: FontSizes.medium,
    letterSpacing:-0.8,
    lineHeight:28
  },
  profilebarSearchImage: {
    width: deviceWidth * 0.054,
    height: deviceWidth* 0.054  ,
    alignSelf: 'center',
    marginLeft: 15,
    
  },
  profilebarPlusImage: {
    width: deviceWidth * 0.0720,
    height: deviceWidth* 0.072  ,
    alignSelf: 'center',
    marginLeft: 15,
    marginRight:5
  },
  profilebarMessageImageContainer: {
    backgroundColor: Colors.White,
    width: deviceWidth * 0.123,
    height: deviceWidth * 0.123,
    borderRadius: (deviceWidth * 0.123)/2,
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
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderBottomRightRadius: 50,
  },
  profileImageContainer: {
    width: wp('100%'),
    // height: 264,
    aspectRatio: 3/2,
    marginBottom: 10,
  },
  loginImageContainer: {
    width: wp('100%'),
    height:hp('100%'),
    // height: 264,
    // aspectRatio: 3/2,
    marginBottom: 10,
  },
  SettingImageContainer: {
    width: wp('100%'),
    // height:264
    // height:hp('36%'),
    // marginBottom: 10,
    aspectRatio: 3/2,
  },
  homeScreenImageContainer: {
    width: wp('100%'),
    // height: hp('50%'),
    aspectRatio:2/2,
    marginBottom: 40,
  },
  profileTopButtonsContainer: {
    backgroundColor: Colors.White,
    marginTop: Platform.OS === 'ios' ? 55 : 45,
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
    fontSize: 20,
    lineHeight:28,
    letterSpacing:-1.2,
    
    // fontWeight:FontWeights.weightLarge,
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
    fontSize: FontSizes.small_regular,
    textAlign: 'center',
    // fontWeight:FontWeights.weightRegular,
    width: '90%',
  },
  profileEmailContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  profileEmailImage: {
    width: wp('7.6%'),
    height: hp('2.7%'),
    borderRadius:3,
  },
  communityMemberprofileEmailImage: {
    width: 30,
    height: 26,
    borderRadius:3,
  },
  profileEmailText: {
    color: Colors.Grey,
    marginLeft: 10,
    marginTop:2,
    // fontWeight:FontWeights.weightsmallLarge,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.regular,

  },
  profileTextInputContainer: {
    backgroundColor: Colors.White,
    width: '90%',
    paddingHorizontal: 20,
    paddingVertical: hp('2%'),
    marginTop: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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
    // fontWeight:FontWeights.weightRegular,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.regular,
    marginBottom: Platform.OS ==='ios' ?5 : -10,
    paddingTop: Platform.OS === 'ios' ?0 : 5,
    
  },
  profileUpdateInfoContainer: {
    marginTop: 20,
    marginBottom: 17,
    marginHorizontal:20,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  profileUpdateInfoText: {
    color: Colors.Secondary_Color,
    // fontWeight:FontWeights.weightLarge,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.regular,
  },
  profileUpdateInfoImage: {
    width: wp('4.1%'),
    height: hp('1.7%'),
    marginTop:3,
    marginHorizontal: 8,
    // marginTop:-2
  },

  //Setting Screen Styles
  settingTopButtonsContainer: {
    backgroundColor: Colors.White,
    marginTop: Platform.OS === 'ios' ? 55 : 45,
    height: 56,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: 80,
    justifyContent: 'center',
    alignItems:'center'
  },
  chatsettingTopButtonsContainer: {
    backgroundColor: Colors.White,
    // marginTop: Platform.OS === 'ios' ? 55 : 45,
    height: 60,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: 80,
    justifyContent: 'center',
    alignItems:'center'
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
  profileTopBackImageCommunity: {
    width: 25,
    height: 18,
   alignSelf:'center'
  },
  profileTopBackImageTwo: {
    width: 25,
    height: 18,
    // marginLeft: 30,
  },
  loginprofileTopBackImageTwo: {
    width: 180,
    height: 49,
    // marginLeft: 30,
  },
  settingTextInputText: {
    //    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //    paddingHorizontal: 20,
    color: Colors.Primary_Color,
    // fontWeight:FontWeights.weightsmallLarge,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.small_regular,
    marginBottom: -15,
    lineHeight:20,
    paddingTop: 8,
  },
  loginsettingTextInputText: {
    //    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //    paddingHorizontal: 20,
    color: Colors.White,
    // fontWeight:FontWeights.weightsmallLarge,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.small_regular,
    marginBottom: -15,
    lineHeight:20,
    paddingVertical: 4,
  },
  searchTextInputStyle:{
    fontFamily:'Poppins-Medium',
    fontSize:FontSizes.regular,
    color:"#000",
    // height:hp('8%'),
    paddingVertical:16,
    paddingHorizontal:wp('4%'),
    width:'85%',
    // alignItems:'center',
    
    textAlignVertical:'center',
    // fontWeight:FontWeights.weightRegular
    // backgroundColor:'red'
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
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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
   
    marginTop: 20,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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
    fontSize: 48,
    lineHeight:60,
    letterSpacing:-1.2,
  },
  settingScreenHorizontalLine: {
    borderBottomColor: '#EfEfEf',
    borderBottomWidth: 1,
    marginTop: 15,
  },
  settingScreenProfileHeader: {
    paddingHorizontal: 20,
    paddingTop:3
  },
  settingScreenProfileUpdateHeader: {
    paddingHorizontal: 20,
    paddingTop:13
  },
  settingScreenProfileText: {
    color: '#E0E0E0',
    fontFamily: FontFamilies.poppins_bold,
    // fontWeight:FontWeights.weightLarge,
    fontSize: FontSizes.extra_larger,
   letterSpacing:-1.2
  },
  settingScreenEducationHeader: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom:10,
  },
  settingScreenEducationHeaderText: {
    color: '#E0E0E0',
    fontFamily: FontFamilies.poppins_bold,
    // fontWeight:FontWeights.weightLarge,
    fontSize: FontSizes.extra_larger,
    letterSpacing:-1.2
  },
  settingScreenEducationText: {
    color: Colors.Primary_Color,
    textAlign: 'center',
    // fontWeight:FontWeights.weightRegular,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.regular,
  },
  settingScreenEducationCertificate: {
    color: Colors.Secondary_Color,
    textAlign: 'center',
    // fontWeight:FontWeights.weightRegular,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.regular,
  },
  settingScreenEmailContainer: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
  settingScreenPassword: {
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 10,
  },
  settingScreenToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  settingScreenTopToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  settingScreenToggleContainerText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_semiBold,
    // fontWeight:FontWeights.weightsmallLarge,
    fontSize: FontSizes.large_medium,
    letterSpacing:-1
  },
  settingScreenHorizontal: {
    borderBottomColor: '#EfEfEf',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  settingUpdateButtonContainer: {
    backgroundColor: Colors.Primary_Color,
    width: '45%',
    marginTop:50,
    marginBottom:35,
    borderRadius: 10,
    paddingHorizontal: 15,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 52,
    // backgroundColor: Colors.Primary_Color,
    // width: '45%',
    // borderRadius: 10,
    // paddingHorizontal: 15,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // height: 52,
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
    marginTop: Platform.OS === 'ios' ? 55 : 45,
    height: 43,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    width: 80,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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
    fontSize:10,
    
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
    marginTop: Platform.OS === 'ios' ?60: 50,
  },
  communityDetailsjoinCommunityText: {
    color: Colors.White,
    fontSize: FontSizes.huge,
    // fontWeight:'bold',
    paddingHorizontal: 10,
    marginHorizontal: 15,
    // paddingVertical: 0,
 
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
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: wp('57%'),
    // width: 210,
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
  communityDetailsNewTopContainer:{
      
      backgroundColor: Colors.Primary_Color,
      width: wp('90%'),
      borderRadius: 10,
      paddingHorizontal: 15,
      // paddingLeft:15
    marginHorizontal:20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      shadowColor: Colors.Black,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
      shadowRadius: 5,
      elevation: 5,
      // height: wp('15%'),
      // padding:10,
      // height:55,
      // marginHorizontal: 15,
  },
  pendingcommunityDetailsNewTopContainer:{
      
    backgroundColor: '#BDBDBD',
    width: wp('90%'),
    borderRadius: 10,
    paddingHorizontal: 15,
    // paddingLeft:15
  marginHorizontal:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
    // height: wp('15%'),
    // padding:10,
    // height:55,
    // marginHorizontal: 15,
},
  joinedcommunityDetailsNewTopContainer:{
      
    backgroundColor: '#63f0a4',
    width: wp('70%'),
    borderRadius: 10,
    paddingHorizontal: 15,
  
    // paddingLeft:15
  marginHorizontal:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
    // height: wp('15%'),
    // padding:10,
    // height:55,
    // marginHorizontal: 15,
},
  joinCommunitytopContainer: {
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.Primary_Color,
    paddingHorizontal: 10,
    height: 50,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: wp('85%'),
    justifyContent: 'center',
  },
  communityButtonlandingScreenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'space-around',
    // paddingHorizontal: 5,
    alignItems: 'center',
  },
  survivalcommunityButtonlandingScreenContainer: {
    flexDirection: 'row',

    // paddingHorizontal: 5,
    alignItems: 'center',
  },
  communityDetailshomeScreenCard: {
    margin: 10,
    borderRadius: 15,
    width: wp('70%'),
    height: deviceWidth - 150,
    backgroundColor: Colors.White,
  },
  communityDetailshomeScreenCardImage: {
    borderRadius: 10,
    width: wp('70%'),
    height: deviceWidth - 150,
    overflow: 'hidden',
  },
  communityDetailshomeScreenCardEvent: {
    margin: 10,
    borderRadius: 15,
    width: wp('70%'),
    height: halfWidth + 20,
    backgroundColor: Colors.White,
  },
  communityDetailshomeScreenCardImageEvent: {
    borderRadius: 10,
    width: wp('70%'),
    height: halfWidth + 20,
    overflow: 'hidden',
  },

  communityDetailshomeScreenCardView: {
    margin: 10,
    position: 'absolute',
    top: 0,
    // right: 5,
    paddingHorizontal:15,
    justifyContent:'center',
    height: hp('3.5%'),
    color: Colors.Black,
    backgroundColor: 'white',
    // padding: 5,
    paddingTop: Platform.OS === 'ios' ? 0 : 2,
    paddingVertical:0,
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 20,
    textAlign: 'center',
    fontSize: FontSizes.regular,
    flexDirection: 'row',
    fontFamily: FontFamilies.poppins_semiBold,
  },
  communityDetailsdayText: {
    color: Colors.White,
    fontSize: FontSizes.medium,
    fontFamily: FontFamilies.poppins_bold,
    // width:wp('41%'),
    letterSpacing:-0.6,
    marginHorizontal:10
    
  },
  joinedcommunityDetailsdayText: {
    color: Colors.White,
    fontSize: FontSizes.medium,
    fontFamily: FontFamilies.poppins_bold,
    width:wp('25%'),
    // marginHorizontal:5
    
  },
  communityDetailshomeScreenImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginRight: 5,
    alignItems:'center',
    justifyContent:'center'
  },
  survivalcommunityDetailshomeScreenImage: {
    width: 95,
    height: 95,
    alignSelf: 'center',
    marginRight: 5,
    alignItems:'center',
    justifyContent:'center'
  },
  communityDetailsShortLeft: {
    width: 25,
    height: 18,
    marginLeft: 30,
  },
  communityDetailsMembersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -15,
  },
  pendingcommunityDetailsMembersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
   
    // marginLeft: -15,
  },
  communityDetailsMembersTextOne: {
    color: '#6f52ed',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: FontSizes.regular,
    // fontWeight:FontWeights.weighthuge,
    textAlign: 'center',
    
    
  },
  pendingcommunityDetailsMembersTextOne: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    // fontWeight:FontWeights.weighthuge,
    textAlign: 'center',
    
    
  },
  communityDetailsMembersTextTwo: {
    color: '#6f52ed',
    marginLeft: 5,
    fontFamily: FontFamilies.poppins_regular,
    FontSizes:FontSizes.regular,
    letterSpacing:-0.8,
    // fontWeight:FontWeights.weightMediumLarge,
    textAlign: 'center',
  },
  communityDetailsjoinCommunitytopContainer: {
    borderRadius: 10,
    marginHorizontal: 15,
    backgroundColor: Colors.Primary_Color,
    // paddingHorizontal: 20,
    paddingLeft:5,
    // height: 50,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
    // alignItems:'center',
    // marginTop: 15,
    width: wp('65%'),
    justifyContent: 'space-between',
  },
  communityDetailsjoinCommunitytopContainerTwo: {
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#63f0a4',
    paddingHorizontal: 20,
    // height: 50,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
   
    // marginTop: 15,
    width: wp('42%'),
    justifyContent: 'center',
  },
  pendingcommunityDetailsjoinCommunitytopContainerTwo: {
    borderRadius: 10,
    marginLeft: 20,
    backgroundColor: '#63f0a4',
    paddingHorizontal: 20,
    // height: 50,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
   
    // marginTop: 15,
    width: wp('42%'),
    justifyContent: 'center',
  },
  communityDetailsShortRightContainer: {
    height: 30,
    width: 1,
    backgroundColor: '#909090',
  },
  communityDetailsAdminInfoContainer: {
    backgroundColor: Colors.White,
    marginTop: 20,
    marginHorizontal: 20,
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.Black,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  communityMemberAdminInfoContainer:{
    backgroundColor: Colors.White,
    marginTop: 20,
    marginHorizontal: 20,
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.Black,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  pendingcommunityMemberAdminInfoContainer:{
    backgroundColor: Colors.White,
    marginTop: 20,
    marginHorizontal: 20,
    width: '90%',
    borderRadius: 10,
    
    paddingVertical: 5,
    
    alignItems: 'center',
    shadowColor: Colors.Black,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
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
    width:'95%'
    // fontWeight:FontWeights.weightsmallLarge
  },
  communityDetailsAdminInfoTextTwo: {
    color: Colors.Black,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.small,
    // fontWeight:FontWeights.weightsmallLarge,
    marginTop: 0,
  },
  communityMembersAdminInfoTextTwo: {
    color: Colors.Black,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.small,
    // fontWeight:FontWeights.weightsmallLarge,
    marginTop: -5,
  },
  communityDetailsEmailImage: {
    width: 28,
    height: 22,
    borderRadius: 2,
  },
  communityDetailsShowMoreContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  communityDetailsShowMoreText: {
    color: Colors.Secondary_Color,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.regular,
    // fontWeight:FontWeights.weightRegular
  },
  communityDetailsEyeImageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  communityDetailsEyeImage: {
    width: 26.67,
    height: 20,
  },
  communityDetailsAboutGroupContainer: {
    padding: 10,
    marginHorizontal: 10,
    marginTop:20,
  },
  communityDetailsAboutGroupTextOne: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.extra_larger,
    letterSpacing:-1.2
    // fontWeight:FontWeights.weightLarge
  },
  communityDetailsAboutGroupTextTwo: {
    fontFamily: FontFamilies.poppins_regular,
    fontSize: FontSizes.medium,
    color: '#8b8b8b',
    marginTop:15,
    // fontWeight:FontWeights.weightMediumLarge
  },
  communityDetailsUpCommingEventText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.extra_larger,
    // fontWeight:FontWeights.weightLarge,
    marginHorizontal: 20,
    letterSpacing:-1.2,
    marginTop:13,
    marginBottom:5
  },
  communityDetailsCardImageText: {
    color: '#EA434E',
    marginLeft: 5,
    fontSize: FontSizes.small,
    fontFamily: FontFamilies.poppins_semiBold,
  },
  communityDetailsCardImageTextTwo: {
    color: Colors.Black,
    marginLeft: 5,
    fontSize: FontSizes.small,
    fontFamily: FontFamilies.poppins_semiBold,
  },
  communityDetailsCardImageDateText: {
    color: Colors.Grey,
    marginHorizontal: 30,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.small,
    marginTop: -3,
  },
  communityDetailsCardDetailsText: {
    color: Colors.Primary_Color,
    marginHorizontal: 30,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.regular,
    lineHeight:20,
    marginTop: 3,
  },
  communityPublicText:{
    color: '#515151',
    marginLeft: 7,
    fontSize: FontSizes.small,
    // fontWeight:FontWeights.weightsmallLarge,
    fontFamily: 'Poppins-SemiBold',
    //  paddingTop: Platform.OS === 'ios'?0: hp('0.2%'),
     lineHeight:18

 
    // marginTop:'1.5%',
  },
  sportscommunityPublicText:{
    color: '#fff',
    // marginLeft: 5,
    // fontWeight:FontWeights.weightsmallLarge,
    fontSize: FontSizes.small,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    lineHeight:16
    // paddingVertical: 1,
 
    // marginTop:1,
  },

  //Search Users Screen

  searchUserInnerContainer: {
    backgroundColor: Colors.White,
    width: '65%',
    height: 50,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  searchDetailsShortLeft: {
    width: 24,
    height: 18,
    alignSelf: 'center',
    // marginRight: 20,
  },
  searchLoginTextBox: {
    backgroundColor: Colors.White,
    height: 52,
   
    borderRadius: 10,
    shadowColor: Colors.Black,
    width: '90%',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems:'center'
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
    // fontWeight:FontWeights.weightsmallLarge,
    fontSize: FontSizes.medium,
    fontFamily: FontFamilies.poppins_bold,
    letterSpacing:-0.8
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
    height: deviceHeight - 100,

    // backgroundColor: Colors.White,
  },
  searchScreenhomeScreenCard: {
    margin: 8,
    marginBottom:12,
    marginTop:10,
    borderRadius: 10,
    width: halfWidth - 28,
    height: halfWidth+22,
    backgroundColor: Colors.White,
  },
  searchEventsDetailshomeScreenCard: {
    margin: 10,
    // marginHorizontal:10,
    borderRadius: 10,
    width: deviceWidth-29,
    height: deviceWidth - 120,
    backgroundColor: Colors.White,
  },
  searchDetailshomeScreenCardImage: {
    borderRadius: 10,
    width: deviceWidth-29,
    height: deviceWidth - 120,
    overflow: 'hidden',
    // alignSelf:'center'
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
    height: 43,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    width: 70,
    justifyContent: 'center',
  },
  createCommunityImageContainer: {
    width: wp('100%'),
    // height: hp('35%'),
    //  height:264,
     aspectRatio:3/2,
    marginBottom: 20,
  },
  createsearchEventsDetailshomeScreenCard: {
    margin: 10,
    borderRadius: 15,
    width: deviceWidth-100,
    height: deviceWidth - 120,
    backgroundColor: Colors.White,
  },
  createsearchDetailshomeScreenCardImage: {
    borderRadius: 10,
    width: deviceWidth-100,
    height: deviceWidth - 120,
    overflow: 'hidden',
  },
  createCommunityfeedbackBottomSendContainer: {
    backgroundColor: Colors.Primary_Color,
    width: wp('38%'),
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: 52,
  },
  createCommunityfeedbackBottomButtonContainer: {
    flexDirection: 'row',
   paddingTop:20,
    // alignSelf: 'flex-end',
    padding: 10,
    marginTop: 10,
  },
  logincreateCommunityfeedbackBottomButtonContainer: {
    flexDirection: 'row',
   paddingTop:20,
    // alignSelf: 'flex-end',
    marginTop: 10,
  },
  logoutcreateCommunityfeedbackBottomButtonContainer: {
    flexDirection: 'row',
   paddingTop:20,
   justifyContent:'flex-end',
    marginTop: 10,
  },
  createCommunityTextHeader:{
    color:'#00035c',fontFamily:'Poppins-Bold',fontSize:FontSizes.small_huge,marginBottom:7,letterSpacing:-1.2
  },
 createCommunityTextSocial:{
  color:'#00035c',fontFamily:'Poppins-SemiBold',fontSize:FontSizes.medium,
 },
 createCommunityTextStudy:{
  color:'#00035c',fontFamily:'Poppins-SemiBold',fontSize:FontSizes.medium,
 },
 createCommunityInfoHeader:{
  color:'#E0E0E0',fontFamily:'Poppins-Bold',fontSize:FontSizes.extra_larger,marginBottom:10,letterSpacing:-1.2
 },
 timecreateCommunityInfoHeader:{
  color:'#E0E0E0',fontFamily:'Poppins-Bold',fontSize:FontSizes.extra_larger,letterSpacing:-1.2
 },
 createCommunityTextInput:{
  fontFamily:'Poppins-Medium',FontSizes:FontSizes.regular,textAlignVertical:'center',paddingVertical:15 , color :"#000"
 },
 createCommunityUploadText:{
  color:'#00035c',fontFamily:'Poppins-Medium',fontSize:FontSizes.small_regular,
 },
 createCommunityUploadInnerText:{
  color:'#B7B7B7',fontFamily:'Poppins-Medium',fontSize:FontSizes.small,
 },
 createCommunityLableStyle:{
  color: '#B7B7B7',fontFamily:'Poppins-Medium',fontSize:FontSizes.regular,paddingHorizontal:5,
 },
 createCommunityTagsStyle:{
  fontFamily:'Poppins-Medium',width:'100%',fontSize:FontSizes.regular,
 },
 createCommunityPrivate:{
  color:'#00035c',fontFamily:'Poppins-SemiBold',fontSize:FontSizes.small_large,letterSpacing:-1.2,
 },
 createCommunityMembers:{
  color:'#BDBDBD',fontFamily:'Poppins-Medium',fontSize:FontSizes.medium_regular,
 },
  //Community New Styles
  communityNewTextInputContainerTop: {
    backgroundColor: Colors.White,
    width: '100%',
    justifyContent:'center',
    paddingHorizontal: wp('4%'),
    // paddingVertical: hp('0.7%'),
    // height:hp('8%'),
   
    marginTop: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
    shadowRadius: 3,

    elevation: 5,
    shadowColor: Colors.Black,
  },
  communityNewTextHeader:{
    color:'#00035c',fontFamily:'Poppins-Bold',fontSize:FontSizes.extra_huge,marginBottom:12,letterSpacing:-1.2
  },
  communityNewInnertext:{
    color:'#00035c',fontFamily:'Poppins-SemiBold',fontSize:FontSizes.small_large,
  },
  searchTextProfile:{
    color: '#8b86ba',
    
    paddingTop: 30,
    fontFamily: 'Poppins-Bold',
    fontSize: FontSizes.regular,
    paddingHorizontal: 21,
    letterSpacing:-0.8
  },
  searchMoreResultsText:{
    color: '#00035c',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Medium',
   letterSpacing:-0.5,
    fontSize: FontSizes.regular,
  },
  searchRightArrow:{
    width: 15,
                  height: 12,
                  marginTop:Platform.OS === 'ios' ?0: -2,
                  marginLeft:-2,
                  marginRight: 21,
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
    backgroundColor: Colors.Secondary_Color,
    height: 35,
    marginTop: Platform.OS === 'ios' ? 0 :0,
  //  paddingVertical:10,
   borderRadius:20,
   alignSelf:'center',
  
    // padding:5,paddingHorizontal:10
  },
  tagText: {
    color: Colors.light_grey,
    fontFamily: FontFamilies.poppins_medium,
    fontSize: FontSizes.regular,
    paddingHorizontal:5,justifyContent:'center',alignItems:'center',
    // width:'10%'
  },
  //FeedBack Screen Styles.
  feedbackContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  feedbackCrossButton: {
    padding: 15,
    paddingHorizontal: 5,
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
  logoutfeedbackCourseContainer: {
    // justifyContent: 'center',
    marginVertical:110,
    flex: 1,
  },
  feedbackInnerCourseContainer: {
    paddingHorizontal: 20,
    marginTop:-60
  },
  logoutfeedbackInnerCourseContainer: {
    paddingHorizontal: 20,
    marginTop:-60
  },
  feedbackTopHeader: {
    color: '#E0E0E0',
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    
    textAlign: 'center',
    marginTop: 17,
    marginBottom:8,
  },
  feedbackInnerHeader: {
    color: '#8b86ba',
    fontFamily: 'Poppins-Regular',
    fontSize: FontSizes.regular,
    textAlign: 'center',
    paddingHorizontal: 10,
 
    paddingBottom: 12,
  },
  feedbackButtontext:{
    color: '#00035c',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    
    fontSize: FontSizes.regular,
  },
  feedbackHeaderText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.huges,
   letterSpacing:-1.2,
    marginBottom:0,
  },
  logoutfeedbackHeaderText: {
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 48,
   letterSpacing:-1.2,
    marginBottom:0,
  },
  feedbackInnerHeaderText: {
    color: Colors.Primary_Color,
    // fontWeight:FontWeights.weightLarge,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.small_large,
    letterSpacing:-0.8,
    marginTop:Platform.OS === 'ios' ? 10 :-10
    
  },
  feedbackTextInputContainer: {
    backgroundColor: Colors.White,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: hp('1%'),
    marginTop: 30,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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
    fontSize: FontSizes.regular,
    // fontWeight:FontWeights.weightRegular,
    marginBottom: Platform.OS === 'ios'?0:-10,
    paddingTop: 5,
  },
  feedbackTextInput: {
    fontFamily: FontFamilies.poppins_medium,
    FontSizes:FontSizes.regular,
    FontWeights:FontWeights.weightRegular,
    color:"#000",
  },
  feedbackBottomButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    marginTop: 10,
  },
  feedbackBottomButtonInner: {
    padding: '4%',
  },
  feedbackBottomCancelText: {
    color: Colors.Grey,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 16,
    letterSpacing:-0.5
  },
  loginfeedbackBottomCancelText: {
    color: Colors.White,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 14,
    letterSpacing:-0.8
  },
  feedbackBottomSendContainer: {
    backgroundColor: Colors.Primary_Color,
    // width: wp('38%'),
    borderRadius: 10,
    paddingHorizontal: 15,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: 52,
  },
  accountCloseBottomSendContainer: {
    backgroundColor: Colors.Primary_Color,
    width: '75%',
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 52,
  },
  feedbackBottomSendText: {
    color: Colors.White,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 16,
    alignSelf: 'center',
    width: '55%',
    textAlign:'center'
  },
  settingButtonTextStyle:{
    color: Colors.White,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.medium,
    alignSelf: 'center',
    // width: '55%',
    letterSpacing:-0.8,
    paddingTop:2,
    textAlign:'center'
  },
  logoutsettingButtonTextStyle:{
    color: Colors.White,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 18,
    alignSelf: 'center',
    // width: '55%',
    letterSpacing:-0.8,
    paddingTop:2,
    textAlign:'center'
  },
  loginsettingButtonTextStyle:{
    color: Colors.Primary_Color,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.regular,
    alignSelf: 'center',
    // width: '55%',
    // paddingTop:2,
    textAlign:'center'
  },
  logoutsettingButtonTextStyle:{
    color: Colors.White,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: 18,
    alignSelf: 'center',
    letterSpacing:-0.5,
    // width: '55%',
    // paddingTop:2,
    textAlign:'center'
  },
  feedbackImageVerticalLine: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.Secondary_Color,
    marginLeft: 10,
  },
  loginfeedbackImageVerticalLine: {
    borderLeftWidth: 1,
    borderLeftColor: '#efefef',
    marginLeft: 10,
  },
  joinedfeedbackImageVerticalLine: {
    borderLeftWidth: 1,
    borderLeftColor: '#f3f3f4',
    marginLeft: 10,
  },
  feedbackImageLeftArrow: {
    width: wp('4.8%'),
    
    height: hp('1.9%'),
    marginRight:5,
    alignSelf: 'center',
    marginLeft:15,
    paddingTop:2,
    // paddingTop:'20%',
  },
  loginfeedbackImageLeftArrow: {
    width: 20,
    
    height: 16,
    marginRight:5,
    alignSelf: 'center',
    marginLeft:15,
    paddingTop:2,
    // paddingTop:'20%',
  },
  joinedfeedbackImageLeftArrow: {
    width: 16,
    
    height: 12,
    marginRight:5,
    alignSelf: 'center',
    marginLeft:15,
    paddingTop:2,
    // paddingTop:'20%',
  },

  //Search Screen Styles

  searchScreenContainer: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ?60: 50,
    alignItems: 'center',
  },
  searchScreenLeftArrowContainer: {
    width: '30%',
  },
  searchScreenInsertKeyword: {
    width: '65%',
  },
  chatsearchScreenInsertKeyword: {
    width: '100%',
  },
  communityMemberssearchScreenInsertKeyword: {
    width: '90%',
    alignSelf:'center',
     marginTop:20
  },
  searchScreenTabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  searchScreenCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginHorizontal:5
  },
  searchScreenCardContainerThree: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:12
  },
  searchScreenCardContainerTwo:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:5
  },
  survivalsearchScreenCardContainerTwo:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:5
  },
  searchScreenCardContainerTwoSurvival:{
    flexDirection: 'row',
    // flexWrap: 'wrap',
    marginHorizontal:5
  },
  searchScreenCardContainerFour:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:12
  },
  searchScreenCardInnerContainer: {
   
    padding: 15,
    
  },
  searchScreenCardProfileView: {
    // justifyContent:'flex-end'
    // marginTop: 10,
    
  },
  searchScreenProfileImage: {
    width: deviceHeight * 0.10,
    height:deviceHeight * 0.10,
    borderRadius: (deviceHeight * 0.10)/2,
    marginBottom: 10,
   
    

  },
  searchScreenUserName: {
    color: Colors.Primary_Color,
    // fontWeight:FontWeights.weightsmallLarge,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.regular,
  },
  searchScreenUserCategory: {
    color: Colors.Black,
    // fontWeight:FontWeights.weightsmallLarge,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.small,
  },
  searchScreenChatContainer: {
    backgroundColor:'#000',
    marginHorizontal: -7,
    
   
    // marginTop: 15
   
    // height: hp('10%'),
   
  },
  searchScreenChatImage: {
    width: 45,
    height: 45,
    
    // marginTop:hp('1%')
  },
  communityMembersearchScreenChatImage: {
    width: 28,
    height: 23,
    marginBottom:10
    
    // marginTop:hp('1%')
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
    width: 50,
    height: 50,
    marginHorizontal: 0,
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
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
    shadowRadius: 3,

    elevation: 5,
    shadowColor: Colors.Black,
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
    shadowOpacity: Platform.OS === 'ios' ?0.12: 0.29,
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

  //Chat HomeScreen Styles

  chatHomeScreenImageContainer: {
    width: wp('100%'),
    height:hp('37%'),
    // marginBottom: 20,
  },
  chatCommunitytopContainer: {
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: Colors.White,
    paddingHorizontal: 3,
    paddingVertical: 5,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ?0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
    // width: 210,
  },
  pendingchatCommunitytopContainer: {
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: '#EA434e',
    paddingHorizontal: 3,
    paddingVertical: 5,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ?0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems:'center'
    // width: 210,
  },


  //EventsStyles
  eventScreenDetailshomeScreenCard: {
    margin: 10,
    // marginHorizontal:10,
    borderRadius: 10,
    width: deviceWidth-29,
    height: deviceWidth - 130,
    backgroundColor: Colors.White,
  },
 eventScreenDetailshomeScreenCardImage: {
    borderRadius: 10,
    width: deviceWidth-29,
    height: deviceWidth - 130,
    overflow: 'hidden',
    // alignSelf:'center'
  },
  eventhomeScreenImageContainer: {
    width: wp('100%'),
    // height: hp('50%'),
    aspectRatio:2/2,
    marginBottom: 10,
  },
  
  eventscomhomeScreenCardView: {
    margin: 13,
    position: 'absolute',
    bottom: 0,
    // right: 5,
    justifyContent: 'center',
    // width: wp('22%'),
    paddingHorizontal:15,
    height: 27,
    backgroundColor: '#6f52ed',
    // padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
   
    flexDirection: 'row',
    
  },
  chateventscomhomeScreenCardView: {
    marginHorizontal: 13,
    marginVertical:5,
    // position: 'absolute',
    bottom: 0,
    // flexDirection:'row',
    // right: 5,
    justifyContent: 'center',
    // width: wp('22%'),
    paddingHorizontal:15,
    height: 27,
    backgroundColor: '#EA434e',
    // padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
   
    flexDirection: 'row',
    
  },
  eventsDetailsInfoInnerContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  eventsDetailsAdminInfoContainer: {
    backgroundColor: Colors.White,
    marginTop: 5,
    marginHorizontal: 20,
    width: '90%',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.Black,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  eventsTimeDetailsAdminInfoContainer: {
   
    marginTop: 0,
    marginHorizontal: 5,
    width: '92%',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'center',
    shadowColor: Colors.Black,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  eventDetailsCardDetailsText: {
    color: Colors.Primary_Color,
    marginHorizontal: 30,
    fontFamily: FontFamilies.poppins_bold,
    fontSize: FontSizes.large_medium,
    lineHeight:20,
    marginTop: 3,
  },
  eventScreenInsertKeyword: {
    width: '100%',
  },
  eventsettingTextInputText: {
    //    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //    paddingHorizontal: 20,
    color: Colors.Primary_Color,
    // fontWeight:FontWeights.weightsmallLarge,
    fontFamily: FontFamilies.poppins_semiBold,
    fontSize: FontSizes.small_regular,
    marginBottom: 5,
    lineHeight:20,
    paddingTop: 8,
  },
  eventDetailsAboutGroupContainer: {
    padding: 10,
    marginHorizontal: 10,
    marginTop:10,
  },
 eventDetailsjoinCommunitytopContainer: {
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#EA434e',
    // paddingHorizontal: 20,
    paddingLeft:5,
    // height: 50,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
    // alignItems:'center',
    // marginTop: 15,
    width: wp('52%'),
    justifyContent: 'space-between',
  },
  pendingeventDetailsjoinCommunitytopContainer: {
    borderRadius: 10,
    marginLeft: 20,
    backgroundColor: '#EA434e',
    // paddingHorizontal: 20,
    paddingLeft:5,
    // height: 50,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
    // alignItems:'center',
    // marginTop: 15,
    width: wp('52%'),
    justifyContent: 'space-between',
  },
  eventshomeScreenImage: {
    width: 20,
    height: 20,
    justifyContent:'center',
    marginHorizontal:10,
    
    
    // marginRight: 5,
  },
  
  /////////////////////TIMELOC/////////////////
  GreyHeader: {
    color: '#E0E0E0',
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    paddingVertical: 10,
  },
  greyText: {
    // fontFamily: 'Poppins-Medium',
    fontSize: FontSizes.medium,
    color: '#000',
    width: 80,
    // backgroundColor:"pink"
  },
  TextStyle1: {
    color: '#00035C',
    fontFamily: 'Poppins-SemiBold',
    fontSize: FontSizes.medium_regular,
    // marginBottom: 10,
    marginTop: 22,
    letterSpacing: -1.2,
    // marginTop:10,
    // paddingTop: 20,
    paddingVertical: 0,
    textAlignVertical: 'center',
    // paddingHorizontal: 16,
  },
  TextStyleTime: {
    fontFamily: 'Poppins-Medium',
    fontSize: FontSizes.regular,
    color: '#B7B7B7',
    // letterSpacing: 0,
    // paddingVertical: 0,
    textAlignVertical: 'center',
    paddingRight: 6,

  },
  backStyle: {
    backgroundColor: '#fff',
    // width: '100%',
    paddingHorizontal: 10,
    height: 56,
    
    // marginTop: 15,
    // marginRight:20,
    borderRadius: 10,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: Platform.OS === 'ios' ? 0.05: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  TextField: {
    fontFamily: 'Poppins-Medium',
    flexDirection: 'row',
    fontSize: FontSizes.regular,
    paddingVertical: 13,
    color: '#FFFFFF',
    backgroundColor: '#fff',
    color:'#000',
    // border: '#3D3D3D',
    borderRadius: 10,
    textAlignVertical: 'center',
    paddingHorizontal: 10,
  },
  warning: {
    color: '#EA434E',
    fontSize: 14,
    fontWeight: '700',
    paddingVertical: 10,
  },
  BorderLine: {
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
    marginTop: 30,
  },
  TimeStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    // justifyContent: 'space-around',
    width: '35%',
    // marginHorizontal: 20,
    marginVertical: 10,
  },
  TimeTextStyle: {
    
    // textAlign: 'center',
    // fontSize: FontSizes.large,

    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#00035C',
    fontWeight: '500',
  },

};

export default stylesPhone;
