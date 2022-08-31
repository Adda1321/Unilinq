import React, { forwardRef } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import ImageView from '../Image';
import { appStyles } from '../../style'
import { Images } from '../../utils'
import { widthPercentageToDP } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

const ButtonText = (
  (
    {
      inputStyle,
      text,
      GoNext,
      ...props
    },
    ref
  ) => (
    <TouchableOpacity style={inputStyle} onPress={GoNext} {...props}>
      <View style={{ justifyContent: 'center',paddingHorizontal: widthPercentageToDP('2%') }}>
        <Text style={[styles.settingButtonTextStyle,]}>{text}</Text>
      </View>
      <View
        style={styles.feedbackImageVerticalLine}
      />
      <ImageView src={Images.short_right2x} imageStyle={styles.feedbackImageLeftArrow} />
    </TouchableOpacity>

  )
);

export default ButtonText;

const styles = StyleSheet.create(appStyles);
