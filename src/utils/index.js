import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PixelRatio} from 'react-native'
 export const Images = {
   //HomeScreen Images
   Outline:require('../images/outline.png'),
    homeIcon:require('../images/Home.png'),
    calenderIcon:require('../images/Calender.png'),
    notificationIcon:require('../images/notification.png'),
    userIcon:require('../images/Vector.png'),
    homeTop:require('../images/homeTop.png'),
    explor:require('../images/ExplorUni.png'),
    short_right:require('../images/short_right.png'),
    star:require('../images/star.png'),
    ground:require('../images/ground.png'),
    boys:require('../images/boys.png'),
    robot:require('../images/robot.png'),
    lights:require('../images/Lights.png'),
    public:require('../images/public.png'),
    //Profile Component Images
    search:require('../images/search.png'),
    plus:require('../images/plus.png'),
    message:require('../images/message.png'),
    //Category Component Select Images
    downarrow:require('../images/down.png'),

    //SearchInput Images
    line:require('../images/line.png'),
    firstPerson:require('../images/firstperson.png'),

    //Profile Screen Images
    profileMainImage:(require('../images/profileMainImage.png')),
    left_arrow:require('../images/short_left.png'),
    profile_setting:require('../images/Setting.png'),
    logout:require('../images/logout.png'),
    email:require('../images/email.png'),
    short_right2x:require('../images/short_right2x.png'),
    cross:require('../images/cross.png'),
    uploadimg:require('../images/uploadimg.png'),
    camera:require('../images/camera.jpg'),
    gallery:require('../images/gallery.png'),

    //Community Screens Images
    eye:require('../images/eye.png'),
    question:require('../images/question.png'),

    //UserScreen Images

    chat:require('../images/chat.png'),

    //CreateCommunity Images
    backgroundtwo:require('../images/backgroundtwo.png'),
    messageheart:require('../images/messageheart.png'),
    upload:require('../images/upload.png'),

    /////  Events Images

    eventsBackground:require('../images/EventsImage.png'),
    Calander_icon:require('../images/Frame.png'),
  Gallery_icon:require('../images/image_alt.png'),
  Location:require('../images/location.png'),
  Light_cover:require('../images/Rec_Light.png'),
  Cover_Img:require('../images/Rec_Main_cover.png'),
  DownArrow:require('../images/down.png'),
  RightArrow:require('../images/short_right.png'),
  LeftArrow:require('../images/short_right_L.png'),
  Calander_icon:require('../images/calander.png'),

  CupCard: require('../images/CardCup.png'),

  MsgCard: require('../images/Cardmsg.png'),
  Oweek: require('../images/Oweek.png'),
  StaffRep: require('../images/Rep.png'),

  ReDirect3: require('../images/redirect.png'),
  // Half_cal: require('../images/Cale.png'),
  Rocket: require('../images/Rocket.png'),
  cup: require('../images/cup.png'),
    
}
export const Colors = {
    Primary_Color: '#00035c',
    Secondary_Color:'#8b86ba',
    White: '#FFFFFF',
    Blue: '#0000FF',
    Black: '#000000',
    Grey:'#b7b7b7',
    light_grey:'#f3f3f4'
  };
  export const FontSizes={
    // extra_huge:PixelRatio.getFontScale()>1.0 ? hp('6.2%') : hp('6.4%'), //48
  //   small_huge:PixelRatio.getFontScale()>1.0 ? hp('5.20%') : hp('5.56%'), //40
  //   extra_font:PixelRatio.getFontScale()>1.0 ? hp('5.0%') : hp('5.2%'), //38
  //   huges: PixelRatio.getFontScale() > 1.0 ? hp('4.17%') : hp('5.0%'), //36
  //   huge: PixelRatio.getFontScale() > 1.0 ? hp('4.17%') : hp('4.22%'), //31
  //   extra_larger: PixelRatio.getFontScale() > 1.0 ? hp('3.60%') : hp('3.89%'), //28
  //   larger: PixelRatio.getFontScale() > 1.0 ?hp('3.34%') :hp('3.61%'), //26
  //   large: PixelRatio.getFontScale() > 1.0 ?hp('2.5%') : hp('2.78%'),  //20
  //   small_large: PixelRatio.getFontScale() > 1.0 ?hp('2.4%') : hp('2.50%'),  //18
  //  large_medium: PixelRatio.getFontScale() > 1.0 ?hp('2.2%') : hp('2.39%'),
  //   medium: PixelRatio.getFontScale() > 1.0 ?hp('2.03%') : hp('2.2%'), //16
  //   regular: PixelRatio.getFontScale() > 1.0 ?hp('1.67%') : hp('1.94%'),//14
  //   medium_regular: PixelRatio.getFontScale() > 1.0 ?hp('1.63%') : hp('1.94%'), //14
  //   small_regular:PixelRatio.getFontScale() > 1.0 ?hp('1.57%') : hp('1.67%'), //12
  //   small: PixelRatio.getFontScale() > 1.0 ?hp('1.13%') :hp('1.4%'), //10
  //   very_small :PixelRatio.getFontScale() > 1.0 ? hp('1.00%') : hp('1.11%')  //8
    extra_huge:48, //48
    small_huge:40, //40
    extra_font:38, //38
    huges: 36, //36
    huge:31, //31
    extra_larger: 28, //28
    larger: 26, //26
    large: 20,  //20
    small_large: 18,  //18
   large_medium: 18,
    medium: 16, //16
    regular: 14,//14
    medium_regular:14, //14
    small_regular:12, //12
    small:10, //10
    very_small :8  //8
  }

  export const FontWeights = {
    weighthuge:'800',
    weightLarge:'700', //48
    weightsmallLarge:'600',
    weightRegular:'500',
    weightMediumLarge:'400',
    weightmedium:PixelRatio.getFontScale()>1.0 ? hp('54%') : hp('55.60%'), //48
  }

  export const FontFamilies={
    poppins_bold:'Poppins-Bold',
    poppins_semiBold:'Poppins-SemiBold',
    poppins_medium:'Poppins-Medium',
    poppins_regular:'Poppins-Regular'
    
  }
// const fontFamily = 'Poppins-Bold';

