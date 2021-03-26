import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView,TouchableOpacity } from 'react-native';
export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Image style={{marginLeft:20,height:60,width:60,borderRadius:30}} source={require('../Images/Profile1.png')}/>
            </TouchableOpacity>
            <Text style={{color:'white',marginLeft:20,flex:1,fontSize:15}}>DavidW</Text>
            <View style={{alignItems: 'center',flex:1, position:'absolute',right:100}}>
                <Text style={{color:'#fff'}}>Points</Text>
                <Text style={{color:'#fff'}}>40</Text>
            </View> 
            <View style={{alignItems: 'center',justifyContent: 'center',height:60,width:60,borderRadius:60,borderWidth:3,borderColor:'lightblue'
             , position:'absolute',right:20}}>
            <Image style={{width:30,height:30}}source={require('../Images/logo.png')}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#161D63',
        flexDirection:'row',
        height:100,
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
    },
})
