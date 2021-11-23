import React from 'react'
import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ImageView from '../../components/Image';
import { Images } from '../../utils'
import {appStyles} from '../../style'
export default function PrivacyPolicy() {
    const navigation = useNavigation();
    return (
        <View>
     <ScrollView>
             <ImageBackground source={Images.profileMainImage} style={styles.profileImageContainer} resizeMode="cover" >
            <View style={styles.settingTopButtonsContainer}>
            <View style={styles.settingTopButtons}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ImageView  src={Images.left_arrow} imageStyle={styles.profileTopBackImage} />
            </TouchableOpacity>
            </View>
                </View>
            </ImageBackground>
            <View style={{paddingHorizontal:20}}>
                <Text style={{color:'#00035c',fontFamily:'Poppins-Bold',fontSize:38}}>Privacy Policy</Text>
            </View>
            <View style={{backgroundColor:'#fff',borderRadius:10,shadowOffset: {
      width: 0,
      height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  
  elevation: 7, shadowColor: "#000",marginHorizontal:20,marginVertical:10,paddingVertical:20,paddingHorizontal:5}}>
         <Text style={{flex:1,width:'100%',padding:10,flexShrink: 1,fontFamily:'Poppins-Medium'}}>
         Where we rely on your consent as the lawful basis to process your data under the GDPR we
will always ask for you to positively affirm your acceptance. By clicking to accept this Privacy
Policy you acknowledge and agree to be bound by this Privacy Policy.
We note that all contact or other data forms where consent is required to be given by you
include no pre-checked checkboxes so that you are able to freely, affirmatively opt-in. We
will also provide you with notice on the Services specifically detailing what it is that you are
consenting to in clear and plain language as well ensuring that each matter that requires
consent is clearly distinguishable.
For all areas of the Services where consent is given it is just as easily able to be withdrawn
through the appropriate account settings on the Services.
If you believe that consent has not been given freely or in breach of the terms of this Privacy
Policy, please contact us.

         </Text>
         <Text style={{width:'100%',padding:10,fontFamily:'Poppins-Medium'}}>
         Where we rely on your consent as the lawful basis to process your data under the GDPR we
will always ask for you to positively affirm your acceptance. By clicking to accept this Privacy
Policy you acknowledge and agree to be bound by this Privacy Policy.
We note that all contact or other data forms where consent is required to be given by you
include no pre-checked checkboxes so that you are able to freely, affirmatively opt-in. We
will also provide you with notice on the Services specifically detailing what it is that you are
consenting to in clear and plain language as well ensuring that each matter that requires
consent is clearly distinguishable.
For all areas of the Services where consent is given it is just as easily able to be withdrawn
through the appropriate account settings on the Services.
If you believe that consent has not been given freely or in breach of the terms of this Privacy
Policy, please contact us.
         </Text>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create(appStyles)