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

const TextInputWithIcon =(
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
    <View style={[inputStyle]}>
        {/* <ImageView src={require('../../images/line.png')} imageStyle={{width:5,height:20,marginLeft:0,alignSelf:'center'}} /> */}
      <TextInput
        style={[
          textStyle,
        ]}
        selectionColor={'black'}
        onChangeText={onPress}
        value={value}
        autoCorrect={false}
        secureTextEntry={hidePass}
        placeholderTextColor={'#B7B7B7'}
        
        // placeholderStyle={{fontFamily:'Poppins-Medium'}}
        {...props}
        // {...{ ref }}
      />
      {/* {password && (
        <TouchableOpacity onPress={() => showPass(!hidePass)}>
          <View style={styles.icon}>
            {hidePass ? (
              <Icon name="eye" size={20} color={'#000'} />
            ) : (
              <Icon name="eye-with-line" size={20} color={'#000'} />
            )}
          </View>
        </TouchableOpacity>
      )} */}
    </View>
  )
);

export default TextInputWithIcon;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10
  }
});
