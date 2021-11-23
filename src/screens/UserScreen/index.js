import React from 'react'
import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'
import {appStyles} from '../../style'
import { Images } from '../../utils'
import ImageView from '../../components/Image'
import ToggleSwitch from 'toggle-switch-react-native'
import { useNavigation } from '@react-navigation/native';
import TextInputWithHeading from '../../components/TextInputWithHeading'
export default function index() {
    const navigation = useNavigation();
    const CommunityArray=[
        'MCU Gaming Union',
        'BHS Code',
        'MEL U AFL Fan',
        'Bachelor of Design'

    ]
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
         <ScrollView >
              <ImageBackground source={Images.profileMainImage} style={styles.profileImageContainer} resizeMode="cover" >
              <View style={styles.settingTopButtonsContainer}>
            <View style={styles.settingTopButtons}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ImageView  src={Images.left_arrow} imageStyle={styles.profileTopBackImage} />
            </TouchableOpacity>
            </View>
                </View>
                <TouchableOpacity style={styles.profileImageLayout} onPress={()=>imageOptionsSelect.open()}>
                <Text style={styles.profileImageLayoutText}>A</Text>
            </TouchableOpacity> 
            
            </ImageBackground>
            <View style={styles.profileUserInfoContainer}>
                <Text style={styles.profileUserNameText}>Anders Chow</Text>
                <Text style={styles.profileUserDescriptionText}>Certificate lll In information, Digital Media And Technology</Text>
                <View style={styles.userProfileChatContainer}>
                <ImageView src={Images.chat} imageStyle={styles.userProfileChatIcon} />
                <Text style={styles.userProfileChatText}>Direct Message</Text>
            </View>
            <TextInputWithHeading profileTextInputContainer={[styles.profileTextInputContainer]}  ProfileTextInputText={[styles.ProfileTextInputText]} textHeading=" Bio"  textPlaceHolder="Jesus stole my wheel... just saying" />
            <View style={styles.userProfileCommunityContainer}>
                <Text style={styles.userProfileCommunityHeaderText}>5 communities</Text>
            <View>
            <View style={styles.userProfileCommunityList}>
                {CommunityArray.map((item)=>(
                   <View style={styles.userProfileCommunityListContainer}>
                    <Text style={styles.userProfileCommunityListText}>{item}</Text>
                    </View>
                ))}
                </View>
                </View>
            </View>
            <TouchableOpacity style={styles.userProfileCommunityButton} onPress={()=>navigation.navigate('ReportMember')}>
                <Text style={styles.userProfileCommunityButtonText}>Report this member</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create(appStyles)