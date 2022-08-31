import React, {useState, memo} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';

import {appStyles} from '../../style';
import {Card} from 'react-native-shadow-cards';
import ImageView from '../Image/index';
import {Images} from '../../utils';
import DateShow from '../DateShow';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TimeShow from '../TimeShow/';
import ButtonText from '../Button';
import CheckParticipants from '../Participants';
import * as Animatable from 'react-native-animatable';
import CategorySelectBottomSheet from '../../screens/Events/repeatDays';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

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
  timerequired,
  addresscheck,
  participantsRequired,
}) => {
  console.log('Rrrr============>', time);
  const [checkdata, checkNewDate] = useState('');
  const [mincheckdata, mincheckNewDate] = useState('');
  return (
    //   {/* ///////////////////// TIME and LCOATION/////// */}
    <View style={{paddingHorizontal: 0, backgroundColor: '#fff'}}>
      <Text style={styles.timecreateCommunityInfoHeader}> Time & Location</Text>
      {/* ///////////////////////////////////// */}

      <View>
        <Text style={[styles.TextStyle1, {paddingBottom: 0}]}>Location</Text>
        {/* <View
          style={[
            styles.backStyle,
            {
              flexDirection: 'row',
              marginTop: 10,
              paddingHorizontal:20
            },
          ]}> */}

        <GooglePlacesAutocomplete
          disableScroll={false}
          // ListHeaderComponent
          styles={{
            textInputContainer: {
              backgroundColor: '#fff',
              // width: '100%',
              paddingHorizontal: 10,
              height: 56,
              // marginTop: 15,
              // marginRight:20,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: Platform.OS === 'ios' ? 0.05 : 0.1,
              shadowRadius: 5,
              elevation: 5,
            },
            textInput: {
              height: 40,
              color: '#5d5d5d',
              fontSize: 16,
              marginBottom: 3,
              alignSelf: 'center',
            },
            // predefinedPlacesDescription: {
            //   color: '#1faadb',
            // },
          }}
          placeholder={
            communityType == 'In-person'
              ? 'Enter Address...'
              : 'Enter video call link...'
          }
          textInputProps={{
            placeholderTextColor: '#8B86BA',
          }}
          value={val}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log('GOooooooGLE', data.description);
            changetext(data.description);
          }}
          query={{
            key: 'AIzaSyB0sqVkodyj3thO3h7y-aHFdwGn7ZEbvk4',
            language: 'en',
          }}
          renderLeftButton={() => (
            <ImageView
              src={require('../../images/address.png')}
              imageStyle={{width: 16, height: 22, alignSelf: 'center'}}
            />
          )}
        />

        {/* <ImageView
            src={require('../../images/address.png')}
            imageStyle={{width:16,height:22,alignSelf:'center'}}
          /> */}

        {/* <TextInput
            placeholder={communityType == 'In-person' ? 'Enter Address...' : 'Enter video call link...'}
            placeholderTextColor={'#8B86BA'}
            value={val}
            style={styles.TextField}
            maxLength={40}
            // multiline
            onChangeText={(val)=>changetext(val)}
          /> */}
        {/* </View> */}
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
        repeat={'Does not repeat'}
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
          />
        </View>
      </View>
      <View>
        {timerequired?.isValidUser && (
          <Animatable.View
            animation="fadeInLeft"
            duration={500}
            style={{
              alignItems: 'flex-start',
              width: '85%',
              marginTop: 0,
            }}>
            <Text style={styles.warning}>{timerequired?.message}</Text>
          </Animatable.View>
        )}
      </View>
      <View>
        {timend?.isValidUser && (
          <Animatable.View
            animation="fadeInLeft"
            duration={500}
            style={{
              alignItems: 'flex-start',
              width: '85%',
              marginTop: 0,
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

export default memo(TimeLoc);

const styles = StyleSheet.create(appStyles);
