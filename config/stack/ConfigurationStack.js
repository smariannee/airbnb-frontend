import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from '../../modules/settings/adapters/screens/Settings'

const Stack = createNativeStackNavigator();

export default function ConfigurationStack() {
  return (
    <Stack.Navigator
        initialRouteName='SettingsStack'
        screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#ff5a60' }
        }}
    >

        <Stack.Screen 
            name="SettingsStack"
            options={{ title: 'Settings' }}
            component={Settings}
        />

    </Stack.Navigator>
  )
}