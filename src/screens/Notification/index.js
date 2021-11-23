import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,ScrollView } from 'react-native'
import ImageView from '../../components/Image'
import {appStyles} from '../../style'
import { Images } from '../../utils'
import { useNavigation } from '@react-navigation/native';
export default function index() {
    const navigation = useNavigation();
    const notificationsScreen = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
    ]
    return (
        <View style={styles.notificationContainer}>
           <ScrollView >
            <View style={styles.notificationTopButtonsContainer}>
            <View style={styles.settingTopButtons}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ImageView  src={Images.left_arrow} imageStyle={styles.profileTopBackImage} />
            </TouchableOpacity>
            </View>
                </View>
             <View style={styles.notificationHeaderContainer}>
             <Text style={styles.notificationHeaderText}>Notification</Text>
             </View>
             
             {notificationsScreen.map((item,index)=>(
                <View style={styles.notificationContainerList}>
                <View style={styles.notificationListing}>
                <Text style={styles.notificationListingDot}>{'\u2B24'}</Text>
                 <Text style={styles.notificationListingText}>A new community community name has been created</Text>
                </View>
                <View style={styles.notificationListingSecond}>
                <Text style={styles.notificationListingSecondText}>Jump in to meet legends like yourself!</Text>
                </View>
            </View>
             ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create(appStyles)