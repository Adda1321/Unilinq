import React, {useState, memo} from 'react';
import {Button, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ImageView from '../Image';
import {Images} from '../../utils';

import {appStyles} from '../../style';

const DateShow = ({sty, datechecker, valuepass, second, mincheckdata}) => {
  const [check, setCheck] = useState('YY DD, MM');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    if(second == true && mincheckdata == '') {
    alert("Please select event start date first")
    }
    else {
        setDatePickerVisibility(true);
    }
   
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = datetime => {
    hideDatePicker();
    var day = moment(datetime).format('D');
    // console.log("Ffff=====?",day)
    // var newd = new Date(datetime)
    setCheck(moment(datetime).format('D MMMM YYYY'));
    datechecker(datetime, moment(datetime).format('L'));
  };
  // console.log('sss========?', typeof mincheckdata);
  
  // {console.log('MinimumDate------------------------->',mincheckdata )}
  // {console.log('MaximumDate------------------------->', second)}
  // {console.log('ValuePass------------------------->', valuepass)}
  
  return (
    <View style={{justifyContent: 'space-between'}}>
      <TouchableOpacity
        onPress={showDatePicker}
        style={[
          styles.backStyle,
          {
            flexDirection: 'row',
          },
        ]}>
        <ImageView
          src={require('../../images/cal.png')}
          imageStyle={{
            marginHorizontal: 10,
            width: 21.33,
            height: 21.33,
            alignSelf: 'center',
          }}
        />
        <Text
          style={[
            styles.TextStyle,
            {paddingTop: sty, fontSize: 15, color: '#8B86BA'},
          ]}>
          {check}{' '}
        </Text>
      </TouchableOpacity>
      <View>
        

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          minimumDate={
            second == true
              ? mincheckdata == undefined || mincheckdata == ''
                ? new Date()
                : mincheckdata
              : new Date()
          }
          maximumDate={
            second == false
              ? valuepass.toString() == ''
                ? new Date(2052, 7, 5)
                : valuepass
              : new Date(2052, 7, 5)
          }
          date={new Date()}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create(appStyles);
export default memo(DateShow);
