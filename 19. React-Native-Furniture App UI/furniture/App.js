import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import HomeView from './screens/HomeView';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <HomeView/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
