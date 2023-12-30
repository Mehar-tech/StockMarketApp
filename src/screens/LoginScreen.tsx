import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
const LoginScreen = () => {
  return (
    <LinearGradient style = {styles.mainContainer} colors={['#320738', '#7e248a', '#850e87']}>
      <View style = {styles.loginContainer}></View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginContainer: {
    height: "25%",
    width: "85%",
    backgroundColor: "#f2ebeb",
    borderRadius: 10,
    elevation: 10
  }
})

export default LoginScreen