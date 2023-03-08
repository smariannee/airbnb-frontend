import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyA02BMH3wdUhPiBeRmaxoVR4uro7Z0ibKE",
  authDomain: "airbnb-791e3.firebaseapp.com",
  projectId: "airbnb-791e3",
  storageBucket: "airbnb-791e3.appspot.com",
  messagingSenderId: "831791424751",
  appId: "1:831791424751:web:757802753b81b40272671a"
};

export const app = initializeApp(firebaseConfig); 
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});