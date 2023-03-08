import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../modules/home/adapters/screens/Home'

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
        initialRouteName='ProfileStack'
        screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#ff5a60' }
        }}
    >

        <Stack.Screen 
            name="HomeStack"
            options={{ title: 'Inicio' }}
            component={Home}
        />

    </Stack.Navigator>
  )
}