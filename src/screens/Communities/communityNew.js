import React,{useState} from 'react'
import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,TextInput ,ScrollView,Dimensions } from 'react-native'
import { Images } from '../../utils'
import ImageView from '../../components/Image'
import { appStyles } from '../../style'
import { useNavigation } from '@react-navigation/native';
import CategorySelectBottomSheet from '../Home/CategorySelectBottomSheet'
import {Icon} from 'react-native-elements';
import ToggleSwitch from 'toggle-switch-react-native'
import TagInput from 'react-native-tags-input';
const mainColor = '#000';
export default class communityNew extends React.Component  {
    
    constructor(props) {
        super(props);
        this.state = {
          tags: {
            tag: '',
            tagsArray: []
          },
          tagsColor: mainColor,
          tagsText: '#000',
        };
      }
      updateTagState = (state) => {
        this.setState({
          tags: state
        })
      };
    render(){
    return (
        <View style={{backgroundColor:'#fff',flex:1}}>
<ScrollView>
             <ImageBackground source={Images.backgroundtwo} style={styles.createCommunityImageContainer} resizeMode="cover" >
            <View style={styles.communityCreateTopButtonsContainer}>
            <View style={styles.createCommunityTopButtonsContainer}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <ImageView  src={Images.left_arrow} imageStyle={styles.profileTopBackImage} />
            </TouchableOpacity>
            </View>
                </View>
            </ImageBackground>
            <View style={{paddingHorizontal:20,}}>
            <Text style={{color:'#00035c',fontFamily:'Poppins-Bold',fontSize:32}}>New Community</Text>
           <View style={{flexDirection:'row',backgroundColor:'rgba(139, 134, 186,0.1)',justifyContent:'space-around',paddingHorizontal:5,marginTop:10,paddingVertical:20,borderRadius:10,borderColor:'#E0E0E0',borderWidth:1}}>
              
               <TouchableOpacity style={{backgroundColor:'rgba(99, 240, 164,0.8)',width:'47%',alignSelf:'center',height:55,justifyContent:'center',borderRadius:10,}} >
                   <Text style={{color:'#00035c',fontFamily:'Poppins-SemiBold',fontSize:16,textAlign:'center',alignSelf:'center',paddingTop:3}}>Social</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{backgroundColor:'#ECECEC',width:'47%',alignItems:'center',height:55,justifyContent:'center',borderRadius:10}}>
                   <Text style={{color:'#00035c',fontFamily:'Poppins-SemiBold',fontSize:16,textAlign:'center',paddingTop:3}}>Study</Text>
               </TouchableOpacity>
               
           </View>
            </View>
            <View style={{
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
    marginTop:30
  }}
/>
<View style={{padding:20}}>
    <View>
    <Text style={{color:'#E0E0E0',fontFamily:'Poppins-Bold',fontSize:28}}>Info</Text>
    </View>
    <View >
            <Text style={styles.settingTextInputText}>Group Name</Text>
            <View style={styles.communityNewTextInputContainerTop}>
    
    {/* <View style={styles.action}>
        <FontAwesome 
            name="user-o"
            color={colors.text}
            size={20}
        /> */}
        <TextInput 
        placeholder={'Mountain Biking Crew'}
             placeholderTextColor={'#8b86ba'}
             style={{fontFamily:'Poppins-Medium'}}
            

            // autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
        />
       
   </View>
   </View>
   <View style={{marginTop:15}}>
   < CategorySelectBottomSheet inputStyle={{margin:0,height:60}} categoryName={'Select category'} categoryColor={{color:'#8b86ba'}} />
   </View>
   <View style={{backgroundColor:'#fff',width:'100%',paddingHorizontal:20,paddingVertical:5,marginTop:15,borderRadius:10,shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7, shadowColor: "#000",height:250}}>
            <Text style={{
            //    backgroundColor: '#fff',
               borderTopLeftRadius: 30,
               borderTopRightRadius: 30,
            //    paddingHorizontal: 20,
                color: '#8b86ba',
                fontFamily:'Poppins-Medium',
                fontSize:14,
                marginBottom:-10,
                paddingTop:5

            }}>Group Description</Text>
            {/* <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                /> */}
                <TextInput 
                placeholder="Hi..."
                     placeholderTextColor={'#00035c'}
                     style={{fontFamily:'Poppins-Medium'}}

                    // autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
               
           </View>
           <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#fff',alignItems:'center',paddingLeft:20,height:70,marginTop:15,borderRadius:10,shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7, shadowColor: "#000",justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
               <View >
                   <ImageView src={Images.gallery} imageStyle={{width:45,height:45}}/>
                   </View>
                   <View style={{marginLeft:15,justifyContent:'center'}}>
                   <Text style={{color:'#00035c',fontFamily:'Poppins-Medium',fontSize:12}}>Upload an image (.jpg .png)</Text>
                   <Text style={{color:'#B7B7B7',fontFamily:'Poppins-Medium',fontSize:10}}>828 x 628 px (Recommended)</Text>
                   </View>
                   </View>
                   <View >
                       <ImageView src={Images.upload} imageStyle={{width:60,height:60}} />
                   </View>
               </TouchableOpacity>
               <View style={{backgroundColor:'#fff',shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7, shadowColor: "#000",marginTop:15,borderRadius:10,height:200}}>
               <TagInput
          updateState={this.updateTagState}
          tags={this.state.tags}
          placeholder="#text goes here"  
          placeholderTextColor={'#00035c'}                    
          label='Tags (please add upto 5 tags)'
          style={{fontFamily:'Poppins-Medium',width:'100%',fontSize:14}}
          labelStyle={{color: '#B7B7B7',fontFamily:'Poppins-Medium',fontSize:14,paddingHorizontal:5}}
        //   leftElement={<Icon name={'tag-multiple'} type={'material-community'} color={this.state.tagsText}/>}
        //   leftElementContainerStyle={{marginLeft: 3}}
          containerStyle={{width: (Dimensions.get('window').width - 40)}}
          inputContainerStyle={[styles.tagsTextInput],{color:'blue',marginTop:-7}}
          inputStyle={{color: '#00035c'}}
          onFocus={() => this.setState({tagsColor: '#000', tagsText: mainColor})}
          onBlur={() => this.setState({tagsColor: mainColor, tagsText: '#fff'})}
          autoCorrect={false}
          tagStyle={styles.Tag}
          deleteIconStyles={{tintColor:'#fff'}}
          tagTextStyle={styles.tagText}
          keysForTag={', '}/>
                   </View>
                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:20}}>
                <Text style={{color:'#00035c',fontFamily:'Poppins-SemiBold',fontSize:17}} >Private group</Text>
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
<View>
    <Text style={{color:'#BDBDBD',fontFamily:'Poppins-Medium',fontSize:14}}>Members will need to request to join</Text>
    </View>
    <View  style={{backgroundColor:'#00035c',width:'45%',borderRadius:10,padding:15,marginTop:20,flexDirection:'row',justifyContent:'space-around'}}>
               <Text style={{color:'#fff',fontFamily:'Poppins-Bold',fontSize:18}}>Next</Text>
               <View
  style={{
  borderLeftWidth: 1,
  borderLeftColor: '#8b86ba',
  marginLeft:10,
  }}
/>
<ImageView src={Images.short_right2x} imageStyle={{width:22,height:18,marginHorizontal:10,alignSelf:'center'}}/>
               </View>
</View>

</ScrollView>
        </View>
    )
}
}
const styles = StyleSheet.create(appStyles)