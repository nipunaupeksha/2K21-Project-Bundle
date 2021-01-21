import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import FloatingButton from './FloatingButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/1.jpg')} resizeMode="cover" style={{width:500, height:800, opacity:0.5}}/>
      <FloatingButton style={{bottom:100}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
