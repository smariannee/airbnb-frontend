import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../modules/users/adapters/screens/Profile'
import Login from '../../modules/auth/adapters/screens/Login'
import CreateUser from '../../modules/users/adapters/screens/CreateAccount'

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
            name="ProfileStack"
            options={{ title: 'Profile' }}
            component={Profile}
        />

    </Stack.Navigator>
  )
}