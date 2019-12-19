import React from 'react';
import { Text } from 'react-native';
import defaultComponents from '../styles/defaultComponents';

export default function Simple({ text }) {
  return (
    <Text style={defaultComponents.ex}>
      It's a {text ? text : 'simple'} component!
    </Text>
  );
}
