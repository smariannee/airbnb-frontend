import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../modules/auth/adapters/screens/Login'

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
        initialRouteName='LoginStack'
        screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#ff5a60' }
        }}
    >

        <Stack.Screen 
            name="LoginStack"
            options={{ title: 'Inicio de sesión' }}
            component={Login}
        />

    </Stack.Navigator>
  )
}