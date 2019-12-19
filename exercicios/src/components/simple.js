import React from 'react';
import { Text } from 'react-native';

export default function Simple({ text }) {
  return <Text>It's a {text ? text : 'simple'} component!</Text>;
}
