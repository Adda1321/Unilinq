import React from 'react'
import { View, Text,ImageBackground,TouchableOpacity,StyleSheet } from 'react-native'
import { Images } from '../../utils'
import ImageView from '../../components/Image'
import { appStyles } from '../../style'
import { useNavigation } from '@react-navigation/native';

export default function CommunityCreate() {
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor:'#fff',flex:1}}>
            <ImageBackground source={Images.backgroundtwo} style={styles.createCommunityImageContainer} resizeMode="cover" >
            <View style={styles.communityCreateTopButtonsContainer}>
            <View style={styles.createCommunityTopButtonsContainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ImageView  src={Images.left_arrow} imageStyle={styles.profileTopBackImage} />
            </TouchableOpacity>
            </View>
                </View>
            </ImageBackground>
            <View style={{paddingHorizontal:20,}}>
            <Text style={{color:'#00035c',fontFamily:'Poppins-Bold',fontSize:40}}>Create New</Text>
            <View style={{alignItems:'flex-end'}}>
             <TouchableOpacity style={{backgroundColor:'#f3f3f4',width:'80%',paddingLeft:10,paddingTop:10,borderRadius:10}} onPress={()=>navigation.navigate('CommunityNew')}>
            <Text style={{color:'#00035c',fontFamily:'Poppins-SemiBold',fontSize:18}}>New Community</Text>
            <View style={{alignItems:'flex-end',}}>
            <ImageView src={Images.messageheart} imageStyle={{ width:120,height:120,bottom:-20}} />
            </View>
      </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(appStyles)