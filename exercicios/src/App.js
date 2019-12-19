import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Simple from './components/simple';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.f20}>App!</Text>

      <Simple />
      <Simple text="flexible" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 20,
  },
});
