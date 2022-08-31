import React,{useState,useEffect} from 'react'
import { View, Text ,ImageBackground,TouchableOpacity ,StyleSheet ,Dimensions ,TextInput, ScrollView } from 'react-native'
import ImageView from '../../components/Image'
import { appStyles } from '../../style'
import { Images } from '../../utils'
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import ProfilesMembers from '../../components/ProfilesMembers';
import {firestore,auth} from '../../Core/config/config'
import { BackgroundImage } from 'react-native-elements/dist/config'
const {height, width} = Dimensions.get('window');
import {getProfile} from '../../Core/Profile/getProfile'
import {Dialog} from 'react-native-elements'
import TextInputWithLeftIcon from '../../components/TextInputWithLeftIcon';
import {getAllPendingmembers} from '../../Core/Communities/getAllPendingMembers'
import {deleteJoinedCOmmunity} from '../../Core/Communities/deletejoined'
import {acceptCommunity} from '../../Core/Communities/acceptMember'
export default function communityMembers(props) {
    const [backgroundImage,setBackgroundImage] = useState(0)
    const [userdata,setUserData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [communityMemberss ,setCommunityMemberss] = useState(0)
    const [products,setProducts] = useState([
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
      ])
     
    useEffect(()=>{
      fetchData =async ()=> {
        console.log("Dddd=======eventid--=====>?",props.route.params.community)
    //  await getAllPendingmembers(props.route.params.data.id,(res3)=>{
        getProfile(props.route.params.data.user_id,(res)=>{
         
        //   setCommunityMemberss(res3)
          setUserData(res)
         setLoading(true)
  
         
    //    })
       
       
        
        
        //  setLoading(true)
      })
    }
    fetchData()
  },[])
  const deleteMember =(id,community_id,index)=>{
    deleteJoinedCOmmunity(id,community_id,(res2)=>{
      // setCheckJoin(null)
      const temp = [...communityMemberss];

      // removing the element using splice
      temp.splice(index, 1);
     
      // updating the list
      setCommunityMemberss(temp)
     
    })
  }
  const acceptMember =(id,community_id,index)=>{
    
    acceptCommunity(id,community_id,(res2)=>{
      const temp = [...communityMemberss];

      // removing the element using splice
      temp.splice(index, 1);
     
      // updating the list
      setCommunityMemberss(temp)
     
      
    })
  }
  
    return (
        <View style={{flex:1}}>
             {!loading ?
          <View style={{justifyContent:'center',flex:1}}>
           <Dialog.Loading />
           </View>
            :
            <ScrollView>
             <ImageBackground
            source={{uri:props.route.params.data.event_image}}
            style={styles.chatHomeScreenImageContainer}
            resizeMode="cover"
            imageStyle={{borderBottomLeftRadius: 35}}>
           <View style={styles.settingTopButtonsContainer}>
            <View style={styles.settingTopButtons}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <ImageView
                  src={Images.left_arrow}
                  imageStyle={styles.profileTopBackImageTwo}
                />
              </TouchableOpacity>
            </View>
          </View>
           <View style={{flexDirection:'row',position: 'absolute', bottom: 20,width:'100%',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:5}}>
          <TouchableOpacity disabled>
           <ImageView
                    src={require('../../images/settingIcons.png')}
                    imageStyle={{
                      width: width * 0.08,
                      height: width * 0.08,
                      alignSelf: 'center',
                      
                      
                    }}
                  />
                  </TouchableOpacity>
               <Text style={{color:'#fff' ,fontSize:18,fontFamily:'Poppins-SemiBold'}}>{props.route.params.data.community_name}</Text>
           </View>
            {/* </View> */}
          </ImageBackground>
         
          <View style={{paddingHorizontal:23,paddingTop:18}}>
            <Text style={{fontFamily:'Poppins-Bold',fontSize:14,color:'#b7b7b7',letterSpacing:-0.5}}>Group Members</Text>
          </View>
          <View style={styles.communityMemberAdminInfoContainer}>
            
        <View style={styles.communityDetailsInfoInnerContainer}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('UserScreen',{data:userdata})}>
               <ImageView src={{uri:userdata?.image}} imageStyle={[styles.communityDetailsCircularImage]} />
               </TouchableOpacity>
               <View style={{marginLeft:10}}>
                   <Text style={styles.communityDetailsAdminInfoTextOne}>{userdata?.first_name} {userdata?.last_name}</Text>
                   <Text style={styles.communityDetailsAdminInfoTextTwo}>Group Admin</Text>
               </View>
               </View>
               {/* <ImageView src={Images.email} imageStyle={styles.communityDetailsEmailImage} /> */}
               <ImageView
             src={require('../../images/chatImage.png')}
             imageStyle={styles.communityMemberprofileEmailImage}
           />
           </View>
           <View style={styles.communityDetailsShowMoreContainer}>
               <Text style={styles.communityDetailsShowMoreText}>Show more</Text>
               
           </View>
           <View style={styles.communityDetailsEyeImageContainer}>
           <ImageView src={Images.eye} imageStyle={styles.communityDetailsEyeImage} />
           </View>
           
           <View style={styles.communityMemberssearchScreenInsertKeyword}>
            <TextInputWithLeftIcon
              inputStyle={[
                appStyles.searchLoginTextBox,
                // email.length ? styles.loginActiveTextBox : styles.loginInActiveTextBox,
                // errors.email || errors.global ? styles.loginErrorTextBox : {}
              ,]}
              textStyle={
               [styles.searchInsertKeywordStyle,{alignItems:'center'}]
              }
              placeholder="Member name..."
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              maxLength={25}
              loading={false}
              textInputChange={(txt)=>console.log("okok",txt)}
            />
          </View>
          {props.route.params.community.length == 0 ? 
          <View style={{justifyContent:'center',height:100,alignItems:'center'}}>
          <Text style={[styles.searchTextProfile,{color:'#B7B7B7'}]}>No Members Found</Text>
          </View>
           : <View style={{marginTop:10}}>
          <ProfilesMembers ProfilesData={props.route.params.community} navigation={props.navigation} admin={props.route.params.data.user_id} /> 
          </View>}
          {/* <View style={{marginTop:10}}>
          <ProfilesMembers ProfilesData={props.route.params.community} navigation={props.navigation} admin={props.route.params.data.user_id} /> 
          </View> */}
           </ScrollView>
}
        </View>
    )
}
const styles = StyleSheet.create(appStyles);