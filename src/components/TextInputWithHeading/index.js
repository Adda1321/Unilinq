import React, { forwardRef,useState } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
  TextInput,
  Dimensions,
  Text,

} from 'react-native';
import ImageView from '../Image';

import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');

const TextInputWithHeading =(
  (
    {
      profileTextInputContainer,
      ProfileTextInputText,
      textHeading,
      textPlaceHolder,
      handleValidUser,
      textInputChange,
      data,
      ...props
    },
    ref
  ) => {
    
   
    return(
      <>
<View style={[profileTextInputContainer]}>
    <Text style={[ProfileTextInputText]}>{textHeading}</Text>
    {/* <View style={styles.action}>
        <FontAwesome 
            name="user-o"
            color={colors.text}
            size={20}
        /> */}
        <TextInput 
        placeholder={textPlaceHolder}
             placeholderTextColor={'#00035c'}
             style={{fontFamily:'Poppins-Medium'}}
             onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
             onChangeText={(val) => textInputChange(val)}
            // autoCapitalize="none"
            
            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
        />
        
   </View>
   { data.isValidUser && (
    <Animatable.View animation="fadeInLeft" duration={500} style={{alignItems:'flex-start',width:'85%',marginTop:10}}>
    <Text style={{color:'#E4434E',fontFamily:'Poppins-Bold',fontSize:12}}>{data.message}</Text>
    </Animatable.View>
           )
              
               }
               </>
    )
    
  }
);

export default TextInputWithHeading;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10
  }
});
