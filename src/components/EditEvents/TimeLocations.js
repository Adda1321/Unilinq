import React, {useState, memo} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';

import {appStyles} from '../../style';
import {Card} from 'react-native-shadow-cards';
import ImageView from '../Image/index';
import {Images} from '../../utils';
import DateShow from './DateShow';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TimeShow from './TimeShow';
import ButtonText from '../Button';
import CheckParticipants from './participants';
import * as Animatable from 'react-native-animatable';
import CategorySelectBottomSheet from '../../screens/Events/repeatDays';
import moment from 'moment';
const TimeLoc = ({
  timecheck,
  time,
  timend,
  datecheck,
  category,
  dropdownCheck,
  unlimitedCheck,
  val,
  changetext,
  communityType,
  timestart1,
  timeend1,
  datestart1,
  dateend1,
  monthsId,
  addresscheck,
  participantsRequired,
  participantsNumber,
  unlimitedParticipants,
}) => {
  var [month, day, year] = datestart1.split('/');

  var isoFormattedStr = `${year}-${month}-${day}`;

  var date = new Date(isoFormattedStr);
  var [month, day, year] = dateend1.split('/');

  var isoFormattedStr1 = `${year}-${month}-${day}`;

  var date1 = new Date(isoFormattedStr1);
  console.log(
    'Rrrddsssssr===============================>',
    month,
  );
  const [checkdata, checkNewDate] = useState(date1);
  const [mincheckdata, mincheckNewDate] = useState(date);
  return (
    //   {/* ///////////////////// TIME and LCOATION/////// */}
    <View style={{paddingHorizontal: 0, backgroundColor: '#fff'}}>
      <Text style={styles.createCommunityInfoHeader}> Time & Location</Text>
      {/* ///////////////////////////////////// */}

      <View>
        <Text style={[styles.TextStyle1, {paddingBottom: 0}]}>Location</Text>
        <View
          style={[
            styles.backStyle,
            {
              flexDirection: 'row',
              marginTop: 10,
              paddingHorizontal: 20,
            },
          ]}>
          <ImageView
            src={require('../../images/address.png')}
            imageStyle={{width: 16, height: 22, alignSelf: 'center'}}
          />

          <TextInput
            placeholder={
              communityType == 'In-person'
                ? 'Enter Address...'
                : 'Enter video call link...'
            }
            placeholderTextColor={'#8B86BA'}
            value={val}
            maxLength={40}
            style={styles.TextField}
            onChangeText={val => changetext(val)}
          />
        </View>
        {addresscheck?.isValidUser && (
          <Animatable.View
            animation="fadeInLeft"
            duration={500}
            style={{
              alignItems: 'flex-start',
              width: '85%',
              marginTop: 10,
            }}>
            <Text style={styles.warning}>
              {communityType == 'In-person'
                ? addresscheck.message
                : 'Please fill location field'}
            </Text>
          </Animatable.View>
        )}
      </View>
      {/* /////////////////////////////////////////// */}
      {/* //////START////// */}

      <Text style={[styles.TextStyle1, {paddingBottom: 0}]}>Start</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 0,
          justifyContent: 'space-between',
        }}>
        <View style={{width: '60%'}}>
          <DateShow
            sty={18}
            datechecker={(val, res) => {
              datecheck(val, res, 'start'), mincheckNewDate(val);
            }}
            valuepass={checkdata}
            second={false}
            dates={datestart1}
          />
        </View>

        <View
          style={[
            styles.backStyle,
            styles.TimeStyle,
            ,
            {justifyContent: 'space-around'},
          ]}>
          <Text style={styles.TextStyleTime}>Time</Text>
          {/* TIME1 */}
          <TimeShow
            sty={'#00035C'}
            timechecker={(val, res) => timecheck(val, res, 'start')}
            times={timestart1}
          />
        </View>
      </View>
      <View>
        {time?.isValidUser && (
          <Animatable.View
            animation="fadeInLeft"
            duration={500}
            style={{
              alignItems: 'flex-start',
              width: '85%',
              marginTop: 10,
            }}>
            <Text style={styles.warning}>
              This date/time has already passed
            </Text>
          </Animatable.View>
        )}
      </View>
      {/* ///////////REPEAT////// */}

      {/* <View
        style={[
          styles.backStyle,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 25,
          },
        ]}>
        <TextInput placeholder={'Repeat'} placeholderTextColor={'#B7B7B7'} style={styles.greyText} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.TextStyle1,{marginTop:0,paddingHorizontal: 7,}]}>Does Not Repeat</Text>

          <Image source={Images.DownArrow} style={{marginRight: 8 , backgroundColor:"transparent"}} />
        </View>
      </View> */}
      <CategorySelectBottomSheet
        inputStyle={{marginVertical: 10}}
        categoryName={'Repeat'}
        categoryColor={{color: '#B7B7B7'}}
        multipleSelect={false}
        first={false}
        repeat={monthsId}
        Closed={data => category(data)}
      />

      {/* //////  END  ////// */}

      <Text style={[styles.TextStyle1, {paddingBottom: 0}]}>End</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 0,
          justifyContent: 'space-between',
        }}>
        <View style={{width: '60%'}}>
          <DateShow
            sty={18}
            datechecker={(val, res) => {
              datecheck(val, res, 'end'), checkNewDate(val);
            }}
            valuepass={checkdata}
            second={true}
            mincheckdata={mincheckdata}
            dates={dateend1}
          />
        </View>

        <View
          style={[
            styles.backStyle,
            styles.TimeStyle,
            ,
            {justifyContent: 'space-around'},
          ]}>
          <Text style={styles.TextStyleTime}>Time</Text>
          {/* TIME1 */}
          <TimeShow
            sty={'#00035C'}
            timechecker={(val, res) => timecheck(val, res, 'end')}
            times={timeend1}
          />
        </View>
      </View>
      <View>
        {timend?.isValidUser && (
          <Animatable.View
            animation="fadeInLeft"
            duration={500}
            style={{
              alignItems: 'flex-start',
              width: '85%',
              marginTop: 10,
            }}>
            <Text style={styles.warning}>
              This date/time has already passed
            </Text>
          </Animatable.View>
        )}
      </View>

      {/* ////// check box ///////// */}

      <CheckParticipants
        dropdownCheck={(id, value) => dropdownCheck(id, value)}
        unlimitedCheck={val => unlimitedCheck(val)}
        participantsNumber={participantsNumber}
        unlimitedParticipants={participantsNumber}
      />
      {participantsRequired?.isValidUser && (
        <Animatable.View
          animation="fadeInLeft"
          duration={500}
          style={{
            alignItems: 'flex-start',
            width: '85%',
            marginTop: 10,
          }}>
          <Text style={styles.warning}>{participantsRequired.message}</Text>
        </Animatable.View>
      )}
    </View>
  );
};

// export default TimeLoc;
export default memo(TimeLoc);
const styles = StyleSheet.create(appStyles);
