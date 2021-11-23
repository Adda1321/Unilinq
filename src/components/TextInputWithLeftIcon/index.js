import React, { forwardRef } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
  TextInput,
  Dimensions
} from 'react-native';
import ImageView from '../Image';



const { width } = Dimensions.get('window');

const TextInputWithLeftIcon =(
  (
    {
      inputStyle,
      textStyle,
      onPress,
      value,
      hidePass = false,
      showPass,
      password = false,
      ...props
    },
    ref
  ) => (
    <View style={[inputStyle,{width:'100%',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}]}>
        
      <TextInput
        style={[
          textStyle,
        ]}
        onChangeText={onPress}
        value={value}
        autoCorrect={false}
        secureTextEntry={hidePass}
        placeholderTextColor={'#B7B7B7'}
        
        {...props}
      />
      <ImageView src={require('../../images/search.png')} imageStyle={{width:25,height:25}} />
     
    </View>
  )
);

export default TextInputWithLeftIcon;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10
  }
});
