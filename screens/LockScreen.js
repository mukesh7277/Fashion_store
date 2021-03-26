import React ,{useState,useLayoutEffect,useEffect} from 'react';
import { StyleSheet, Text, View ,Image ,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {Button,Input} from "react-native-elements";
// import auth from '../firebase';

export default function LockScreen({navigation}) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    // useEffect(() => {
    //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
    //       console.log(authUser);
    //        if(authUser){
    //            navigation.replace("Home");
    //        }
    //    });
    //    return unsubscribe;
    // }, []);
    
    // const signIn=()=>{
    //     auth
    //     .signInWithEmailAndPassword(email, password)
    //     .catch((error) => alert(error));
    // };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.logo}>
            <Image 
            source={require('./Images/logo.png')}
            />
            </View>
            <View style={styles.textbox}>
                <Text style={{color: 'grey',paddingLeft:15}}>Email</Text>
            <Input color='white' autofocus type="email" value={email} 
            onChangeText={text=>setEmail(text)}/>
            <Text style={{color: 'grey',paddingLeft:15}}>Password</Text>
            <Input color='white' secureTextEntry type="password" value={password}
            onChangeText={text=>setPassword(text)}/>
            <Text style={{color: 'grey',paddingLeft:15}}>Forgot Password</Text>
        </View>
        <Button onPress={()=>navigation.navigate("Home")}
         containerStyle={styles.button} title="LOG IN"/>
        <View style={styles.lowerContainer} >
        <Text style={styles.lowertext}>Don't have account?</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Register")}
        ><Text style={styles.lowertext}>  Create one</Text></TouchableOpacity>
        </View>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#00001F',
        justifyContent:'center',
        alignItems: 'center',
        height:'100%',
        flex:1,
    },
    logo:{
        height:187,
        width:187,
        borderRadius:100,
        borderColor:'#62ACC7',
        borderWidth:2,
        justifyContent:'center',
        alignItems: 'center',
    },
    textbox:{
      width:300,
      marginTop:30,
    },
    button:{
        width:300,
        borderRadius:20,
        marginTop:50,
    },
    lowertext:{
        color:'#fff'
    },
    lowerContainer:{
        flexDirection:'row',
        marginTop:10,
    },
})
