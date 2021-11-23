import React,{useState} from 'react'
import { View, Text,TextInput,TouchableOpacity ,StyleSheet,ScrollView } from 'react-native'
import ImageView from '../../components/Image'
import { Images } from '../../utils'
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {appStyles} from '../../style'
export default function index() {
    const [isSelected, setSelection] = useState(false);
    const navigation = useNavigation();
    return (
        <View style={styles.reportMemberContainer}>
            <ScrollView>
            <TouchableOpacity style={styles.reportMemberBackButton} onPress={()=>navigation.goBack()}>
            <ImageView src={Images.cross} imageStyle={styles.reportMemberBackImage}/>
            </TouchableOpacity>
            <View style={styles.reportMemberInnerContainer}>
            <View style={styles.reportMemberHeader}>
            <Text style={styles.reportMemberHeaderText}>Report Member</Text>
           <View style={styles.reportMemberCheckboxContainer}>
            <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        tintColors={{ true: '#F15927', false: '#B7B7B7' }}
        
      />
            <Text style={styles.reportMembetCheckboxText}>Report anonymously</Text>
            </View>
            <View style={styles.reportMemberCheckboxContainerTwo}>
            <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        tintColors={{ true: '#F15927', false: '#B7B7B7' }}
       
      />
            <Text style={styles.reportMembetCheckboxText}>It’s okay to contact me</Text>
            </View>
            <View style={[styles.settingTextInputContainerTop,{marginTop:25}]}>
    
    {/* <View style={styles.action}>
        <FontAwesome 
            name="user-o"
            color={colors.text}
            size={20}
        /> */}
        <TextInput 
        placeholder={'Reason'}
             placeholderTextColor={'#B7B7B7'}
             style={{fontFamily:'Poppins-Medium'}}

            // autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
        />
       
   </View>
   <TouchableOpacity style={styles.reportMemberUploadImageContainer}>
        <View style={styles.reportMemberImageInnerContainer}>
               <View >
                   <ImageView src={Images.gallery} imageStyle={{width:45,height:45}}/>
                   </View>
                   <View style={styles.reportMemberUploadTextContainer}>
                   <Text style={styles.reportMemberUploadTextOne}>Upload an image (.jpg .png)</Text>
                   <Text style={styles.reportMemberUploadTextTwo}>828 x 628 px (Recommended)</Text>
                   </View>
                   </View>
                   <View >
                       <ImageView src={Images.upload} imageStyle={styles.reportMemberUploadIcon} />
                   </View>
               </TouchableOpacity>
            <View style={styles.reportMemberMessageInputContainer}>
            <Text style={styles.reportMemberMessageText}>Your message</Text>
                <TextInput 
                placeholder="Please mention when and where did this occur?
                Was it in a direct message or a community chat? 
                please mention the community chat name."
                     placeholderTextColor={'#00035c'}
                     style={styles.reportMemberMessageInput}
                     
                      multiline={true}
                      numberOfLines={5}
                    // autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
               
           </View>
           <View style={styles.reportMemberSendContainer}>
               
               <View  style={styles.reportMemberSendInnerContainer}>
               <Text style={styles.reportMemberSendText}>Send</Text>
               <View
  style={{
  borderLeftWidth: 1,
  borderLeftColor: '#8b86ba',
  marginLeft:10,
  }}
/>
<ImageView src={Images.short_right2x} imageStyle={styles.reportMemberRightArrow}/>
               </View>
           </View>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create(appStyles)