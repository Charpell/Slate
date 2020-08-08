import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackHome from './StackHome'

export default function App() {
  return (
    <NavigationContainer>
        <StackHome />
    </NavigationContainer>
  );
}