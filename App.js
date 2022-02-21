import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from './app/screens/RNCamera';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {HomeScreen} from './app/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ConfimationImage } from './app/screens/ConfimationImage';
import RNCVideo from './app/screens/RNCVideo';

const NativeStackNav = createNativeStackNavigator();

function RootNav() {
  return (
    <NativeStackNav.Navigator initialRouteName="HOME">
      <NativeStackNav.Screen
        name="HOME"
        component={HomeScreen}
        options={{ headerShown: false }}
      ></NativeStackNav.Screen>
      <NativeStackNav.Screen
        name="CAMERA"
        component={RNCamera}
        options={{ headerShown: false }}
      ></NativeStackNav.Screen>
      <NativeStackNav.Screen
        name="CONFIRMATION"
        component={ConfimationImage}
        options={{ headerShown: false }}
      ></NativeStackNav.Screen>
      <NativeStackNav.Screen
        name="VIDEO"
        component={RNCVideo}
        options={{ headerShown: false }}
      ></NativeStackNav.Screen>
    </NativeStackNav.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
