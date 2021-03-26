import React from 'react'
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native'
import Header from './Header'

export default function Qrcode() {
    return (
        <View style={styles.border}>
            <Header/>
            <Text style={{color:'#fff' ,paddingLeft:15,paddingTop:18,fontSize:15}}>DIGITAL MEMBER CARD</Text>
           <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <View style={styles.bar}>
            <Image source={require('../Images/Qrcode.png')} style={styles.qr}/>
        </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    border:{
        flex:1,
        height:'100%',
        backgroundColor:'#00001F',
    },
    bar:{
        backgroundColor:'white',
        borderWidth:6,
        borderColor:'darkgrey',
        height:225,
        width:225,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
qr:{
height:190,
width:190,
},
})
