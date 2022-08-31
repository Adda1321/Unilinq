import React,{useState} from 'react'
import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,ScrollView } from 'react-native'
import ImageView from '../../components/Image'
import {appStyles} from '../../style'
import { Images } from '../../utils'
import { useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux';
 function index(props) {
    const navigation = useNavigation();
    const [card,setCards]= useState([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
    ])
    // const notificationsScreen = [
    //     "1",
    //     "2",
    //     "3",
    //     "4",
    //     "5",
    //     "6",
    // ]
    const sliceCard =(index) =>{
        const cards_filtered = card?.filter((e,i) => i!=index);
        setCards(cards_filtered)
    }
    console.log("DSsssssskkkkkkk======>",props.notifications)
    return (
        <View style={styles.notificationContainer}>
           <ScrollView >
           <View style={styles.settingTopButtonsContainer}>
            <View style={styles.settingTopButtons}>
              <TouchableOpacity onPress={() =>   navigation.push('AllTabs', {
          screen: 'Screen_1', params: {
              screen: 'Home',params:{
                login:true
              }
          }
      })}>
                <ImageView
                  src={Images.left_arrow}
                  imageStyle={styles.profileTopBackImageTwo}
                />
              </TouchableOpacity>
            </View>
          </View>
             <View style={styles.notificationHeaderContainer}>
             <Text style={styles.notificationHeaderText}>Notification</Text>
             </View>
             
             {props?.notifications?.data?.map((item,index)=>(
                <View style={styles.notificationContainerList}>
                <View style={[styles.notificationListing,{alignItems:'center',justifyContent:'space-between',}]}>
                    <View style={{flexDirection:'row',width:'90%'}}>
                <Text style={[styles.notificationListingDot,{alignSelf:'center'}]}>{'\u2B24'}</Text>
                 <Text style={styles.notificationListingText}>{item.notificationString}</Text>
                </View>
                <TouchableOpacity style={{marginRight:-25,alignSelf:'flex-start',marginTop:3}} onPress={()=>sliceCard(index)}>
                <ImageView  src={require('../../images/notificationclose.png')} imageStyle={{width:12,height:12,alignItems:'flex-end',}} />
               </TouchableOpacity>
                </View>
                <View style={[styles.notificationListingSecond,{marginTop:10}]}>
                <Text style={styles.notificationListingSecondText}>Jump in to meet legends like yourself!</Text>
                </View>
            </View>
             ))}
            </ScrollView>
        </View>
    )
}
function mapStateToProp(state) {
  return {
    notifications: state.notifications,
    
  };
}
const styles = StyleSheet.create(appStyles)
export default connect(mapStateToProp)(index);