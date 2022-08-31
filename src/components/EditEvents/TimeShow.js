import React, {useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import ImageView from '../Image';

import { appStyles } from '../../style';
import { FontWeights } from '../../utils';

const TimeShow = ({sty,timechecker,times }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, settime] = useState(times);

  const showTimePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = time => {
      
    settime(moment(time).format('LT'))
    timechecker(time,moment(time).format('LT'))
    hideDatePicker();

  };
  console.log("-------------------------------------------------IN TIME EDIT ------------------------------------------------");
  return (
    <View>
      <TouchableOpacity>
        <TouchableOpacity onPress={showTimePicker}>
        <Text style={[styles.TimeTextStyle,{color:sty }]}>{time} </Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );  
};

const styles = StyleSheet.create(appStyles);
export default TimeShow;

