import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Platform
} from 'react-native';

import ImageView from '../Image/index';
import {FontFamilies, Images} from '../../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouseItems: [
        {
          title: 'O Week!',
          IMG: Images.Rocket,
        },

        {
          title: 'Find Your Course Mates',
          IMG:Images.cup ,
        },
        // {
        //   title: 'Enrolment',
        //   IMG: Images.cup,
        // },
        // {
        //   title: 'Item2',
        //   IMG: Images.Rocket,
        // },
      ],
      products: [
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
        Images.robot,
        Images.lights,
        Images.ground,
        Images.boys,
      ],
    };
  }

  _renderItem = ({item, index}) => {
    return (
      //   <View style={{width: 100, height: 100 ,  backgroundColor:"transparent" , }}>
   <TouchableOpacity style={{marginBottom:20,marginHorizontal:5}} onPress={()=>this.props.navigation.navigate('Oweeks')}>
      <View
        style={{
          backgroundColor: '#F2F3FF',
          //   backgroundColor: 'red',
          marginRight: 15,
          width: wp('33%'),
        //   height: hp('15%'),
          borderRadius: 20,
          marginTop: 18,
         
          shadowColor: 'black',
  shadowOpacity: 0.26,
  shadowOffset: { width: 0, height: 2},
  shadowRadius: 10,
  elevation: 3,

          //   marginLeft: 10,
        //   marginBottom: 20,
        }}>
        {/* <View> */}
        <Text
          style={{
            // flex:1,
            position: 'relative',
            color: '#00035C',
            paddingHorizontal: 13,
            paddingTop: 13,
            fontSize: 14,
             height:120,
            fontFamily: FontFamilies.poppins_semiBold,
           
          }}>
          {item.title}
        </Text>
        
        {/* <ImageView
          src={item.IMG}
          imageStyle={{
            position: 'absolute',
            bottom:0,
            
            
            //   backgroundColor: 'pink',

            //   flex: 1,
            //   width: undefined,
            //   height: undefined,
          }}
        /> */}
        {/* </View> */}
      </View>
      <View style={{alignItems:'flex-end', elevation : 6}}>
      <ImageView   src={item.IMG} imageStyle={{ width:84,height:84,marginTop:-60,marginHorizontal:10}} />
      </View>
      </TouchableOpacity>
      //   </View>
    );
  };
  render() {
    return (
      <View style={{alignItems:'center',elevation:5}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{paddingHorizontal:20}}
          c
          data={this.state.carouseItems}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
