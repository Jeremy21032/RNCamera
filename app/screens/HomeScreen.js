import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native';

export const HomeScreen = ({navigation}) => {
    
  return (
    <SafeAreaView style={styles.container}>
      <Button title="CAMERA" onPress={()=>{navigation.navigate("CAMERA")}}/>
      <Button title="VIDEO" onPress={()=>{navigation.navigate("CAMERA")}}/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      justifyContent: 'center',
    },
  });