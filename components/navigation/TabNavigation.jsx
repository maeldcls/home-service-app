import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import Colors from '@/app/utils/Colors';


const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.PRIMARY
      }} >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{color:color, fontSize:12,marginTop:-7}}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name="Booking" component={BookingScreen} 
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{color:color, fontSize:12,marginTop:-7}}>Booking</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          )
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{color:color, fontSize:12,marginTop:-7}}>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          )
        }}/>
    </Tab.Navigator>
  )
}