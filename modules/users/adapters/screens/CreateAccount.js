import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isEmpty, size } from 'lodash'
import { Button, Image, Icon, Input } from '@rneui/base'
import Loading from '../../../../kernel/components/Loading'
import { validateEmail } from '../../../../kernel/validations'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from '../../../../kernel/http-client-gateway'

export default function CreateAccount() {
  const payload = {
    email: "",
    password: "",
    repeatPassword: ""
  };

  const auth = getAuth();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(payload);
  const [data, setData] = useState(payload);
  const [showPassword, setShowPassword] = useState(true);
  const [showRepeatPassword, setShowRepeatPassword] = useState(true);

  const changePayload = (e, type) => {
    setData({
      ...data, [type]: e.nativeEvent.text
    })
  }

  const createUser = () => {
    if (!(isEmpty(data.email) || isEmpty(data.password) || isEmpty(data.repeatPassword))) {
        if (validateEmail(data.email)) {
            if (size(data.password) >= 6) {
                if (data.password == data.repeatPassword) {
                    setError(payload);
                    setShow(true)
                    createUserWithEmailAndPassword(auth, data.email, data.password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            (async () => {
                              try {
                                const object = {
                                  email: data.email,
                                  password: data.password,
                                  uid: user.uid,
                                  image_profile: '',
                                  id_person: 0
                                }
                                const response = await axios.doPost('/user', object)
                                console.log("response",response)
                                setShow(false)
                              } catch (error) {
                                setShow(false)
                                console.log("error",error)
                              }
                            })()
                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            // ..
                        });
                } else {
                    setError({ repeatPassword: "Las contraseñas no coinciden", email: "", password: "" })
                }
            } else {
                setError({ password: "La contraseña debe ser mayor a 6 caracteres", email: "", repeatPassword: "" })
            }
        } else {
            setError({ email: "Correo no válido", password: "", repeatPassword: "" })
        }
    } else {
        setError({ email: "Campo obligatorio", password: "Campo obligatorio", repeatPassword: "Campo obligatorio" })
    }
}

  return (
    <KeyboardAwareScrollView>
      <Image
        source={require('../../../../assets/logo.png')}
        resizeMode='contain'
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <View style={styles.container}>
          <Input
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            rightIcon={
              <Icon type="material-community" name="email-outline" size={22} />
            }
            containerStyle={styles.input}
            onChange={(e) => changePayload(e, "email")}
            errorMessage={error.email}
            autoCapitalize="none"
          />
          <Input
            placeholder="Contraseña"
            containerStyle={styles.input}
            rightIcon={
              <Icon
                type="material-community"
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={22}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            onChange={(e) => changePayload(e, "password")}
            secureTextEntry={showPassword}
            errorMessage={error.password}
          />
          <Input
            placeholder="Repetir contraseña"
            containerStyle={styles.input}
            rightIcon={
              <Icon
                type="material-community"
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={22}
                onPress={() => setShowRepeatPassword(!showRepeatPassword)}
              />
            }
            onChange={(e) => changePayload(e, "repeatPassword")}
            secureTextEntry={showRepeatPassword}
            errorMessage={error.repeatPassword}
          />
          <Button
            title='Crear cuenta'
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={createUser}
          />
        </View>
      </View>
      <Loading show={show} text="Creando cuenta" />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: "70%",
    marginHorizontal: 50,
    height: 150,
    marginTop: 30
  },
  viewForm: {
    marginHorizontal: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  input: {
    width: '100%',
    marginVertical: 10
  },
  btnContainer: {
    marginBottom: 20,
    width: "95%"
  },
  btn: {
    backgroundColor: "#00a680"
  }
})

