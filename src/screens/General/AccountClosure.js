import React , {useState} from 'react'
import { View, Text,ImageBackground,TouchableOpacity,StyleSheet,ScrollView,FlatList,TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ImageView from '../../components/Image';
import { Images } from '../../utils'
import {appStyles} from '../../style'
import CheckBox from '@react-native-community/checkbox';
export default function AccountClosure() {
    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);
    const List=[
        'Not useful',
        'I have finished uni',
        'Too busy/too distracting',
        'Privacy Concerns',
        'Concerned about my data',
        'Trouble getting started',
        'Too difficult to use',
        'Other',
        // 'Other'
    ]
    return (
        <View style={{backgroundColor:'#fff',flex:1}}>
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
            <View>
                <Text style={{color:'#00035c',paddingHorizontal:20,fontFamily:'Poppins-Bold',fontSize:32,marginBottom:20}}>Account closure</Text>
                <View
  style={{
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
  }}
/>
                <Text style={{paddingHorizontal:20,fontFamily:'Poppins-Medium',color:'#B7B7B7',marginTop:20}}>Why would you like to close yout account?</Text>
            {/* <View
  style={{
  borderLeftWidth: 1,
  borderLeftColor: '#8b86ba',
  marginLeft:10,
  }}
/> */}
            </View>
            <View style={{marginTop:20}}>
            <FlatList
      data={List}
      renderItem={({item,index})=>(
          <View >
          <View style={appStyles.accountClosureflatListContainer}>
        <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        tintColors={{ true: '#F15927', false: '#B7B7B7' }}
        style={{marginBottom:15,marginLeft:5}}
      />
          <Text style={{color:'#B7B7B7',marginRight:15,marginBottom:15,fontFamily:'Poppins-Medium',}}>{item}</Text>
         
          </View>
         <View style={{alignItems:'center',marginLeft:20}}>
          {index < List.length && (
            <View
  style={{
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
    width:'92%',
    alignSelf:'center'
  }}
/>

          )}
          </View>
          </View>
      )}
    //   keyExtractor={(item) => item.id}
    //   horizontal
     
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={appStyles.accountClosureflatListMain}
      // contentInset={{ top: 0, left: 20, bottom: 0, right: 0 }}
    />
    </View>
    <View style={{backgroundColor:'#fff',paddingHorizontal:20,paddingVertical:5,marginTop:40,borderRadius:10,shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7, shadowColor: "#000",height:250,marginHorizontal:20,marginBottom:20}}>
            <Text style={{
            //    backgroundColor: '#fff',
               borderTopLeftRadius: 30,
               borderTopRightRadius: 30,
            //    paddingHorizontal: 20,
                color: '#B7B7B7',
                fontFamily:'Poppins-Medium',
                fontSize:14,
                marginBottom:-10,
                paddingTop:5

            }}>Please share any other reasons here*optional</Text>
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
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create(appStyles)