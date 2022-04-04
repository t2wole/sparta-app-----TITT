import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['Warning:...']);
  
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>sparta seok!</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'blue'
  }
});
