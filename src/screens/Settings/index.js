import React from 'react'
import { View, Text,ImageBackground,StyleSheet,TouchableOpacity,TextInput,ScrollView} from 'react-native'
import {appStyles} from '../../style'
import { Images } from '../../utils'
import ImageView from '../../components/Image'
import ToggleSwitch from 'toggle-switch-react-native'
import { useNavigation } from '@react-navigation/native';
export default function index() {
    const navigation = useNavigation();
    return (
        <View style={styles.settingScreenContainer}>
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
            <View style={styles.settingScreenHeaderTextContainer}>
            <Text style={styles.settingScreenHeaderText}>Settings</Text>
            <View
  style={styles.settingScreenHorizontalLine}
/>
            </View>
            <View style={styles.settingScreenProfileHeader}>
                <Text style={styles.settingScreenProfileText}>Profile</Text>
            </View>
            <View style={styles.settingScreenProfileHeader}>
            <Text style={styles.settingTextInputText}>First Name</Text>
            <View style={styles.settingTextInputContainerTop}>
    
   
        <TextInput 
        placeholder={'Anders'}
             placeholderTextColor={'#00035c'}
             style={{fontFamily:'Poppins-Medium'}}

            // autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
        />
       
   </View>
   </View>
   <View style={{paddingHorizontal:20,paddingTop:5}}>
            <Text style={styles.settingTextInputText}>Last Name</Text>
            <View style={styles.settingTextInputContainerTop}>
    
   
        <TextInput 
        placeholder={'Anders'}
             placeholderTextColor={'#00035c'}
             style={{fontFamily:'Poppins-Medium'}}

            // autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
        />
       
   </View>
   </View>
   <View style={styles.settingScreenEducationHeader}>
                <Text style={styles.settingScreenEducationHeaderText}>Education</Text>
            </View>
            <View style={styles.settingTextInputContainer} >
    
   
        <Text style={styles.settingScreenEducationText}>Swinburne University of Technology</Text>
       
   </View>
   <View style={styles.settingTextInputContainer} >
    
    
        <Text style={styles.settingScreenEducationCertificate}>Certificate III in Information, Digital...</Text>
       
   </View>
   <View style={styles.settingScreenProfileHeader}>
                <Text style={styles.settingScreenProfileText}>Account & Security</Text>
            </View>
            <View style={styles.settingScreenEmailContainer}>
            <Text style={styles.settingTextInputText}>Email address</Text>
            <View style={styles.settingTextInputContainerTop}>
    
        <TextInput 
        placeholder={'hananwaqar7@gmail.com'}
             placeholderTextColor={'#00035c'}
             style={{fontFamily:'Poppins-Medium'}}

            // autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
        />
       
   </View>
   </View>
   <View style={styles.settingScreenProfileHeader}>
                <Text style={styles.settingScreenProfileText}>Updates</Text>
            </View>
  
            <View style={styles.settingScreenToggleContainer}>
                <Text style={styles.settingScreenToggleContainerText} >Push Notifications</Text>
            <ToggleSwitch
  isOn={false}
  onColor="white"
  offColor="green"
  label=""
  labelStyle={{ color: "black", fontWeight: "900" }}
  size="medium"
  onToggle={isOn => console.log("changed to : ", isOn)}
/>
</View>
<View
  style={styles.settingScreenHorizontal}
/>
<View style={styles.settingScreenToggleContainer}>
                <Text style={styles.settingScreenToggleContainerText} >Email Update</Text>
            <ToggleSwitch
  isOn={false}
  onColor="white"
  offColor="green"
  label=""
  labelStyle={{ color: "black", fontWeight: "900" }}
  size="medium"
  onToggle={isOn => console.log("changed to : ", isOn)}
/>
</View>
<View
  style={styles.settingScreenHorizontal}
/>
<TouchableOpacity style={styles.settingScreenToggleContainer} onPress={()=>navigation.navigate('PrivacyPolicy')}>
                <Text style={styles.settingScreenToggleContainerText} >Privacy Policy</Text>
</TouchableOpacity>
<View
  style={styles.settingScreenHorizontal}
/>
<TouchableOpacity style={styles.settingScreenToggleContainer} onPress={()=>navigation.navigate('TermsAndConditions')}>
                <Text style={styles.settingScreenToggleContainerText} >Terms & Conditions</Text>
</TouchableOpacity>
<View
  style={styles.settingScreenHorizontal}
/>
<View style={styles.settingScreenToggleContainer}>
                <Text style={styles.settingScreenToggleContainerText} >Contact Us</Text>
</View>
<View
  style={styles.settingScreenHorizontal}
/>
<TouchableOpacity style={styles.settingScreenToggleContainer} onPress={()=>navigation.navigate('AccountClosure')}>
                <Text style={styles.settingScreenToggleContainerText}>Close Account</Text>
</TouchableOpacity>
<View
  style={styles.settingScreenHorizontal}
/>

<View  style={styles.settingUpdateButtonContainer}>
               <Text style={styles.settingUpdateButtonText}>Update</Text>
               <View
  style={styles.settingScreenVerticalLine}
/>
<ImageView src={Images.short_right2x} imageStyle={styles.settingScreenRightArrow}/>
               </View>
   </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create(appStyles)