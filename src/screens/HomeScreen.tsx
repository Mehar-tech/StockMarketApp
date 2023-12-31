import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const HomeScreen = () => {
  const publishToken = "pk_fbf9620a696e49b68cce56dc89a1a1db";
  const [appleData, setAppleData] = useState("");
  const [microsoftData, setMicrosoftData] = useState("");
  const [teslaData, setTeslaData] = useState("");

  const getAppleData = () => {
    const url = "https://api.iex.cloud/v1/data/core/quote/aapl?token="+publishToken
    fetch(url)
    .then(res => res.json())
    .then(setAppleData)
    .catch()
  }

  const getMicrosoftData = () => {
    const url = "https://api.iex.cloud/v1/data/core/fundamentals/msft?token="+publishToken
    fetch(url)
    .then(res => res.json())
    .then(setMicrosoftData)
    .catch()
  }

  const getTeslaData = () => {
    const url = "https://api.iex.cloud/v1/data/core/cash_flow/tsla?token="+publishToken
     fetch(url)
    .then(res => res.json())
    .then(setTeslaData)
    .catch()
  }
  useEffect(() => {
    getAppleData()
    getMicrosoftData()
    getTeslaData()
  },[])

  return (

    <LinearGradient style={styles.mainContainer} colors={['#320738', '#7e248a', '#850e87']}>
      <ScrollView>  
      <Button
      title='test'
      color={"white"}
      onPress={() => {console.log("==>Appledata",appleData[0])
                console.log("==>MicrosoftData",microsoftData)
                console.log("==>teslaData",teslaData)
    }}
      />
      </ScrollView>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }})