import React from 'react'
import { View, Text,TextInput,TouchableOpacity,StyleSheet, Platform,SafeAreaView } from 'react-native'
import ImageView from '../../components/Image'
import { Images } from '../../utils'
import { appStyles } from '../../style'
import { useNavigation } from '@react-navigation/native';
import ButtonText from '../../components/Button'
export default function index(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[styles.feedbackContainer,{padding:10}]}>
            <View style={{flex:1,backgroundColor:'#fff',shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:Platform.OS === 'ios' ? 0.10: 0.29,
    shadowRadius: 4.65,

    elevation: 7,borderTopRightRadius:40}}>
            <TouchableOpacity style={styles.feedbackCrossButton} onPress={()=>navigation.navigate('Home')}>
            <ImageView src={Images.cross} imageStyle={styles.feedbackCrossImageView}/>
            </TouchableOpacity>
            <View style={styles.feedbackCourseContainer}>
            <View style={styles.feedbackInnerCourseContainer}>
            <Text style={[styles.feedbackHeaderText]}>Event Created</Text>
            {props.route.params.check == true ? 
            <Text style={[styles.feedbackInnerHeaderText,{marginTop:18}]}>Your event is almost created.</Text> :
            <Text style={[styles.feedbackInnerHeaderText,{marginTop:18}]}>Your event is almost ready.</Text>}
            
            <Text style={[styles.feedbackInnerHeaderText,{marginTop:20}]}>Please wait for an approval from admin.</Text>
            <Text style={[styles.feedbackInnerHeaderText,{marginTop:20}]}>This can take upto 5 working days.</Text>
           
           
           
            </View>
           
            </View>
            <TouchableOpacity style={{alignItems:'flex-end',margin:20}} onPress={()=>navigation.navigate('Home')}>
              
                <Text style={{backgroundColor:'#f3f3f4',paddingVertical:5,paddingHorizontal:25,color:'#00035c',fontFamily:'Poppins-Bold',fontSize:16,lineHeight:40,textAlign:'left',textAlignVertical:'top',borderRadius:8}}>Got it</Text>
           </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(appStyles)