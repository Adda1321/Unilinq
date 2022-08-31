import React,{useState} from 'react'
import { View, Text,TextInput,SafeAreaView,TouchableOpacity ,StyleSheet,ScrollView } from 'react-native'
import ImageView from '../../components/Image'
import { Images } from '../../utils'
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {appStyles} from '../../style'
import SimpleTextInput from '../../components/SimpleInput';
export default function index() {
    const [isSelected, setSelection] = useState(false);
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
            <ScrollView>
            <TouchableOpacity style={styles.reportMemberBackButton} onPress={()=>navigation.goBack()}>
            <ImageView src={Images.cross} imageStyle={styles.reportMemberBackImage}/>
            </TouchableOpacity>
            <View style={styles.reportMemberInnerContainer}>
            <View style={styles.reportMemberHeader}>
            <Text style={styles.reportMemberHeaderText}>Report Member</Text>
           <View style={styles.reportMemberCheckboxContainer}>
           <CheckBox
  containerStyle ={{backgroundColor: 'transparent'}}
  checkedIcon={<View style={{backgroundColor:'#b7b7b7',borderRadius:4}} ><Icon name="checkbox-marked" size={25} color={'#Efefef'} style={{margin:-2,padding:-2}} /></View>}
  uncheckedIcon={<View style={{backgroundColor:'#b7b7b7',borderRadius:4}} ><Icon name="checkbox-blank" size={25} color={'#Efefef'} style={{margin:-2,padding:-2}} /></View>}  
  checked={false}
//   onPress={(()=>handleChange(item.id))}
/>
            <Text style={styles.reportMembetCheckboxText}>Report anonymously</Text>
            </View>
            <View style={styles.reportMemberCheckboxContainerTwo}>
            <CheckBox
  containerStyle ={{backgroundColor: 'transparent'}}
  checkedIcon={<View style={{backgroundColor:'#b7b7b7',borderRadius:4}} ><Icon name="checkbox-marked" size={25} color={'#Efefef'} style={{margin:-2,padding:-2}} /></View>}
  uncheckedIcon={<View style={{backgroundColor:'#b7b7b7',borderRadius:4}} ><Icon name="checkbox-blank" size={25} color={'#Efefef'} style={{margin:-2,padding:-2}} /></View>}  
  checked={false}
//   onPress={(()=>handleChange(item.id))}
/>
            <Text style={styles.reportMembetCheckboxText}>It’s okay to contact me</Text>
            </View>
           
   <View style={{ paddingTop: 5}}>
       

          <SimpleTextInput
            inputStyle={styles.settingTextInputContainerTop}
            placeholder={'Reason'}
            handleValidUser={(val, data) => console.log("Ddd",val, data)}
            data={'lastName'}
            textInputChange={txt => console.log("Ddd",txt)}
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
                     selectionColor={'black'}
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
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(appStyles)