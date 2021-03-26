import React from 'react'
import { StyleSheet, Text, View,Image ,ImageBackground} from 'react-native'

export default function Lists(props) {
    return (
        <View style={{flexDirection:'row'}}>
            <Text style={styles.textItem}>{props.no}</Text>
            <Image source={props.img} style={styles.image}/>
            <View>
            <Text style={styles.textItem}>{props.name}</Text>
            <View style={{flexDirection:'row',marginLeft:25}}>
            <Text style={styles.textItembottom}>⭐</Text>
            <Text style={styles.textItembottom}>{props.rate}</Text>
            </View>
            </View>
        <ImageBackground style={{height:40,width:40,marginTop:50,position:'absolute',right:50}} source={props.img2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textItem: {
        color:'#fff',
        marginLeft:30,
        marginTop:50,
        fontWeight:'bold',
    },
    image:{
        height:50,
        width:50,
        borderRadius:50,
        marginTop:45,
        marginLeft:15
    },
    textItembottom:{
        color:'#fff',
        marginLeft:5,
        marginTop:7,
    },
})
