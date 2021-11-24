import React,{useEffect} from 'react'
import { View, Text , StyleSheet,TouchableOpacity,Dimensions,ScrollView,ImageBackground } from 'react-native'
import {appStyles} from '../../style'
import ImageView from '../../components/Image'
import {Images} from '../../utils'
import * as _ from 'lodash';
import { Card } from "react-native-shadow-cards";
import CategorySelectBottomSheet from './CategorySelectBottomSheet'
  const { height, width } = Dimensions.get("window");
  const halfWidth = width / 2;
  import {connect} from 'react-redux';
  import {loginUser} from  '../../components/actions/index';
import Communites  from '../../components/Communites'
 class index extends React.Component {
    constructor(props){
        super(props)
        this.props.dispatch(loginUser());
        this.state={
          currentTab: 1,
          products:[
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
          studyproducts:[
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
            Images.robot,
            Images.lights,
            Images.ground,
            Images.boys,
            Images.robot,
            Images.lights
          ]
      }
    
    }
   
  componentDidMount(){
    // const chunkedElements = _.chunk(this.state.products, 10)
    
    //  let pixels =10
    //  let response = (pixels*100)/height
    //  console.log("DataFont=====>",response)
    
  }

  
        navigateApp=(index)=>{
           
         console.log("Index=====>",index)
         }
         onTabClick = (currentTab) => {
           console.log("Array====>",currentTab)
          this.setState({
            currentTab: currentTab,
          });
        };
      
         render(){
           console.log("Data======>",this.props.users)
            return (
                <View style={styles.homeScreenMainContainer}>
                  <ScrollView contentContainerStyle={styles.homeScreenScrollContainer}>
                {/* <ImageView  src={Images.homeTop}  imageStyle={styles.blackBack}  /> */}
                <ImageBackground source={Images.homeTop} style={styles.homeScreenImageContainer} resizeMode="cover" imageStyle={{borderBottomRightRadius:60}}>
                <View style={styles.joinCommunityTextTwo}>
                <View style={styles.profilebarMainContainer}>
                 <View style={styles.profilebarInnerContainer}>
                   <View style={styles.profilebarButtonContainer}>
                     <TouchableOpacity style={styles.profilebarButton} onPress={()=>this.props.navigation.navigate('Profile')}>
                     <Text style={styles.profilebarButtonText}>{'A'}</Text>
                     </TouchableOpacity>
                     <View style={{flexDirection:'row',paddingTop:3}}>
                     <Text style={styles.profilebarText}>Hi,</Text>
                     <Text style={styles.profilebarTextT}>Anders</Text>
                     </View>
                     <View style={{flexDirection:'row',alignItems:'center'}}>
                     <TouchableOpacity onPress={()=>this.props.navigation.navigate('Search')}>
                     <ImageView src={require('../../images/search.png')} imageStyle={styles.profilebarSearchImage}  />
                     </TouchableOpacity>
                     <TouchableOpacity onPress={()=>this.props.navigation.navigate('CommunityCreate')}>
                     <ImageView src={Images.plus} imageStyle={styles.profilebarPlusImage}  />
                    </TouchableOpacity>
                     </View>
                     </View>
                    
                   </View>
                   <View style={styles.profilebarMessageImageContainer}>
                  <View style={{backgroundColor:'red',alignItems:'flex-end',width:17,height:11,alignSelf:'flex-end',position:'absolute',bottom:39,borderRadius:6,right:1,padding:1}}>
                    <Text style={{fontFamily:'Poppins-Bold',fontSize:6,color:'#fff',textAlign:'center',alignItems:'center',alignSelf:'center'}}>25</Text>
                    
                    </View>
                    <ImageView src={require('../../images/message.png')} imageStyle={{width:22,height:22,alignSelf:'center',marginTop:0,borderRadius:2}}  />
                     </View>
                  
                  
                  </View>
                  
                </View>
                <View style={{position:'absolute',bottom:-25}} >
                <Text style={styles.joinCommunityText}>Join a Community</Text>
                <TouchableOpacity style={styles.topContainer}>
                
                  <TouchableOpacity style={styles.landingScreenContainer} onPress={()=>this.props.navigation.navigate('CommunityCreate')}>
                 
                    <Text style={styles.dayText}>Create New Community</Text>
                    <View style={{ height: 30,
    width: 1,
    backgroundColor: '#909090',}} />
                    <ImageView  src={Images.short_right}  imageStyle={styles.homeScreenImage} />
                  </TouchableOpacity>
                </TouchableOpacity>
                </View>
                </ImageBackground>
               
                
                <View style={{flex:1}}>
                 <View style={styles.tabs}> 
                         <View style={{flexDirection:'row'}} >
                         <View style={[styles.homeScreenTab,]}>
 
 
                      <Text
                        onPress={() => {
                          this.onTabClick(1);
                        }}
                        style={[
                          styles.tabTextStyle,
                          this.state.currentTab === 1 ? styles.homeScreenbottomLine : null,
                        ]}>
                      Social
                      </Text>
                      </View>
                      <View style={[{marginLeft:5}]}>
                      <Text
                        onPress={() => {
                          this.onTabClick(2);
                        }}
                        style={[
                          styles.tabTextStyle,
                          this.state.currentTab === 2 ? styles.homeScreenbottomLine : null,
                        ,{marginLeft:10}]}>
                       Study
                      </Text>
                     </View>
                    
                     
                     </View>
                     </View>
                    < CategorySelectBottomSheet inputStyle={{margin:10,height:50,marginHorizontal:15}} categoryName={'Category'} categoryColor={{color:'#B7B7B7'}} />
                    {this.state.currentTab === 1 && (
                      <View style={{flex:1}}>
                 
              
                      
                 <Communites ProfilesData={this.state.products} categoryEnable={true} navigation={this.props.navigation}/>

        
    </View>
                    )
    } 
    
    
    {this.state.currentTab === 2 && (
                      <View style={{flex:1}}>
                 
              
                 <Communites ProfilesData={this.state.products} categoryEnable={true} navigation={this.props.navigation}/>

        
    </View>
                    )
    } 
                        
             
          
    
           
                    
                    
            </View>
            </ScrollView>
              </View>
            )
         }
  
}
function mapStateToProp(state) {
  return {
    users: state.users
  }
}
const styles = StyleSheet.create(appStyles)
export default connect(mapStateToProp)(index);