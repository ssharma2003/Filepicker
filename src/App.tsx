import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import Todo from './screens/Todo'
import Aws from './screens/Aws'
import {ModalPortal} from 'react-native-modals'
import Profile from './screens/Profile'
import Chat from './screens/Chat'
import FullChat from './screens/FullChat'
import FilePickerManager from 'react-native-file-picker'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function ChatStack() {
  return (
    <Stack.Navigator initialRouteName='Chat' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name='FullChat' component={FullChat}/>
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ToDo" component={Todo} options={{
          tabBarLabel:'ToDo',
          tabBarLabelStyle:{color:'black', fontSize:12},
          headerShown:false,
          tabBarIcon:({focused})=>
          focused?
          (<Icon name="tasks" size={24} color="#f0c44d"/>):
          (<Icon name="tasks" size={24} color="black"/>)
          }}/>

        <Tab.Screen name='Profile' component={Profile} 
        options={{
          
          tabBarLabel:'Profile',
          tabBarLabelStyle:{color:'black', fontSize:12},
          headerShown:false,
          tabBarIcon:({focused})=>
          focused?
          (<Icon name="user-circle" size={24} color="#f0c44d"/>):
          (<Icon name="user-circle" size={24} color="black"/>)
          }}/>

        <Tab.Screen name='Chat' component={ChatStack} 
        options={{
          tabBarLabel:'Chat',
          tabBarLabelStyle:{color:'black', fontSize:12},
          headerShown:false,
          tabBarIcon:({focused})=>
          focused?
          (<Icon name="tasks" size={24} color="#f0c44d"/>):
          (<Icon name="tasks" size={24} color="black"/>)
          }}/>

        <Tab.Screen name='Aws' component={Aws} 
          options={{
          tabBarLabel:'Aws',
          tabBarLabelStyle:{color:'black', fontSize:12},
          headerShown:false,
          tabBarIcon:({focused})=>
          focused?
          (<Icon name="tasks" size={24} color="#f0c44d"/>):
          (<Icon name="tasks" size={24} color="black"/>)
          }}/>
      </Tab.Navigator>
      
    </NavigationContainer>
    <ModalPortal/>
    
    </>
  )
}

export default App

const styles = StyleSheet.create({})