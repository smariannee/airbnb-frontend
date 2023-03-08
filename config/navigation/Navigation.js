import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import ProfileStack from '../stack/ProfileStack'
import AuthStack from '../stack/AuthStack'
import CreateAccount from '../../modules/users/adapters/screens/CreateAccount'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      > 

        <Tab.Screen 
          name="login"
          options={{ title: 'Inicio' }}
          component={AuthStack}
        />

        <Tab.Screen
          name="createAccount"
          options={{ title: 'Crear cuenta' }}
          component={CreateAccount}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'login':
      iconName = 'login'
      break;
    case 'createAccount':
      iconName = 'account-plus'
      break;
    default:
      break;
  }

  return <Icon type="material-community" name={iconName} size={22} color={color} />
}