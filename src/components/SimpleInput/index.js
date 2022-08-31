import React, { forwardRef } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
  TextInput,
  Dimensions,
  Text
} from 'react-native';
import { appStyles } from '../../style';
import ImageView from '../Image';



const { width } = Dimensions.get('window');

const SimpleTextInput =(
  (
    {
      inputStyle,
      textStyle,
      onPress,
      // value,
      handleValidUser,
      textInputChange,
      data,
      hidePass = false,
      showPass,
      password = false,
      ...props
    },
    ref
  ) => (
      <>
    <View style={[inputStyle]}>
        <TextInput 
             placeholderTextColor={'#8b86ba'}
             style={styles.searchTextInputStyle}
            
             onEndEditing={(e)=>handleValidUser(e.nativeEvent.text,data)}
             onChangeText={(val) => textInputChange(val)}
             selectionColor={'black'}
             {...props}
             // autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
        />
        </View>
        
        </>
  )
);

export default SimpleTextInput;

const styles = StyleSheet.create(appStyles);
