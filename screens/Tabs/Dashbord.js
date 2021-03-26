import * as React from 'react';
import {StyleSheet, Text, View,ScrollView ,Animated,Dimmentions,FlatList,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from './Header';

// const {width,height} = Dimmentions.get('window');
const width=360;
const height=480;
const ITEM_WIDTH =width*0.76;
const ITEM_HEIGHT = ITEM_WIDTH*1.57;

const images =[
  require('../Images/Card1.png'),
  require('../Images/Card2.png'),
  require('../Images/Card3.png'),
  require('../Images/Card4.png'),
  require('../Images/Card5.png'),
  require('../Images/Card6.png'),
 
];
const review=[
  'abcd',
  'adfg',
  'hello',
];

const data= images.map((image,index) => ({
  key:String(index),
  photo:image,

}));



export default function Dashbord() {
  const scrollx=React.useRef(new Animated.Value(0)).current;


    return (
        <View style={styles.container}>
          <Header />
          <Text style={{color:'white',position:'absolute',left:10,top:120}}>NEWS</Text>
          <Animated.FlatList
          data={data}
          keyExtractor={item => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event(
            [{nativeEvent:{contentOffset:{x:scrollx}}}],
            {useNativeDriver:true}
          )}
          renderItem={({item,index}) =>{
            const inputRange =[
              (index -1)* width,
              index* width,
              (index + 1)*width,
            ];
            const translateX = scrollx.interpolate({
              inputRange,
              outputRange:[-width * .4,0,width*.4],
            })
            return( 
            <View style={{width,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity>
                <View>
                <View style={{width:ITEM_WIDTH,height:ITEM_HEIGHT,overflow:'hidden',alignItems: 'center',
              borderRadius:18,borderWidth:6,borderColor:'yellow'}}>
              <Animated.Image source={item.photo} style=
              {{width:ITEM_WIDTH,
                height:ITEM_HEIGHT,
                resizeMode:'cover',
              transform:[{translateX,}]
              }}
              />
              <Text>{item.text}</Text>
              </View>
              </View>
              </TouchableOpacity>
            </View>
            );
          }}
          />
         </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00001F',
      },
    
})
