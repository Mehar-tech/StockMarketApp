import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
interface SignUpButtonProps  {
    clearUserNameText : () => void
    clearPasswordText : () => void
    showNewPasswordfiled: () => void
}
const SignUpButton = (props:SignUpButtonProps) => {
  return (
      <TouchableOpacity style={styles.buttonStyle}
          onPress={() => {
              props.clearUserNameText()
              props.clearPasswordText()
              props.showNewPasswordfiled()
          }}
      >
          <Text style={styles.textStyle}>SignUp</Text>
      </TouchableOpacity> 
  )
}

export default SignUpButton

const styles = StyleSheet.create({
    buttonStyle: {
        height: 40,
        width: 110,
        borderRadius: 10,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#7e1e87",
        elevation:5
    },
    textStyle: {
        color: "#e8e3e8",
        fontSize: 15
    }
})