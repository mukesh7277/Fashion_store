import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity, ImageBackground} from 'react-native';
import Header from './Header';

export default function Cart() {
    return (
        <View style={styles.container}>
            <Header/>
            <Text style={{color:'white',fontSize:17,marginLeft:-300,paddingTop:24}}>SHOP</Text>
            <ScrollView>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
            <View style={styles.box1}>
                 <View style={{flexDirection:'row'}}>
                     <View style={{marginLeft:11.42,marginTop:7.34}}>
                     <Text style={styles.text1}>200</Text>
                     <Text style={styles.text2}>POINTS</Text>
                     </View>
                     {/* startbucslogo */}
                     <Image source={require('../Images/starbucslogo.png')}
                     style={{height:38.37,width:37.48,marginTop:8.9,marginLeft:51.11}}/>
                 </View>
                 {/* starbuxcup */}
                 <Image source={require('../Images/starbucs.png')} style={{marginLeft:-140,marginTop:47,height:100}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.box2}>
              <Image source={require('../Images/applelogo.png')} style={{marginLeft:10,marginTop:8}}/>
              <Image source={require('../Images/apple.png')} style={{marginLeft:60,marginTop:-20}}/>
              <View style={{marginLeft:10,marginTop:-25}}>
              <Text style={styles.text1}>500</Text>
              <Text style={styles.text2}>POINTS</Text>
              </View>
              </View>
              </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row'}}>
                  <TouchableOpacity>
              <View style={styles.box3}>
              <Image  style={{marginLeft:10,marginTop:8}}/>
              <View style={{marginLeft:10,marginTop:-5}}>
              <Text style={styles.text1}>300</Text>
              <Text style={styles.text2}>POINTS</Text>
              <Image source={require('../Images/Addidas.png')} style={{marginLeft:-3,marginTop:8 }}/>
              </View>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
                  <View style={styles.box4}>
                  <Image  style={{marginLeft:10,marginTop:30}}/>
              <View style={{marginLeft:10,marginTop:-5}}>
              <Text style={styles.text1}>100</Text>
              <Text style={styles.text2}>POINTS</Text>
              <Image source={require('../Images/spotify.png')} style={{marginLeft:-50,marginTop:-120 }}/>
                  </View>
                  </View>
                  </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row'}}>
               <View style={styles.box5}>
                   <View style={{flexDirection:'row'}}>
               <Image source={require('../Images/netflixlogo.png')} style={{marginLeft:10,marginTop:10}}/>
              <View style={{marginLeft:35,marginTop:5}}>
              <Text style={{color:'grey',
                 fontWeight:'bold'}}>200</Text>
              <Text style={{color:'grey',
                 fontSize:10}}>POINTS</Text>
              </View>
              <Image source={require('../Images/Netflix.png')} style={{marginLeft:-160,marginTop:34 }}/>
               </View>
               </View>
               <View style={styles.box6}></View>
              </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#00001F',
        height:'100%',
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
text1:{
    color:'white',
    fontWeight:'bold',
},
text2:{
    color:'white',
    fontSize:10,
},
box1:{
    height:149,
    width:148,
    marginLeft:26,
    marginTop:21,
    backgroundColor:'#00643C',
    flexDirection:'row',
    borderRadius:10,
    overflow:'hidden',
},
box2:{
    borderRadius:10,
    backgroundColor:'#1C1C1C',
    height:186,
    width:148,
    marginLeft:12,
    marginTop:21,
    overflow:'hidden',

},
box3:{
    height:149,
    width:148,
    backgroundColor:'#0F68D7',
    marginLeft:26,
    borderRadius:10,marginTop:-15,
    overflow:'hidden',
},
box4:{
backgroundColor:'#BE84FF',
height:186,
    width:148,
    marginLeft:12,
    borderRadius:10,
    marginTop:20,
    overflow:'hidden',
},
box5:{
    height:149,
    width:148,
    backgroundColor:'#F5F5F5',
    marginLeft:26,
    borderRadius:10,marginTop:-50,
    overflow:'hidden',
},
box6:{
    backgroundColor:'#E59323',
height:186,
    width:148,
    marginLeft:12,
    borderRadius:10,
    marginTop:20,
    overflow:'hidden',
},
})
