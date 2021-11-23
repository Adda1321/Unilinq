import React from 'react'
import { View, Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import ImageView from '../../components/Image'
import { Images } from '../../utils'
import { appStyles } from '../../style'
import { useNavigation } from '@react-navigation/native';
export default function index() {
    const navigation = useNavigation();
    return (
        <View style={styles.feedbackContainer}>
            <TouchableOpacity style={styles.feedbackCrossButton} onPress={()=>navigation.goBack()}>
            <ImageView src={Images.cross} imageStyle={styles.feedbackCrossImageView}/>
            </TouchableOpacity>
            <View style={styles.feedbackCourseContainer}>
            <View style={styles.feedbackInnerCourseContainer}>
            <Text style={styles.feedbackHeaderText}>Course Feedback</Text>
            <Text style={styles.feedbackInnerHeaderText}>Your feedback is anonymous</Text>
            <View style={styles.feedbackTextInputContainer}>
            <Text style={styles.feedbackTextInputHeader}>What can we do better?</Text>
                <TextInput 
                placeholder="Hi..."
                     placeholderTextColor={'#00035c'}
                     style={styles.feedbackTextInput}

                    // autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
               
           </View>
           <View style={styles.feedbackBottomButtonContainer}>
               <View  style={styles.feedbackBottomButtonInner}> 
                <Text style={styles.feedbackBottomCancelText}>Cancel</Text>
               </View>
               <View  style={styles.feedbackBottomSendContainer}>
               <Text style={styles.feedbackBottomSendText}>Send</Text>
               <View
  style={styles.feedbackImageVerticalLine}
/>
<ImageView src={Images.short_right2x} imageStyle={styles.feedbackImageLeftArrow}/>
               </View>
           </View>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(appStyles)