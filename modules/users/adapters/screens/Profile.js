import { StyleSheet, View } from "react-native";
import React  from "react";
import { Button } from "@rneui/base";
import { getAuth  } from "firebase/auth"; 'firebase/auth'

export default function UserProfile(props) {

  const auth = getAuth();
  return (
    <View style={styles.container}>
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnLogout}
        onPress={() => auth.signOut()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      minHeight: "100%",
      backgroundColor: "white",
    },
    btnLogout: {
      width: "75%",
      borderRadius: 5,
      alignSelf: "center",
      marginVertical: 50,
      backgroundColor: "#ff5a60",
    },
  });