import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet,ImageBackground,ScrollView } from 'react-native'
import ImageView from '../../components/Image'
import {appStyles} from '../../style'
import TextInputWithLeftIcon from '../../components/TextInputWithLeftIcon';
import {Images} from '../../utils'
import { Card } from "react-native-shadow-cards";
export default class index extends React.Component{
    constructor(props){
        super(props)
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
    onTabClick = (currentTab) => {
        console.log("Array====>",currentTab)
       this.setState({
         currentTab: currentTab,
       });
     };
    render(){
        return (
            <View>
             
                 <View style={styles.searchScreenContainer}>
                    <View style={styles.searchScreenLeftArrowContainer}>
                     <TouchableOpacity style={styles.searchUserInnerContainer} onPress={()=>this.props.navigation.goBack()}>
                     <ImageView src={require('../../images/short_left.png')} imageStyle={styles.searchDetailsShortLeft}  />       
                       </TouchableOpacity>
                      </View>
                   
                  
                    <View  style={styles.searchScreenInsertKeyword}>
                    <TextInputWithLeftIcon
                  inputStyle={[
                    appStyles.searchLoginTextBox,
                    // email.length ? styles.loginActiveTextBox : styles.loginInActiveTextBox,
                    // errors.email || errors.global ? styles.loginErrorTextBox : {}
                  ]}
                  textStyle={[
                    // appStyles.searchBoxInputText,
                    // errors.email || errors.global ? styles.loginErrorText : {}
                  ]}
                  placeholder="Insert keyword"
                  
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyLabel="next"
                  returnKeyType="next"
                />
                      </View>
                   
                      </View>
                      <View style={{flex:1}}>
                     <View style={styles.searchtabs}> 
                             <View style={styles.searchScreenTabBarContainer} >
                             <View style={[styles.searchhomeScreenTab]}>
     
     
                          <Text
                            onPress={() => {
                              this.onTabClick(1);
                            }}
                            style={[
                              styles.searchtabTextStyle,
                              this.state.currentTab === 1 ? styles.tabUnderline : null,
                            ]}>
                          All
                          </Text>
                          </View>
                          <View style={[styles.searchhomeScreenTab,{marginLeft:5}]}>
                          <Text
                            onPress={() => {
                              this.onTabClick(2);
                            }}
                            style={[
                              styles.searchtabTextStyle,
                              this.state.currentTab === 2 ? styles.tabUnderline : null,
                            ,{marginLeft:10}]}>
                           Profiles
                          </Text>
                         </View>
                         <View style={[styles.searchhomeScreenTab,{marginLeft:5}]}>
                          <Text
                            onPress={() => {
                              this.onTabClick(3);
                            }}
                            style={[
                              styles.searchtabTextStyle,
                              this.state.currentTab === 3 ? styles.tabUnderline : null,
                            ,{marginLeft:10}]}>
                           Communities
                          </Text>
                         </View>
                         <View style={[styles.searchhomeScreenTab,{marginLeft:5}]}>
                          <Text
                            onPress={() => {
                              this.onTabClick(4);
                            }}
                            style={[
                              styles.searchtabTextStyle,
                              this.state.currentTab === 4 ? styles.tabUnderline : null,
                            ,{marginLeft:10}]}>
                           Events
                          </Text>
                         </View>
                         
                         </View>
                         
                         </View>
                         <View
  style={{
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginTop:5
  }}
/>


                        {/* < CategorySelectBottomSheet /> */}
                        {this.state.currentTab === 1 && (
                      <View style={[styles.searchhomeScreenCard]}>
                        <ScrollView>
                      <Text style={{color:'#8b86ba',paddingHorizontal:10,paddingTop:10,fontFamily:'Poppins-Bold',fontSize:14,paddingHorizontal:12}}>Profiles</Text>
                      
                      <View style={styles.searchScreenCardContainer}>
            {this.state.products.map((product, index) => {
              return (
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => {
                     this.props.navigation.navigate('UserScreen')
                    }}
                  >
                    <Card
                      style={[styles.searchScreenhomeScreenCard,{justifyContent:'center'}]}
                    >
                    <View style={styles.searchScreenCardInnerContainer}>
                      <View style={styles.searchScreenCardProfileView}>
                    <ImageView  src={Images.ground} imageStyle={styles.searchScreenProfileImage}  />
                    <Text style={styles.searchScreenUserName}>Marni O'Connell</Text>
                    <Text style={styles.searchScreenUserCategory}>Activities</Text>
                  </View>
                   <View style={styles.searchScreenChatContainer}>
                    <ImageView  src={Images.chat} imageStyle={styles.searchScreenChatImage}  />
                   </View>
                    {/* <ImageView src={Images.chat} style={{width:25,height:25,backgroundColor:'#000'}} /> */}
              
               </View>
                    </Card>
                  </TouchableOpacity>
                </View>
              );
            })}
                          </View>
                          </ScrollView>
                  </View>
                        )
        } 
        
        {this.state.currentTab === 2 && (
                      <View style={[styles.searchhomeScreenCard]}>
                        <ScrollView>
                      <Text style={{color:'#8b86ba',paddingHorizontal:10,paddingTop:10,fontFamily:'Poppins-Bold',fontSize:14,paddingHorizontal:12}}>Profiles</Text>
                      
                      <View style={styles.searchScreenCardContainer}>
            {this.state.products.map((product, index) => {
              return (
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => {
                     this.props.navigation.navigate('UserScreen')
                    }}
                  >
                    <Card
                      style={[styles.searchScreenhomeScreenCard,{justifyContent:'center'}]}
                    >
                    <View style={styles.searchScreenCardInnerContainer}>
                      <View style={styles.searchScreenCardProfileView}>
                    <ImageView  src={Images.ground} imageStyle={styles.searchScreenProfileImage}  />
                    <Text style={styles.searchScreenUserName}>Marni O'Connell</Text>
                    <Text style={styles.searchScreenUserCategory}>Activities</Text>
                  </View>
                   <View style={styles.searchScreenChatContainer}>
                    <ImageView  src={Images.chat} imageStyle={styles.searchScreenChatImage}  />
                   </View>
                    {/* <ImageView src={Images.chat} style={{width:25,height:25,backgroundColor:'#000'}} /> */}
              
               </View>
                    </Card>
                  </TouchableOpacity>
                </View>
              );
            })}
                          </View>
                          </ScrollView>
                  </View>
                        )
        } 
         {this.state.currentTab === 3 && (
                      <View style={[styles.searchhomeScreenCard]}>
                        <ScrollView>
                      <Text style={{color:'#8b86ba',paddingHorizontal:10,paddingTop:10,fontFamily:'Poppins-Bold',fontSize:14,paddingHorizontal:12}}>Profiles</Text>
                      
                      <View style={styles.searchScreenCardContainer}>
            {this.state.products.map((product, index) => {
              return (
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => {
                     this.props.navigation.navigate('UserScreen')
                    }}
                  >
                    <Card
                      style={[styles.searchScreenhomeScreenCard,{justifyContent:'center'}]}
                    >
                    <View style={styles.searchScreenCardInnerContainer}>
                      <View style={styles.searchScreenCardProfileView}>
                    <ImageView  src={Images.ground} imageStyle={styles.searchScreenProfileImage}  />
                    <Text style={styles.searchScreenUserName}>Marni O'Connell</Text>
                    <Text style={styles.searchScreenUserCategory}>Activities</Text>
                  </View>
                   <View style={styles.searchScreenChatContainer}>
                    <ImageView  src={Images.chat} imageStyle={styles.searchScreenChatImage}  />
                   </View>
                    {/* <ImageView src={Images.chat} style={{width:25,height:25,backgroundColor:'#000'}} /> */}
              
               </View>
                    </Card>
                  </TouchableOpacity>
                </View>
              );
            })}
                          </View>
                          </ScrollView>
                  </View>
                        )
        } 
                   {this.state.currentTab === 4 && (
                      <View style={[styles.searchhomeScreenCard]}>
                        <ScrollView>
                      <Text style={{color:'#8b86ba',paddingHorizontal:10,paddingTop:10,fontFamily:'Poppins-Bold',fontSize:14,paddingHorizontal:12}}>Profiles</Text>
                      
                      <View style={styles.searchScreenCardContainer}>
            {this.state.products.map((product, index) => {
              return (
                <View style={{}}>
                  <TouchableOpacity
                    onPress={() => {
                     this.props.navigation.navigate('UserScreen')
                    }}
                  >
                    <Card
                      style={[styles.searchScreenhomeScreenCard,{justifyContent:'center'}]}
                    >
                    <View style={styles.searchScreenCardInnerContainer}>
                      <View style={styles.searchScreenCardProfileView}>
                    <ImageView  src={Images.ground} imageStyle={styles.searchScreenProfileImage}  />
                    <Text style={styles.searchScreenUserName}>Marni O'Connell</Text>
                    <Text style={styles.searchScreenUserCategory}>Activities</Text>
                  </View>
                   <View style={styles.searchScreenChatContainer}>
                    <ImageView  src={Images.chat} imageStyle={styles.searchScreenChatImage}  />
                   </View>
                    {/* <ImageView src={Images.chat} style={{width:25,height:25,backgroundColor:'#000'}} /> */}
              
               </View>
                    </Card>
                  </TouchableOpacity>
                </View>
              );
            })}
                          </View>
                          </ScrollView>
                  </View>
                        )
        }           
                 
              
        
               
                        
                        
                </View>
            </View>
        )
    }
   
}
const styles = StyleSheet.create(appStyles)