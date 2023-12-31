import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AppTextInput from '../components/AppTextInput';
import LoginButton from '../components/LoginButton';
import SignUpButton from '../components/SignUpButton';


const LoginScreen = (props:any) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [NewPassword, setNewPassword] = useState("")
  const [showNewPasswordfiled, setShowNewPasswordfiled] = useState(false)

  const clearUserName = () => {setUserName("")}
  const clearPassword = () => {setPassword("")}

  const onPressLoginHandler = () => {
    props.navigation.navigate("HomeScreen")
  }

  const showNewPasswordfiledHandler = () => {
    setShowNewPasswordfiled(!showNewPasswordfiled)
  }

  return (
    <LinearGradient style={styles.mainContainer} colors={['#320738', '#7e248a', '#850e87']}>
      <View style={styles.loginContainer}>
        <View style={{ marginTop: 30 }}>
          <AppTextInput
            placeHolderName='UserName'
            value={userName}
            OnChange={(newText) => setUserName(newText)}
          />
          <AppTextInput
            placeHolderName='Password'
            value={password}
            OnChange={(password) => setPassword(password)}
            password={true}
          />
          {showNewPasswordfiled &&  <AppTextInput
            placeHolderName='New Password'
            value={NewPassword}
            OnChange={(NewPassword) => setNewPassword(NewPassword)}
            password={true}
          />}
          <View style={styles.ButtonStyle}>
            <SignUpButton 
            clearUserNameText={clearUserName} 
            clearPasswordText={clearPassword}
            showNewPasswordfiled={showNewPasswordfiledHandler}
            />
            <LoginButton 
            clearUserNameText={clearUserName} 
            clearPasswordText={clearPassword}
            onPressLoginHandler={onPressLoginHandler}
            />
          </View>
        </View>
      </View>
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
    width: 330,
    backgroundColor: "#f2ebeb",
    borderRadius: 10,
    elevation: 10,
    alignItems: "center",
    paddingBottom: 40
  },
  ButtonStyle:{
    flexDirection: 'row',
    justifyContent:"space-between",
    marginTop:10
  }
})

export default LoginScreen