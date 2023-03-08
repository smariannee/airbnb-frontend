import React, { useState, useEffect } from "react";
import Navigation from "./config/navigation/Navigation";
import NavigationUser from "./config/navigation/NavigationUser";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { initializeApp } from "firebase/app"; //importar componentes de react
import Login from './modules/auth/adapters/screens/Login'; //importar componentes export default function, para reconocer por nombramiento default para una y sin default para muchas
import { app } from './config/utils/firebase';
import { LogBox } from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (credential) => {
      setUser(credential);
      !credential ? setSession(false) : setSession(true);
    });
  }, []);

  return (
    session ? <NavigationUser /> : <Navigation />
  );
}

