import React,{useLayoutEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Avatar} from 'react-native-elements';
import Dashbord from './Tabs/Dashbord';
import Qrcode from './Tabs/Qrcode';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Raking from './Tabs/Raking';
import Cart from './Tabs/Cart';
import Icon from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function HomeScreen(navigation) {
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         title: <Avatar rounded
    //         source= {require('./Images/avatar1.png')}/> ,
    //         headerStyle:{ backgroundColor:'#171732',height:92},
    //         headerTintStyle:{color:'#fff'},
    //         headerTintColor:{color:'#fff'},
    //     })
    // }, [])



    return (
        <Tab.Navigator initialRouteName="Dashbord"
        activeColor="red"
        inactiveColor="#fff"
        barStyle={{ backgroundColor: '#00001F' }}>
        <Tab.Screen  name="Dashbord" component={Dashbord}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <Image
            source={require('./Images/boxinc.png')}
            style={{ height: 25, width: 25, tintColor:'pink' }}/>
          ),
        }}/>
        <Tab.Screen name="Qrcode" component={Qrcode}
        options={{
            tabBarLabel: false,
            tabBarIcon: ({ color }) => (
              <Image
            source={require('./Images/Qr.png')}
            style={{ height: 25, width: 25, tintColor:'pink' }}/>
            ),
          }}/>
        <Tab.Screen name="Raking" component={Raking} 
        options={{
            tabBarLabel: false,
            tabBarIcon: ({ color }) => (
              <Image
            source={require('./Images/cupinc.png')}
            style={{ height: 25, width: 25, tintColor:'pink' }}/>
            ),
          }}/>
        <Tab.Screen name="Cart" component={Cart} 
        options={{
            tabBarLabel: false,
            tabBarIcon: ({ color }) => (
              <Image
            source={require('./Images/Cartinc.png')}
            style={{ height: 25, width: 25, tintColor:'pink' }}/>
            ),
          }}/>
      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

})
