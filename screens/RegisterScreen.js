import React,{useState,useLayoutEffect} from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableOpacity,Image } from 'react-native';
import {Button,Input} from "react-native-elements";
// import auth from '../firebase';

export default function RegisterScreen({navigation}) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [passwordconf,setPasswordconf]=useState("");
    const [name,setName]=useState("");

    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    // const register = () => {
    //     auth
    //     .createUserWithEmailAndPassword(email,password)
    //     .then((authUser)=>{
    //      authUser.user.updateProfile({
    //          displayName:name,

    //      });
    //     })
    //     .catch((error) => alert(error.message));
    // };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={{color:'#fff',marginBottom:10}}>Profile Picture</Text>
            <View style={{height:100,width:100,borderRadius:100,borderWidth:2,borderColor:'white',justifyContent:'center',alignItems: 'center'}}>
                <Image source={require('./Images/camera.png')}/>
            </View>
            <Text style={{color:'grey',fontSize:12,paddingTop:5}}>Add Profile Picture</Text>
            <View style={styles.textbox}>
                <Text style={{color:'grey'}}>Username</Text>
            <Input style={styles.entertext}  onChangeText={text=>setName(text)} type="text" value={name}/>
            <Text style={{color:'grey'}}>Email</Text>
            <Input style={styles.entertext} onChangeText={text=>setEmail(text)}  type="email" value={email} />
            <Text style={{color:'grey'}}>Password</Text>
            <Input style={styles.entertext} onChangeText={text=>setPassword(text)} secureTextEntry type="password" value={password}/>
            <Text style={{color:'grey'}}>Confirm Password</Text>
            <Input style={styles.entertext} onChangeText={text=>setPasswordconf(text)} secureTextEntry type="password" />
        </View>
        <Button onPress={()=>navigation.navigate("Home")} containerStyle={styles.button} title="CREATE ACCOUNT"/>
        <View style={styles.lowerContainer} >
        <Text style={styles.lowertext}>Have an account?</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Login")}
        ><Text style={styles.lowertext}>  Log in</Text></TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#00001F',
        justifyContent:'center',
        alignItems: 'center',
        height:'100%',
    },
    textbox:{
        width:300,
        marginTop:50,
      },
      button:{
          width:300,
          borderRadius:20,
          marginTop:20,
      },
      lowertext:{
          color:'#fff'
      },
      lowerContainer:{
          flexDirection:'row',
          marginTop:10,
      },
      entertext:{
          color:'#fff'
      },
})
