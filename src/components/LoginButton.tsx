import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface LoginButtonProps  {
    clearUserNameText : () => void
    clearPasswordText : () => void
    onPressLoginHandler : () => void
}

const LoginButton = (props:LoginButtonProps) => {
    return (
        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => {
                props.clearUserNameText()
                props.clearPasswordText()
                props.onPressLoginHandler()
            }}
        >
            <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
    )
}

export default LoginButton

const styles = StyleSheet.create({
    buttonStyle: {
        height: 40,
        width: 110,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#7e1e87",
        elevation:5
    },
    textStyle: {
        color: "#e8e3e8",
        fontSize: 15
    }
})