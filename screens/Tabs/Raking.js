import React,{useState} from 'react';
import { StyleSheet, Text, View ,ScrollView,Switch,Image } from 'react-native';
import Lists from './Components/Lists';
import Header from './Header';

export default function Raking() {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <Header/>
        <View >
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'#fff',paddingTop:15,paddingLeft:15,fontSize:15}}>RANKING</Text>
            <Text style={{color:'#fff',paddingTop:10,paddingLeft:150,fontSize:12}}>Monthly</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "blue" : "lightblue"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

            <Text style={{color:'#fff',paddingTop:10,paddingLeft:10,fontSize:12}}>Yearly</Text>
            </View>
            <ScrollView>
            <Lists no={1} name={'Henry Ramirez'} rate={178880} img={require('../Images/Profile1.png')} 
            img2={require('../Images/logo1.png')}/>
            <View style={styles.divider}></View>
            <Lists no={2} name={'Kara Cloutier'} rate={15860} img2={require('../Images/logo1.png')} img={require('../Images/profile2.png')}/>
            <View style={styles.divider}></View>
            <Lists no={3} name={'Car; Johnson'} rate={13540} img2={require('../Images/logo3.png')} img={require('../Images/Profile1.png')}/>
            <View style={styles.divider}></View>
            <Lists no={4} name={'Nathan Holt'} rate={11380} img2={require('../Images/logo3.png')} img={require('../Images/profile4.png')}/>
            <View style={styles.divider}></View>
            <Lists no={5} name={'Jade Arnett'} rate={8750} img2={require('../Images/logo5.png')} img={require('../Images/profile5.png')}/>
            <View style={styles.divider}></View>
            <Lists no={6} name={'Vashali R'} rate={7760} img2={require('../Images/logo1.png')} img={require('../Images/profile2.png')}/>
            <View style={styles.divider}></View>
            <Lists no={7} name={'Mukesh Das'} rate={1111} img2={require('../Images/logo1.png')} img={require('../Images/Profile1.png')}/>
            <View style={styles.divider}></View>
            <View style={{height:30}}></View>
        </ScrollView>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00001F',
        height:'100%',

    },
    divider: {
        borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderRadius:100,
    paddingTop:20,  
    },
    
})
