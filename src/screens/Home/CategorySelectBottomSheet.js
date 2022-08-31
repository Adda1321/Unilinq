import React,{useState} from 'react'
import { View, Text ,Dimensions,ScrollView,Image } from 'react-native'
// import CheckBox from '@react-native-community/checkbox';
import {Images} from '../../utils'
import {TouchableOpacity,FlatList} from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import ImageView from '../../components/Image'
import TextInputWithIcon from '../../components/TextInput';
import {appStyles} from '../../style'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const {width,height}  = Dimensions.get('window')
export default function CategorySelectBottomSheet( {
  inputStyle,
  categoryName,
  categoryColor,
  multipleSelect,
  Closed,
  first
}) {
    const [isSelected, setSelection] = useState(false);
    const [searchText , setSearchText] = useState('')
    const [check , setCheck] = useState(false)
    const [products, setProducts] = useState([
      { id: 1, txt: 'View All', isChecked: false },
      { id: 2, txt: 'Special Interest', isChecked: false },
      { id: 3, txt: 'Sports & Games', isChecked: false },
      { id: 4, txt: 'Academic & Faculty', isChecked: false },
      { id: 5, txt: 'Spiritual & religious', isChecked: false },
      { id: 6, txt: 'Political & activicts', isChecked: false },
      { id: 7, txt: 'Cultural & language', isChecked: false },
      { id: 8, txt: 'Other', isChecked: false },
    ]);
    const [arrayholder, setArrayholder] = useState([
      { id: 1, txt: 'View All', isChecked: false },
      { id: 2, txt: 'Special Interest', isChecked: false },
      { id: 3, txt: 'Sports & Games', isChecked: false },
      { id: 4, txt: 'Academic & Faculty', isChecked: false },
      { id: 5, txt: 'Spiritual & religious', isChecked: false },
      { id: 6, txt: 'Political & activicts', isChecked: false },
      { id: 7, txt: 'Cultural & language', isChecked: false },
      { id: 8, txt: 'Other', isChecked: false },
    ]);
    let categorySelect; 
    const filterInterest =(val)=>{
      
      // let prod = products
      const newData = arrayholder.filter(item => {      
        const itemData = `${item.txt.toUpperCase()}`;
        
         const textData = val.toUpperCase();
          
         return itemData.indexOf(textData) > -1;    
      });
      
      // this.setState({ products: newData });  
      setProducts(newData)
      setSearchText(val)
    }
    const handleChange = (id) => {
        if(multipleSelect ==false){
            for (var i = 0; i < products.length; i++) {
              products[i].isChecked = false;
          }
        }
        let temp = products.map((product) => {
        if (id === product.id) {
          return {...product, isChecked: !product.isChecked };
        }
        else {
          return product;
        }
      });
      setProducts(temp);
    };
    const handleSort = (txt,id) =>{
      setCheck(false)
      products[0].isChecked = false;
     
      if(multipleSelect ==true && id==1){
        setCheck(false)
        for (var i = 0; i < products.length; i++) {
          products[i].isChecked = false;
      }
      }
    let temp = products.map((product) => {
    if (id === product.id) {
       
      var arr = {...product, isChecked: !product.isChecked };
      
      return arr
       
    }
    else {
      // setCheck(false)
      return product;
    }
    
  });
  temp.map((item)=>{
    if(item.isChecked == true){
      console.log("ffff==============>",item.isChecked)
      setCheck(true)
    }
  })
  setProducts(temp);
    }
    // console.log("Check------->",check)
    return (
        <View style={appStyles.bottomSheetContainer}>
            <TouchableOpacity style={[appStyles.bottomSheetCategoryButton,inputStyle]} onPress={()=>categorySelect.open()}>
           <View style={appStyles.bottomSheetButtonContainer}>
           <View style={{width:'94%',flexDirection:'row',flexWrap:'wrap',paddingVertical:check == true ?10:0}}>
             { check == true ? products.map((item)=>(
               item.isChecked == true && (
                
                <View style={{backgroundColor:'#00035c',borderRadius:18,marginLeft:10,height:34,marginVertical:5,justifyContent:'center'}}>
                <Text style={[appStyles.checkbottomSheetButtonText]}>{item.txt}</Text>
               </View>
               )
             )) : <Text style={[appStyles.bottomSheetButtonText,categoryColor]}>{categoryName}</Text>}
            </View>
            <View style={appStyles.bottomSheetIconContainer}>
            {/* <Text style={appStyles.bottomSheetIconText}>Any</Text> */}
            <ImageView src={require('../../images/down2x.png')} imageStyle={appStyles.bottomSheetIcon}  />
            </View>
            </View>
            </TouchableOpacity>
            <RBSheet
          ref={ref => {
            categorySelect = ref;
          }}
          closeOnPressMask
          dragFromTopOnly
          animationType="slide"
          closeOnDragDown
          openDuration={500}
          height={height*0.7}
          onClose={() => first==true ?Closed(products) : Closed(products)}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000000'
          },
          draggableIcon: {
            backgroundColor: '#000'
          },
          container: {
            // flex: 8,
            borderRadius: 16,
            backgroundColor:'#FFF'
          }
        }}
        >
             <View style={{flex:1,marginBottom:30}}>
              <TextInputWithIcon
              inputStyle={[
                appStyles.loginTextBox,
                // email.length ? styles.loginActiveTextBox : styles.loginInActiveTextBox,
                // errors.email || errors.global ? styles.loginErrorTextBox : {}
              ]}
              textStyle={[
                appStyles.loginInputText,
                // errors.email || errors.global ? styles.loginErrorText : {}
              ]}
              placeholder="Type your interest or select from the list.."
              
              onPress={(val) => filterInterest(val)}
              value={searchText}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              maxLength={20}
              
            //   onSubmitEditing={() => {
            //     passRef.current?.focus();
            //   }}
            //   onBlur={() => checkEmail()}
            
            />
            <FlatList
      data={ first == true ?products : products.slice(1)}
      renderItem={({item,index})=>(
        
          <ScrollView >
          <View style={[appStyles.flatListContainer]}>
          <CheckBox
  containerStyle ={{backgroundColor: 'transparent'}}
  checkedIcon={<View style={{backgroundColor:'#b7b7b7',borderRadius:4}} ><Icon name="checkbox-marked" size={25} color={'#Efefef'} style={{margin:-2,padding:-2}} /></View>}
  uncheckedIcon={<View style={{backgroundColor:'#b7b7b7',borderRadius:4}} ><Icon name="checkbox-blank" size={25} color={'#Efefef'} style={{margin:-2,padding:-2}} /></View>}  
  checked={item.isChecked}
  onPress={(()=>first==true ?handleSort(item.txt,item.id):handleChange(item.id))}
/>
        {/* <CheckBox
        value={item.isChecked}
        onValueChange={ ()=>handleChange(item.id)}
        tintColors={{ true: '#B7B7B7', false: '#b7b7b7' }}
        tintColor={'black'}
        
        style={{marginBottom:15,marginLeft:5}}
        boxType="square"
      /> */}
      
          <Text style={{color:'#B7B7B7',marginRight:15,fontFamily:'Poppins-Medium'}}>{item.txt}</Text>
          </View>
          {index < products.length -1 && (
            <View
  style={{
    borderBottomColor: '#Efefef',
    borderBottomWidth: 1,
    width:'92%',
    alignSelf:'center',
  }}
/>
          )}
          
          </ScrollView>
      )}
    //   keyExtractor={(item) => item.id}
    //   horizontal
     
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={appStyles.flatListMain}
      // contentInset={{ top: 0, left: 20, bottom: 0, right: 0 }}
    />
            </View>
        </RBSheet>
        </View>
    )
}
