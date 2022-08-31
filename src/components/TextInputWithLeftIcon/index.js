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
    {loading == true ? 
    <ActivityIndicator size="small" color="#0000ff" />
     :  <ImageView
     src={require('../../images/searchkeyword.png')}
     imageStyle={{width: 25, height: 25,marginLeft:-3,marginTop:-1}}
     // Color="#00035c"
   />}
   
  </View>
  )
};

export default TextInputWithLeftIcon;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
});
