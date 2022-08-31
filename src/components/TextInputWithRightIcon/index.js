import React, {forwardRef} from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
  TextInput,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import ImageView from '../Image';

const {width} = Dimensions.get('window');

const TextInputWithLeftIcon = (
  {
    inputStyle,
    textStyle,
    onPress,
    value,
    hidePass = false,
    showPass,
    password = false,
    textInputChange,
    loading,
    ...props
  },
  ref,
) => {
  
  return(
  <View
    style={[
      inputStyle,
      {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
      },
    ]}>
         <ImageView
     src={require('../../images/address.png')}
     imageStyle={{width: 16, height: 22,marginLeft:-3,marginTop:-1}}
     // Color="#00035c"
   />
    <TextInput
      style={[textStyle]}
      onChangeText={onPress}
      value={value}
      autoCorrect={false}
      secureTextEntry={hidePass}
      placeholderTextColor={'#B7B7B7'}
      onChangeText={(val) => textInputChange(val)}
      selectionColor={'black'}
     
      {...props}
    />
     
   
  </View>
  )
};

export default TextInputWithLeftIcon;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
});
