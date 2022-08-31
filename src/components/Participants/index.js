import React, {useState} from 'react';
import {Button, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import ImageView from '../Image';
import {FontWeights, Images} from '../../utils';
import {appStyles} from '../../style';

import {CheckBox} from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CheckParticipants = ({dropdownCheck, unlimitedCheck}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
  ]);
  const [defaultvalue, setDefaultValue] = useState('0');
  _dropdown_6_onSelect = (idx, value) => {
    // console.log('Dsssswwqqqqq===========>');
    dropdownCheck(idx, value);
    unlimitedCheck(check);
    if (value == '0') {
      setcheck(false);
    } else {
      setcheck(true);
    }
  };

  const [check, setcheck] = useState(false);
  checkUnlimited = () => {
    unlimitedCheck(check);
    setcheck(!check);
    if (check == true) {
      setDefaultValue('0');
      dropdownCheck(0, '0');
    }
  };
  const _dropdown_5_show = () => {
    _dropdown_5 && _dropdown_5.open();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
      }}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: -15}}>
        <CheckBox
          containerStyle={{backgroundColor: 'transparent'}}
          checkedIcon={
            <View style={{backgroundColor: '#b7b7b7', borderRadius: 4}}>
              <Icon
                name="checkbox-marked"
                size={25}
                color={'#Efefef'}
                style={{margin: -2, padding: -2}}
              />
            </View>
          }
          uncheckedIcon={
            <View style={{backgroundColor: '#b7b7b7', borderRadius: 4}}>
              <Icon
                name="checkbox-blank"
                size={25}
                color={'#Efefef'}
                style={{margin: -2, padding: -2}}
              />
            </View>
          }
          checked={!check}
          onPress={() => {
            checkUnlimited();
          }}
        />
        {/* <CheckBox
                center
                size={30}
                checked={!check}
                type="material-community"
                containerStyle={{backgroundColor: 'pink',paddingTop:15,}}
                onPress={() => {
                  checkUnlimited();
                }}
              /> */}
        <Text
          style={[
            {
              color: '#00035C',
              letterSpacing: -1.2,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
              marginLeft: -10,
            },
          ]}>
          unlimited participants
        </Text>
      </View>
      {/* <View style={[styles.backStyle,{width:90,marginTop:0}]}>
                <Text style={[styles.TextStyle,{textAlign:"center" , paddingTop:15}]}>0</Text>
              </View> */}
             
      <TouchableOpacity
        onPress={() => _dropdown_5_show}
        // disabled
        style={[
          styles.backStyle,
          {width: 90, marginTop: 0, justifyContent: 'center'},
        ]}>
        <ModalDropdown
          ref={el => (_dropdown_5 = el)}
          onSelect={(idx, value) => _dropdown_6_onSelect(idx, value)}
          dropdownStyle={{height: 140, width: '20%'}}
          textStyle={{
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
            color: '#8b86ba',
          }}
          style={{
            marginHorizontal: 6,
            fontSize: 14,
            color: 'white',
            textAlign: 'center',
            width: 90,
            // backgroundColor:'red',
            fontFamily: 'Poppins-Medium',
            textAlignVertical: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          defaultValue={defaultvalue}
          options={items}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CheckParticipants;

const styles = StyleSheet.create(appStyles);
