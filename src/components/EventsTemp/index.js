import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import { appStyles } from '../../style';
import { Card } from 'react-native-shadow-cards';

import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
const isSameDate = (dateA, dateB) => {
  return dateA.toISOString() === dateB.toISOString();
};
const Events = ({ ProfilesData, type,searchEventsDetailshomeScreenCard,searchDetailshomeScreenCardImage,navigation,date,all }, ref) => {
  const [imageLoad, setImageLoad] = useState(false)
  var count =false
  var count1 =false
  return (
    <View>
      {ProfilesData?.map((product, index) => {

        if(Platform.OS === 'android') {
          var dataformat1 = ProfilesData[index]?.event_start_date ;
          var dataformat = moment(dataformat1, 'MM-DD-YYYY').format(
            'MMM ddd DD',
          );
          if (dataformat != 'Invalid date') {
            var myArray = dataformat.split(' ');
            var weekday = myArray[0];
            // console.log("myArray------------------------------------->",myArray);
            // // var secondArray = myArray[1].split(' ');
            var day = myArray[2];
            var month = myArray[1];
          } else {
            var weekday = '';
            var day = '';
            var month = '';
          }
            
        }
        else {
          var dataformat = moment(ProfilesData[index]?.event_start_date).format('llll');
       
          var myArray = dataformat.split(",");
          var weekday = myArray[0]
          var secondArray = myArray[1].split(" ") 
          var day = secondArray[2]
          var month = secondArray[1]
        }
       
        if(index != 0){
          if(ProfilesData[index-1]?.event_start_date == ProfilesData[index]?.event_start_date){
            console.log("Rrrrr=======>?",ProfilesData[index])
            count = false
          }
          else {
            
            count1 =false
            count = true
          }
        }
        else {
          count = true
        }
       
        
       
        
       
        return(
           product.event_category == 'O week' && (
        <View style={{ marginTop: date == true ? 15 : 0 }}>
           { count == true && date && (
           <View
           style={{
           borderBottomColor: '#b7b7b7',
           width:'100%',
           borderBottomWidth: 1,
           alignSelf:'center',
           marginTop:20,
           
           }}
           />  
          )}
          { count == true && date && (
            <View style={{marginHorizontal:20,marginTop:8,marginBottom:10,flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontFamily:'Poppins-Bold',fontSize:32,color:'#00035c'}}>{day}</Text>
            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:12,color:'#b7b7b7',alignSelf:'flex-end'}}>{month.substring(0,3)}{" | "}</Text>
            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:12,color:'#b7b7b7',alignSelf:'flex-end'}}>{weekday.substring(0,3)}</Text>
            </View>
          )}
          <TouchableOpacity
            // disabled
            onPress={() => {
             navigation.navigate('eventDetails', { data: product });
            }} style={{ alignItems: 'center' }}>
            <Card style={[searchEventsDetailshomeScreenCard]}>
            {imageLoad == false && (
                  <ShimmerPlaceHolder LinearGradient={LinearGradient} style={[searchDetailshomeScreenCardImage, { position: 'absolute', zIndex: 100 }]} />
                )}
              <ImageBackground
                style={[searchDetailshomeScreenCardImage]}
                source={{uri:product.event_image}}
                resizeMode="cover" onLoadStart={() => Platform.OS === 'android' ? console.log("Ok") :setImageLoad(false)}
                onLoadEnd={() => setImageLoad(true)}>
                    {product.number > 1 && (
                <View style={styles.communityDetailshomeScreenCardView}>
                  {/* <ImageView  src={Images.public}  imageStyle={{width:15,height:15}}  /> */}
                  <Text style={styles.communityDetailsCardImageText}>{product.number -1}</Text>
                  <Text style={styles.communityDetailsCardImageTextTwo}>
                    attendees
                  </Text>
                </View>
                     )}
                <View style={styles.comhomeScreenCardView}>

                  <Text
                    style={styles.sportscommunityPublicText}>
                   {product.event_category}
                  </Text>
                </View>
              </ImageBackground>
            </Card>
            <View style={{ width: '100%' }}>
              <Text style={[styles.communityDetailsCardImageDateText,]}>
                {weekday}{','} {month} {day} {product.event_start_time}
              </Text>
              <Text style={styles.communityDetailsCardDetailsText}>
                {product.event_name}
              </Text>
            </View>
          </TouchableOpacity>
         
        </View>
          ) 
   
        )
        
          })}
    </View>
  );
};
export default Events;
const styles = StyleSheet.create(appStyles);
