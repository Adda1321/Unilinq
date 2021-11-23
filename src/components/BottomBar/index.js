import React,{useState} from 'react'
import {View,TouchableOpacity,Text,StyleSheet,Image} from 'react-native'
import {appStyles} from '../../style'
import {Images} from '../../utils'
import ImageView from '../Image'
export default  function CustomTabBar(props) {
const [defaultColor,setColor] = useState([{
  id:0,clickcolor:'#BDBDBD'},
  {
  id:1,clickcolor:'#00035c'
  },
  {id:2,clickcolor:'#BDBDBD'},
  {id:3,clickcolor:'#BDBDBD'},
  {id:4,clickcolor:'#BDBDBD'}
])
const bottomBarIcons = [
    Images.homeIcon,
    Images.userIcon,
    Images.calenderIcon,
    Images.star
 ]
 const currentBottomBar =(index)=>{
  let temp = defaultColor.map((product) => {
    if (index === product.id) {
      return {...product, clickcolor:'#00035c' };
    }
    else {
      return {...product, clickcolor:'#BDBDBD' };
    }
  });
  setColor(temp)
 }
    const navigateApp=(index)=>{
       if(index == 0){
        currentBottomBar(index)
         props.navigation.navigate('Screen_2',{screen:'Notification'}) ;
     }
     else if(index ==1){
      currentBottomBar(index)
      props.navigation.navigate('Screen_1', { screen: 'Home' });
        
     }
     else {
      currentBottomBar(index)
        props.navigation.navigate('Screen_3') ;
     }
     }
    return (
      
      <View style={styles.TabBarMainContainer} >
          <View style={styles.customBottomTabMain}>
          <View style={styles.customBottomTabIconLeftMain}>
              <View style={styles.customBottomTabLeftIcon}>
                  <TouchableOpacity onPress={()=>navigateApp(0)}>
                  <ImageView src={require('../../images/notification.png')} imageStyle={{width:20,height:20}} Color={defaultColor[0].clickcolor} />
                </TouchableOpacity>
          </View>
          </View>
          <View style={styles.customBottomTabIconRightMain}>
          <View style={styles.customBottomTabRightIcon}>
          {bottomBarIcons.map((item,index)=>(
              <TouchableOpacity onPress={()=>navigateApp(index+1)}>
                  
                {index !=3 ? <ImageView src={item} imageStyle={{width:28,height:28}}  Color={defaultColor[index+1].clickcolor} /> : <ImageView src={item} imageStyle={{width:22,height:22}}  /> }   
         </TouchableOpacity>
          ))}
          </View>
              </View>
              </View>
          </View>
  
    );
  }
  const styles = StyleSheet.create(appStyles)