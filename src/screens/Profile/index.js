import React,{useState} from 'react'
import { View, Text ,Dimensions,ScrollView ,ImageBackground,PermissionsAndroid,TouchableOpacity,TextInput,StyleSheet,Platform,Image} from 'react-native'
import {Images} from '../../utils'
import ImageView from '../../components/Image'
import {appStyles} from '../../style'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import TextInputWithHeading from '../../components/TextInputWithHeading'
import {imageSettings} from '../../constants'
import ImagePicker from 'react-native-image-crop-picker';
const {width,height} = Dimensions.get('window')
import RBSheet from 'react-native-raw-bottom-sheet';
export default function index() {
    const navigation = useNavigation();
    const [capturedImage, setCapturedImage] = useState('');
    let imageOptionsSelect;
    const requestPermissionForAndroid = async () => {
        const permisssion = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        return permisssion;
      };
    
      const onPictureCapture = async () => {
          console.log("Capture")
        let permisssion = await requestPermissionForAndroid();
        if (permisssion == PermissionsAndroid.RESULTS.GRANTED) {
          ImagePicker.openPicker(imageSettings).then(image => {
              imageOptionsSelect.close()
            console.log(image);
            setCapturedImage(image)
            // setCapturedImage('Capture Image', image);
          }).catch(err=>{
            console.log("Err====>",err)
            imageOptionsSelect.close()
          });
        }
        
      };
      const onPictureGalleryCapture = async () => {
        console.log("Capture")
      let permisssion = await requestPermissionForAndroid();
      if (permisssion == PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.openCamera(imageSettings).then(image => {
        imageOptionsSelect.close()
          console.log(image);
          setCapturedImage(image)
          // setCapturedImage('Capture Image', image);
        }).catch(err=>{
              console.log("Err====>",err)
              imageOptionsSelect.close()
          });
      }
      
    };
      console.log("CaptureImage====>",JSON.stringify(capturedImage[0]?.path) )
    return (
        <View style={[styles.profileContainer,]}>
            <ScrollView>
            <View style={styles.profileContainerUpperView}>
            <ImageBackground source={Images.profileMainImage} style={styles.profileImageContainer} resizeMode="cover" >
            <View style={styles.profileTopButtonsContainer}>
            <View style={styles.profileTopButtons}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ImageView  src={Images.left_arrow} imageStyle={styles.profileTopBackImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
            <ImageView  src={Images.profile_setting} imageStyle={styles.profileTopProfileImage} />
            </TouchableOpacity>
            <ImageView  src={Images.logout} imageStyle={styles.profileTopLogoutImage} />
            </View>
                </View>
                {capturedImage !='' && capturedImage !=undefined ? 
                <TouchableOpacity onPress={()=>imageOptionsSelect.open()} style={styles.profileImageLayout} >
                    <Image
              resizeMode="cover"
              style={{width:100,height:100,borderRadius:50}}
              source={{
                uri:capturedImage[0]?.path == undefined ? capturedImage.path : capturedImage[0]?.path,
              }}
            /> 
            </TouchableOpacity> : <TouchableOpacity style={styles.profileImageLayout} onPress={()=>imageOptionsSelect.open()}>
              <View>
              <ImageView  src={Images.upload} imageStyle={{alignItems:'flex-end',width:48,height:48,alignSelf:'flex-end',position:'absolute',borderRadius:6,right:0,padding:1,top:40}} />
                </View>
                <Text style={styles.profileImageLayoutText}>A</Text>
            </TouchableOpacity> }
            
            </ImageBackground>
            <View style={styles.profileUserInfoContainer}>
                <Text style={styles.profileUserNameText}>Anders Chow</Text>
                <Text style={styles.profileUserDescriptionText}>Certificate lll In information, Digital Media And Technology</Text>
                <View style={styles.profileEmailContainer}>
                    <ImageView src={Images.email} imageStyle={styles.profileEmailImage}/>
                    <Text style={styles.profileEmailText}>anders@swin.edu.au</Text>
                </View>
          <TextInputWithHeading profileTextInputContainer={[styles.profileTextInputContainer]}  ProfileTextInputText={[styles.ProfileTextInputText]} textHeading="Your Bio"  textPlaceHolder="Enter bio here" />
           
            </View>
            <View style={styles.profileUpdateInfoContainer}>
                <Text style={styles.profileUpdateInfoText}>Update Bio</Text>
                <ImageView src={Images.short_right2x} imageStyle={styles.profileUpdateInfoImage}/>
            </View>
            </View>
           <View>
               <Text style={{color:'#E0E0E0',fontFamily:'Poppins-Bold',fontSize:28,textAlign:'center',marginTop:10}}>FeedBack</Text>
               <Text style={{color:'#8b86ba',fontFamily:'Poppins-Regular',fontSize:16,textAlign:'center',paddingHorizontal:10,paddingBottom:10}}>Your feedback is important to provide better services to you and your peers. Please send us your feedback below</Text>
           </View>
           <View  style={{flexDirection:'row',justifyContent:'space-around',marginBottom:20}}>
               <TouchableOpacity style={{backgroundColor:'#fff',height:50,width:'45%',borderRadius:10, shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7,justifyContent:'center',padding:2}} onPress={()=>navigation.navigate('Feedback')} >
                   <Text style={{color:'#00035c',textAlign:'center',fontFamily:'Poppins-Bold',fontSize:16}}>Course feedback</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={{backgroundColor:'#fff',height:50,width:'45%',borderRadius:10,justifyContent:'center', shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7,}}>
                       <Text style={{color:'#00035c',textAlign:'center',fontFamily:'Poppins-Bold',fontSize:16}}>App feedback</Text>
                       </TouchableOpacity>
           </View>
           </ScrollView>
           <RBSheet
          ref={ref => {
            imageOptionsSelect = ref;
          }}
          closeOnPressMask
          dragFromTopOnly
          animationType="slide"
          closeOnDragDown
          openDuration={500}
          height={height*0.2}
        //   onClose={() => closeView()}
        //   onOpen={openView}
          customStyles={{
            wrapper: {
              backgroundColor: '#00000000'
            },
            draggableIcon: {
              backgroundColor: '#000'
            },
            container: {
              // flex: 8,
              borderRadius: 16,
              backgroundColor:'#FFF'
            }
          }}
        >
             <View style={{flexDirection:'row',padding:20,alignItems:'center',}}>
                 <TouchableOpacity onPress={()=>onPictureCapture()}>
             <ImageView src={Images.gallery} imageStyle={{width:60,height:60}}  />
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>onPictureGalleryCapture()}>
              <ImageView src={Images.camera} imageStyle={{width:80,height:80,marginLeft:10}} />
              </TouchableOpacity>
         </View>
        </RBSheet>
        </View>
    )
}
const styles = StyleSheet.create(appStyles)