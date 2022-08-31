import React, {useState,memo} from 'react';
import {Button, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ImageView from '../Image';


import {appStyles} from '../../style';

const DateShow = ({sty,datechecker,valuepass, second,mincheckdata,dates}) => {
  const [check, setCheck] = useState(dates);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = datetime => {
    hideDatePicker();
    var day  = moment(datetime).format('D');
    // console.log("Ffff=====?",day)
    // var newd = new Date(datetime)
    setCheck(moment(datetime).format('D MMMM YYYY'));
    datechecker(datetime,moment(datetime).format('L'))
    
  };
//  console.log("sss========?",second)
  return (
    <View style={{justifyContent:'space-between'}}>
      <TouchableOpacity
        onPress={showDatePicker}
        style={[
          styles.backStyle,
          {
            flexDirection: 'row',
            // width:'80%'
            // paddingRight:50,
            // width: '100%',
            // alignItems:"center",
            // justifyContent:"space-between"
          },
        ]}>
         <ImageView
          src={require('../../images/cal.png')}
          imageStyle={{marginHorizontal: 10,width:21.33 , height:21.33,alignSelf:'center'}}
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
              ? mincheckdata == undefined
                ? new Date()
                : mincheckdata
              : new Date()
          }
          minimumDate={
            second == true
              ? mincheckdata == undefined || mincheckdata == ''
                ? new Date()
                : mincheckdata
              : new Date()
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
