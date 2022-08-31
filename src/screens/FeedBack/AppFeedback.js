import React from 'react'
import { View, Text,TextInput,TouchableOpacity,StyleSheet,SafeAreaView, Platform } from 'react-native'
import ImageView from '../../components/Image'
import { Images } from '../../utils'
import { appStyles } from '../../style'
import { useNavigation } from '@react-navigation/native';
import ButtonText from '../../components/Button'
export default function index() {
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
            <TouchableOpacity style={styles.feedbackCrossButton} onPress={()=>navigation.goBack()}>
            <ImageView src={Images.cross} imageStyle={styles.feedbackCrossImageView}/>
            </TouchableOpacity>
            <View style={styles.feedbackCourseContainer}>
            <View style={styles.feedbackInnerCourseContainer}>
            <Text style={styles.feedbackHeaderText}>App Feedback</Text>
            <Text style={styles.feedbackInnerHeaderText}>Report bugs or poor app experience</Text>
            <View style={styles.feedbackTextInputContainer}>
            <Text style={styles.feedbackTextInputHeader}>What can we do better?</Text>
                <TextInput 
                placeholder="Hi..."
                     placeholderTextColor={'#00035c'}
                     style={styles.feedbackTextInput}
                     selectionColor={'black'}
                    // autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
               
           </View>
           <View style={styles.feedbackBottomButtonContainer}>
               <View  style={styles.feedbackBottomButtonInner}> 
                <Text style={styles.feedbackBottomCancelText}>Cancel</Text>
               </View>
               <ButtonText text="Send" inputStyle={styles.feedbackBottomSendContainer} />
           </View>
            </View>
            </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(appStyles)