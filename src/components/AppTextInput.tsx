import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
interface TextInputProps {
  placeHolderName: string,
  value: string,
  OnChange: (res: string) => void
  password?: boolean
}
const AppTextInput = (props: TextInputProps) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        value={props.value}
        onChangeText={(res) => props.OnChange(res)}
        placeholder={props.placeHolderName}
        placeholderTextColor={"#91969e"}
        secureTextEntry = {props.password}
        style = {{color:"black"}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 40,
    width: 250,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 10
  }
})

export default AppTextInput