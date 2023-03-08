import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import ProfileStack from "../stack/ProfileStack";
import HomeStack from "../stack/HomeStack";
import SettingsStack from "../stack/SettingsStack";

const Tab = createBottomTabNavigator();

export default function NavigationUser() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="profile"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >

        <Tab.Screen
          name="home"
          options={{ title: "Inicio" }}
          component={HomeStack}
        />

        <Tab.Screen
          name="profile"
          options={{ title: "Perfil" }}
          component={ProfileStack}
        />

        <Tab.Screen
          name="settings"
          options={{ title: "Configuración" }}
          component={SettingsStack}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "profile":
      iconName = "account";
      break;
    case "home":
      iconName = "home";
      break;
    case "settings":
      iconName = "cog";
      break;
    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};
